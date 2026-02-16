import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  service?: string;
  message?: string;
  company?: string;
};

const rateLimitWindowMs = 60_000;
const rateLimitMax = 5;
const inMemoryHits = new Map<string, { count: number; expiresAt: number }>();

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function shouldRateLimit(ip: string) {
  const now = Date.now();
  const current = inMemoryHits.get(ip);

  if (!current || current.expiresAt <= now) {
    inMemoryHits.set(ip, { count: 1, expiresAt: now + rateLimitWindowMs });
    return false;
  }

  current.count += 1;
  return current.count > rateLimitMax;
}

async function sendViaResend(payload: Required<Omit<ContactPayload, "company">>) {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

  if (!apiKey || !toEmail) {
    console.warn("[contact] Missing RESEND_API_KEY or CONTACT_TO_EMAIL. Skipping email send.");
    return { sent: false, reason: "Email provider not configured." };
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      subject: `New website enquiry: ${payload.service}`,
      text: `${payload.name}\n${payload.email}\n\n${payload.message}`
    })
  });

  if (!response.ok) {
    return { sent: false, reason: "Provider error" };
  }

  return { sent: true };
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

  if (shouldRateLimit(ip)) {
    return NextResponse.json({ ok: false, message: "Too many requests. Please try again shortly." }, { status: 429 });
  }

  const payload = (await request.json()) as ContactPayload;

  if (payload.company) {
    return NextResponse.json({ ok: true, message: "Thanks. We will reply shortly." });
  }

  if (!payload.name || payload.name.length < 2 || !payload.email || !isEmail(payload.email) || !payload.message || payload.message.length < 10) {
    return NextResponse.json({ ok: false, message: "Please complete all required fields." }, { status: 400 });
  }

  const result = await sendViaResend({
    name: payload.name.trim(),
    email: payload.email.trim(),
    service: payload.service?.trim() || "General enquiry",
    message: payload.message.trim()
  });

  if (!result.sent) {
    return NextResponse.json({ ok: true, message: "Message captured. Email delivery is not configured in this environment yet." });
  }

  return NextResponse.json({ ok: true, message: "Thank you. We will respond soon." });
}
