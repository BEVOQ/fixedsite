"use client";

import { FormEvent, useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      service: formData.get("service"),
      details: formData.get("details"),
      website: formData.get("website")
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const result = (await response.json()) as { message?: string };

    if (!response.ok) {
      setState("error");
      setMessage(result.message ?? "We couldn&apos;t send your request. Please try again.");
      return;
    }

    setState("success");
    setMessage(result.message ?? "Thanks — we&apos;ll reply shortly.");
    form.reset();
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-black/10 bg-white p-6 shadow-soft">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm">
          <span className="mb-1 block text-muted">Name</span>
          <input required name="name" className="w-full rounded-lg border border-black/10 px-3 py-2" />
        </label>
        <label className="text-sm">
          <span className="mb-1 block text-muted">Email</span>
          <input required name="email" type="email" className="w-full rounded-lg border border-black/10 px-3 py-2" />
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm">
          <span className="mb-1 block text-muted">Phone / WhatsApp</span>
          <input name="phone" className="w-full rounded-lg border border-black/10 px-3 py-2" />
        </label>
        <label className="text-sm">
          <span className="mb-1 block text-muted">Service</span>
          <select name="service" className="w-full rounded-lg border border-black/10 px-3 py-2">
            <option>Landscaping</option>
            <option>Handyman</option>
            <option>Microcement finishes</option>
            <option>General enquiry</option>
          </select>
        </label>
      </div>
      <label className="text-sm block">
        <span className="mb-1 block text-muted">Project details</span>
        <textarea required minLength={20} name="details" rows={5} className="w-full rounded-lg border border-black/10 px-3 py-2" />
      </label>

      <input
        name="website"
        autoComplete="off"
        tabIndex={-1}
        className="hidden"
        aria-hidden
      />

      <button
        disabled={state === "loading"}
        className="rounded-full bg-ink px-5 py-2.5 text-sm text-white disabled:opacity-60"
      >
        {state === "loading" ? "Sending..." : "Send enquiry"}
      </button>

      {message && (
        <p className={`text-sm ${state === "success" ? "text-emerald-700" : "text-red-700"}`}>
          {message}
        </p>
      )}
    </form>
  );
}
