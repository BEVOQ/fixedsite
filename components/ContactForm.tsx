"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setStatus("loading");
    setMessage("");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(formData.entries()))
    });

    const data = (await response.json()) as { ok: boolean; message: string };

    if (response.ok && data.ok) {
      setStatus("success");
      setMessage(data.message);
      form.reset();
      return;
    }

    setStatus("error");
    setMessage(data.message || "Unable to send message.");
  }

  return (
    <form onSubmit={onSubmit} className="card space-y-4 p-6" aria-live="polite">
      <div>
        <label htmlFor="name" className="text-sm font-medium">
          Name
        </label>
        <input id="name" name="name" required className="mt-1 w-full rounded-lg border border-black/15 bg-white p-3 text-sm" />
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <input id="email" name="email" type="email" required className="mt-1 w-full rounded-lg border border-black/15 bg-white p-3 text-sm" />
      </div>
      <div>
        <label htmlFor="service" className="text-sm font-medium">
          Service
        </label>
        <select id="service" name="service" className="mt-1 w-full rounded-lg border border-black/15 bg-white p-3 text-sm">
          <option>Landscaping</option>
          <option>Handyman</option>
          <option>Microcement</option>
          <option>General enquiry</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium">
          Project details
        </label>
        <textarea id="message" name="message" required rows={5} className="mt-1 w-full rounded-lg border border-black/15 bg-white p-3 text-sm" />
      </div>
      <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />
      <button disabled={status === "loading"} className="btn-primary" type="submit">
        {status === "loading" ? "Sending..." : "Send enquiry"}
      </button>
      {message ? <p className="text-sm text-muted">{message}</p> : null}
    </form>
  );
}
