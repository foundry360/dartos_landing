"use client";

import { useState, type FormEvent } from "react";
import { CONTACT_EMAIL } from "@/features/landing/data";
import { cn } from "@/utils";

type FormState = {
  name: string;
  email: string;
  message: string;
  website: string;
};

const INITIAL: FormState = { name: "", email: "", message: "", website: "" };

const fieldClass =
  "w-full border-0 border-b border-white/15 bg-transparent px-0 py-4 text-base text-white outline-none transition-colors placeholder:text-white/25 focus:border-[#84C126] sm:py-5 sm:text-lg";

export function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await response.json().catch(() => null)) as {
        error?: string;
      } | null;

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(
          data?.error ?? "Unable to send message. Please try again.",
        );
        return;
      }

      setStatus("sent");
      setForm(INITIAL);
    } catch {
      setStatus("error");
      setErrorMessage("Unable to send message. Please try again.");
    }
  };

  if (status === "sent") {
    return (
      <div className="pt-2">
        <p className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-[0.02em] sm:text-4xl">
          Message sent
          <span className="text-[#84C126]">.</span>
        </p>
        <p className="mt-4 text-base leading-relaxed text-white/45 sm:text-lg">
          Thanks for reaching out. We&apos;ll get back to you soon at the email
          you provided.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 text-sm font-bold tracking-[0.16em] text-white/50 uppercase transition-colors hover:text-[#84C126]"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8 sm:space-y-10">
      {/* Honeypot — hidden from users */}
      <input
        type="text"
        name="website"
        value={form.website}
        onChange={(event) =>
          setForm((prev) => ({ ...prev, website: event.target.value }))
        }
        tabIndex={-1}
        autoComplete="off"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
        aria-hidden
      />

      <div className="grid gap-8 sm:grid-cols-2 sm:gap-10">
        <label className="block">
          <span className="mb-2 block text-xs tracking-[0.16em] text-white/35 uppercase">
            Name
          </span>
          <input
            required
            name="name"
            autoComplete="name"
            value={form.name}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, name: event.target.value }))
            }
            className={fieldClass}
            placeholder="Your name"
            disabled={status === "sending"}
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-xs tracking-[0.16em] text-white/35 uppercase">
            Email
          </span>
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            value={form.email}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, email: event.target.value }))
            }
            className={fieldClass}
            placeholder="you@email.com"
            disabled={status === "sending"}
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-2 block text-xs tracking-[0.16em] text-white/35 uppercase">
          Message
        </span>
        <textarea
          required
          name="message"
          rows={5}
          value={form.message}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, message: event.target.value }))
          }
          className={cn(fieldClass, "resize-none")}
          placeholder="How can we help?"
          disabled={status === "sending"}
        />
      </label>

      {status === "error" && errorMessage ? (
        <p className="text-sm text-red-400">
          {errorMessage} Or email us at{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="underline decoration-white/20 underline-offset-4 transition-colors hover:text-white"
          >
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-2 inline-flex items-center justify-center rounded-full border border-[#84C126] px-10 py-4 font-[family-name:var(--font-display)] text-base font-extrabold tracking-[0.12em] text-[#84C126] uppercase transition-colors hover:bg-[#84C126]/10 disabled:cursor-not-allowed disabled:opacity-50 sm:px-12 sm:py-5 sm:text-lg"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
