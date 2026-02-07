import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";
import type { PageProps } from "@/lib/types";
import { generatePageMetadata } from "@/lib/metadata";
import HeroSection from "@/components/sections/home/HeroSection";
import ServiceHighlights from "@/components/sections/home/ServiceHighlights";
import DestinationPreview from "@/components/sections/home/DestinationPreview";
import WhyChooseUs from "@/components/sections/home/WhyChooseUs";
import CTABanner from "@/components/shared/CTABanner";

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  return generatePageMetadata(locale, "home");
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <>
      <HeroSection dict={dict} locale={locale} />
      <ServiceHighlights dict={dict} />
      <DestinationPreview dict={dict} locale={locale} />
      <WhyChooseUs dict={dict} />
      <CTABanner
        title={dict.home.cta.title}
        description={dict.home.cta.description}
        buttonText={dict.home.cta.button}
        buttonHref={`/${locale}/contact/`}
      />
    </>
  );
}
