import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { locales, localeHtmlLang } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";

const SITE_URL = "https://asiacuratedtravel.com";

type PageKey = "home" | "howItWorks" | "travelStyles" | "experiences" | "about" | "contact";

const pagePathMap: Record<PageKey, string> = {
  home: "",
  howItWorks: "how-it-works/",
  travelStyles: "travel-styles/",
  experiences: "experiences/",
  about: "about/",
  contact: "contact/",
};

export async function generatePageMetadata(
  locale: Locale,
  pageKey: PageKey
): Promise<Metadata> {
  const dict = await getDictionary(locale);
  const meta = dict.meta[pageKey];
  const path = pagePathMap[pageKey];

  const alternates: Record<string, string> = {};
  for (const loc of locales) {
    alternates[localeHtmlLang[loc]] = `${SITE_URL}/${loc}/${path}`;
  }

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `${SITE_URL}/${locale}/${path}`,
      languages: alternates,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${SITE_URL}/${locale}/${path}`,
      siteName: dict.meta.siteTitle,
      locale: localeHtmlLang[locale],
      type: "website",
    },
  };
}
