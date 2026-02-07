export const locales = ["en", "fr", "zh-tw"] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  "zh-tw": "繁體中文",
};

export const localeHtmlLang: Record<Locale, string> = {
  en: "en",
  fr: "fr",
  "zh-tw": "zh-Hant-TW",
};

export const defaultLocale: Locale = "en";

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
