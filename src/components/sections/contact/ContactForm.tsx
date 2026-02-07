"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { FORMSPREE_ENDPOINT } from "@/lib/constants";

interface ContactFormProps {
  dict: {
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    destination: string;
    destinationPlaceholder: string;
    dates: string;
    datesPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
    required: string;
  };
}

export default function ContactForm({ dict }: ContactFormProps) {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-sm bg-forest/10 p-8 text-center">
        <svg
          className="mx-auto mb-4 h-12 w-12 text-forest"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
        <p className="text-lg font-medium text-forest">
          {dict.success}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-navy">
            {dict.name} <span className="text-gold">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder={dict.namePlaceholder}
            className="w-full rounded-sm border border-gray-200 bg-white px-4 py-3 text-base text-charcoal transition-colors focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-navy">
            {dict.email} <span className="text-gold">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder={dict.emailPlaceholder}
            className="w-full rounded-sm border border-gray-200 bg-white px-4 py-3 text-base text-charcoal transition-colors focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-navy">
            {dict.phone}
          </label>
          <input
            type="tel"
            name="phone"
            placeholder={dict.phonePlaceholder}
            className="w-full rounded-sm border border-gray-200 bg-white px-4 py-3 text-base text-charcoal transition-colors focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-navy">
            {dict.destination}
          </label>
          <input
            type="text"
            name="destination"
            placeholder={dict.destinationPlaceholder}
            className="w-full rounded-sm border border-gray-200 bg-white px-4 py-3 text-base text-charcoal transition-colors focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-navy">
          {dict.dates}
        </label>
        <input
          type="text"
          name="dates"
          placeholder={dict.datesPlaceholder}
          className="w-full rounded-sm border border-gray-200 bg-white px-4 py-3 text-base text-charcoal transition-colors focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-navy">
          {dict.message} <span className="text-gold">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder={dict.messagePlaceholder}
          className="w-full rounded-sm border border-gray-200 bg-white px-4 py-3 text-base text-charcoal transition-colors focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold resize-none"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">{dict.error}</p>
      )}

      <Button
        type="submit"
        disabled={status === "sending"}
      >
        {status === "sending" ? dict.sending : dict.submit}
      </Button>
    </form>
  );
}
