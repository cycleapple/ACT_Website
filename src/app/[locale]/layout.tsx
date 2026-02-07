import { Playfair_Display, Inter, Noto_Serif_TC } from "next/font/google";
import { locales, localeHtmlLang } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { notFound } from "next/navigation";
import type { Locale } from "@/i18n/config";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSerifTC = Noto_Serif_TC({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-noto-serif-tc",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const dict = await getDictionary(locale as Locale);

  return (
    <html
      lang={localeHtmlLang[locale as Locale]}
      className={`${playfair.variable} ${inter.variable} ${notoSerifTC.variable}`}
    >
      <body className={locale === "zh-tw" ? "zh-tw" : ""}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
        >
          {dict.nav.skipToContent}
        </a>
        <Header locale={locale as Locale} dict={dict} />
        <main id="main-content">{children}</main>
        <Footer locale={locale as Locale} dict={dict} />
      </body>
    </html>
  );
}
