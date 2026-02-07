"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileMenu from "./MobileMenu";

function getNavLabel(
  labelKey: string,
  dict: Dictionary
): string {
  const key = labelKey.split(".")[1] as keyof Dictionary["nav"];
  return dict.nav[key] || labelKey;
}

export default function Header({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href={`/${locale}/`}
          className="font-serif text-xl font-bold tracking-wide text-navy lg:text-2xl"
        >
          {SITE_NAME}
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={`/${locale}${link.href}`}
              className="text-sm font-medium tracking-wide text-charcoal transition-colors hover:text-gold uppercase"
            >
              {getNavLabel(link.labelKey, dict)}
            </Link>
          ))}
          <LanguageSwitcher locale={locale} />
        </nav>

        <div className="flex items-center gap-4 lg:hidden">
          <LanguageSwitcher locale={locale} />
          <button
            onClick={() => setMobileOpen(true)}
            className="p-2 text-navy"
            aria-label={dict.nav.menuOpen}
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
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        locale={locale}
        dict={dict}
      />
    </header>
  );
}
