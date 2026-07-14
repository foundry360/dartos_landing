import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Valid email is required").max(200),
  message: z.string().trim().min(1, "Message is required").max(5000),
  website: z.string().max(0).optional(), // honeypot — must stay empty
});

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? "hello@vectordarts.app";
  const from =
    process.env.CONTACT_FROM_EMAIL ?? "VectorDarts <hello@vectordarts.app>";

  if (!apiKey) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid form data." },
      { status: 400 },
    );
  }

  // Honeypot filled → pretend success
  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  const { name, email, message } = parsed.data;
  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email,
    subject: `VectorDarts contact — ${name}`,
    text: [`Name: ${name}`, `Email: ${email}`, "", message].join("\n"),
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Unable to send message. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
