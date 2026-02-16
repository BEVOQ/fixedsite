import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  details?: string;
  website?: string;
};

const WINDOW_MS = 60_000;
const MAX_REQUESTS = 4;
const requestLog = new Map<string, number[]>();

function getClientIp(request: Request) {
  const forwardedHeaders = [
    request.headers.get("x-forwarded-for"),
    request.headers.get("x-real-ip"),
    request.headers.get("cf-connecting-ip")
  ];

  for (const headerValue of forwardedHeaders) {
    if (headerValue) {
      const candidate = headerValue.split(",")[0]?.trim();
      if (candidate) {
        return candidate;
      }
    }
  }

  const userAgent = request.headers.get("user-agent")?.trim() || "no-ua";
  const acceptLanguage = request.headers.get("accept-language")?.trim() || "no-lang";

  return `fingerprint:${userAgent}:${acceptLanguage}`;
}

function hitRateLimit(key: string) {
  const now = Date.now();
  const entries = requestLog.get(key) ?? [];
  const validEntries = entries.filter((timestamp) => now - timestamp < WINDOW_MS);

  if (validEntries.length >= MAX_REQUESTS) {
    requestLog.set(key, validEntries);
    return true;
  }

  validEntries.push(now);
  requestLog.set(key, validEntries);
  return false;
}

function validate(payload: ContactPayload) {
  if (payload.website) {
    return "Spam detected.";
  }

  if (!payload.name || payload.name.trim().length < 2) {
    return "Please provide your name.";
  }

  const email = payload.email?.trim();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "Please provide a valid email.";
  }

  if (!payload.details || payload.details.trim().length < 20) {
    return "Please add at least 20 characters of project details.";
  }

  return null;
}

async function sendViaResend(payload: Required<Omit<ContactPayload, "website">>) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !to) {
    console.warn(
      "[contact] RESEND_API_KEY or CONTACT_TO_EMAIL missing. Form submissions are accepted but email delivery is disabled."
    );
    return false;
  }

  const html = `
    <h2>New Algarve Luxury Studio enquiry</h2>
    <p><strong>Name:</strong> ${payload.name}</p>
    <p><strong>Email:</strong> ${payload.email}</p>
    <p><strong>Phone:</strong> ${payload.phone || "n/a"}</p>
    <p><strong>Service:</strong> ${payload.service || "General enquiry"}</p>
    <p><strong>Details:</strong></p>
    <p>${payload.details.replace(/\n/g, "<br/>")}</p>
  `;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      from: "Algarve Luxury Studio <onboarding@resend.dev>",
      to: [to],
      reply_to: payload.email,
      subject: `New enquiry: ${payload.service || "General enquiry"}`,
      html
    })
  });

  if (!response.ok) {
    const body = await response.text();
    console.error("[contact] resend error", body);
    throw new Error("Email delivery failed");
  }

  return true;
}

export async function POST(request: Request) {
  const payload = (await request.json()) as ContactPayload;
  const validationError = validate(payload);

  if (validationError) {
    return NextResponse.json({ message: validationError }, { status: 400 });
  }

  const ip = getClientIp(request);
  if (hitRateLimit(ip)) {
    return NextResponse.json(
      { message: "Too many attempts. Please wait a minute and try again." },
      { status: 429 }
    );
  }

  const safePayload = {
    name: payload.name!.trim(),
    email: payload.email!.trim(),
    phone: payload.phone?.trim() || "",
    service: payload.service?.trim() || "General enquiry",
    details: payload.details!.trim()
  };

  try {
    const delivered = await sendViaResend(safePayload);
    return NextResponse.json({
      message: delivered
        ? "Thanks, your enquiry was sent. We will get back to you shortly."
        : "Thanks, your enquiry was received. Email delivery is not configured yet, but your setup is working in development."
    });
  } catch {
    return NextResponse.json(
      {
        message:
          "Your request was received, but we could not deliver email right now. Please contact us via WhatsApp while we resolve it."
      },
      { status: 502 }
    );
  }
}
