import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";
import { locales, localeNames } from "@/i18n/config";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";

function getNavLabel(labelKey: string, dict: Dictionary): string {
  const key = labelKey.split(".")[1] as keyof Dictionary["nav"];
  return dict.nav[key] || labelKey;
}

export default function Footer({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <footer className="bg-navy text-white/80">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Link
              href={`/${locale}/`}
              className="font-serif text-xl font-bold text-white"
            >
              {SITE_NAME}
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              {dict.footer.tagline}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">
              {dict.footer.navigation}
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={`/${locale}${link.href}`}
                    className="text-sm text-white/60 transition-colors hover:text-gold"
                  >
                    {getNavLabel(link.labelKey, dict)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">
              {dict.footer.connect}
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${dict.contact.info.email.value}`}
                  className="text-sm text-white/60 transition-colors hover:text-gold"
                >
                  {dict.contact.info.email.value}
                </a>
              </li>
              <li>
                <span className="text-sm text-white/60">
                  {dict.contact.info.phone.value}
                </span>
              </li>
            </ul>

            <h3 className="mb-3 mt-8 text-sm font-semibold uppercase tracking-wider text-gold">
              {dict.nav.languageSelect}
            </h3>
            <div className="flex gap-3">
              {locales.map((loc) => (
                <Link
                  key={loc}
                  href={`/${loc}/`}
                  className={`text-sm transition-colors ${
                    loc === locale
                      ? "font-semibold text-gold"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {localeNames[loc]}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/40">
          {dict.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
