"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { locales, localeNames } from "@/i18n/config";
import type { Locale } from "@/i18n/config";

export default function LanguageSwitcher({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function getLocalizedPath(targetLocale: string) {
    const segments = pathname.split("/");
    segments[1] = targetLocale;
    return segments.join("/");
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-sm font-medium text-charcoal transition-colors hover:text-gold uppercase"
        aria-expanded={open}
        aria-haspopup="true"
      >
        {locale.toUpperCase()}
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="M3 5l3 3 3-3" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-40 rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5">
          {locales.map((loc) => (
            <Link
              key={loc}
              href={getLocalizedPath(loc)}
              onClick={() => setOpen(false)}
              className={`block px-4 py-2 text-sm transition-colors hover:bg-cream ${
                loc === locale
                  ? "font-semibold text-gold"
                  : "text-charcoal hover:text-navy"
              }`}
            >
              {localeNames[loc]}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
