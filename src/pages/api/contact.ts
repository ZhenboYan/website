import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);
const TO_EMAIL = 'cathymc924+workwithme@gmail.com';

export const prerender = false;

// Simple in-memory rate limit: 5 submissions per IP per hour
const submissions = new Map<string, number[]>();
const RATE_LIMIT = 5;
const WINDOW_MS = 60 * 60 * 1000; // 1 hour

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (submissions.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  submissions.set(ip, timestamps);
  if (timestamps.length >= RATE_LIMIT) return true;
  timestamps.push(now);
  return false;
}

function getClientIP(request: Request): string {
  return (
    request.headers.get('cf-connecting-ip') ||
    request.headers.get('x-real-ip') ||
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    'unknown'
  );
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const clientIP = getClientIP(request);

    if (isRateLimited(clientIP)) {
      return new Response(
        JSON.stringify({ error: 'Too many submissions. Please try again later.' }),
        { status: 429, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const body = await request.json();
    const { name, type, workingOn, outcome, email } = body;

    if (!name || !type || !workingOn || !email) {
      return new Response(JSON.stringify({ error: 'Missing required fields.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    console.log(`Sending email to ${TO_EMAIL} from ${email}...`);
    const { data, error } = await resend.emails.send({
      from: 'Work With Me <form@catherine-mcmillan.com>',
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
      ].filter(Boolean).join('\n'),
    });

    if (error) {
      console.error('Resend error:', JSON.stringify(error));
      return new Response(JSON.stringify({ error: 'Failed to send message.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    console.log(`✓ Email sent. Resend ID: ${data?.id}`);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err: any) {
    console.error('Contact API error:', err?.message || err);
    return new Response(JSON.stringify({ error: 'Server error.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
