import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);
const TO_EMAIL = 'sam641941950@gmail.com';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { name, type, workingOn, outcome, email } = body;

    if (!name || !type || !workingOn || !email) {
      return new Response(JSON.stringify({ error: 'Missing required fields.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

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
      ].filter(Boolean).join('\n'),
    });

    if (error) {
      console.error('Resend error:', error);
      return new Response(JSON.stringify({ error: 'Failed to send message.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Contact API error:', err);
    return new Response(JSON.stringify({ error: 'Server error.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
