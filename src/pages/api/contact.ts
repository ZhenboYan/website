import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { checkRateLimit, getResetTimeMinutes } from '../../utils/rateLimit';

const resend = new Resend(import.meta.env.RESEND_API_KEY);
const TO_EMAIL = 'sam641941950@gmail.com';

export const prerender = false;

// Helper to get client IP
function getClientIP(request: Request): string {
  // Check common headers for IP (Vercel, Cloudflare, etc.)
  const forwardedFor = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  const cfConnectingIP = request.headers.get('cf-connecting-ip');

  if (cfConnectingIP) return cfConnectingIP;
  if (realIP) return realIP;
  if (forwardedFor) return forwardedFor.split(',')[0].trim();

  return 'unknown';
}

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const POST: APIRoute = async ({ request }) => {
  try {
    // Get client IP for rate limiting
    const clientIP = getClientIP(request);

    // Check rate limit (3 submissions per hour per IP)
    const rateLimitResult = checkRateLimit(clientIP);
    if (!rateLimitResult.allowed) {
      const minutesRemaining = getResetTimeMinutes(rateLimitResult.resetTime);
      return new Response(
        JSON.stringify({
          error: `Too many submissions. Please try again in ${minutesRemaining} minute${minutesRemaining !== 1 ? 's' : ''}.`
        }),
        {
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': rateLimitResult.resetTime.toString(),
          },
        }
      );
    }

    const body = await request.json();
    const { name, type, workingOn, outcome, email, website, timestamp } = body;

    // Honeypot check - if 'website' field is filled, it's a bot
    if (website) {
      console.warn(`Bot detected from IP ${clientIP}: honeypot field filled`);
      return new Response(JSON.stringify({ error: 'Invalid submission.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Time-based validation - form must be open for at least 3 seconds
    if (timestamp) {
      const timeElapsed = (Date.now() - timestamp) / 1000;
      if (timeElapsed < 3) {
        console.warn(`Suspicious submission from IP ${clientIP}: too fast (${timeElapsed}s)`);
        return new Response(JSON.stringify({ error: 'Please take your time to fill out the form.' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    }

    // Required field validation
    if (!name || !type || !workingOn || !email) {
      return new Response(JSON.stringify({ error: 'Missing required fields.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Length validation
    if (name.length > 100) {
      return new Response(JSON.stringify({ error: 'Name is too long.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (email.length > 254 || !EMAIL_REGEX.test(email)) {
      return new Response(JSON.stringify({ error: 'Invalid email address.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (workingOn.length > 2000) {
      return new Response(JSON.stringify({ error: 'Working on description is too long.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (outcome && outcome.length > 2000) {
      return new Response(JSON.stringify({ error: 'Outcome description is too long.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Send email via Resend
    const { error } = await resend.emails.send({
      from: 'Work With Me Form <onboarding@resend.dev>',
      to: TO_EMAIL,
      subject: `New inquiry from ${name} (${type})`,
      replyTo: email,
      text: [
        `Name: ${name}`,
        `Type: ${type}`,
        `Email: ${email}`,
        '',
        `What they're working on:`,
        workingOn,
        '',
        outcome ? `Desired outcome:\n${outcome}` : '',
        '',
        `---`,
        `Submitted from IP: ${clientIP}`,
      ].filter(Boolean).join('\n'),
    });

    if (error) {
      console.error('Resend error:', error);
      return new Response(JSON.stringify({ error: 'Failed to send message.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    console.log(`✓ Contact form submission from ${email} (IP: ${clientIP})`);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
      },
    });
  } catch (err) {
    console.error('Contact API error:', err);
    return new Response(JSON.stringify({ error: 'Server error.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
