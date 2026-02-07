"use client";

import { useEffect } from "react";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";
import { NAV_LINKS } from "@/lib/constants";

function getNavLabel(labelKey: string, dict: Dictionary): string {
  const key = labelKey.split(".")[1] as keyof Dictionary["nav"];
  return dict.nav[key] || labelKey;
}

export default function MobileMenu({
  isOpen,
  onClose,
  locale,
  dict,
}: {
  isOpen: boolean;
  onClose: () => void;
  locale: Locale;
  dict: Dictionary;
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div
        className="absolute inset-0 bg-navy/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <nav
        className="absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-xl animate-slide-in-right"
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-end p-6">
          <button
            onClick={onClose}
            className="p-2 text-navy"
            aria-label={dict.nav.menuClose}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col gap-2 px-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={`/${locale}${link.href}`}
              onClick={onClose}
              className="block py-3 text-lg font-medium text-charcoal transition-colors hover:text-gold border-b border-gray-100"
            >
              {getNavLabel(link.labelKey, dict)}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
