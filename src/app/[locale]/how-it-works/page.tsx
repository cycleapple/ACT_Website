import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";
import type { PageProps } from "@/lib/types";
import { generatePageMetadata } from "@/lib/metadata";
import PageHero from "@/components/shared/PageHero";
import CTABanner from "@/components/shared/CTABanner";
import AnimatedSection from "@/components/ui/AnimatedSection";

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  return generatePageMetadata(locale, "howItWorks");
}

export default async function HowItWorksPage({ params }: PageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  const steps = [
    dict.howItWorks.steps.step1,
    dict.howItWorks.steps.step2,
    dict.howItWorks.steps.step3,
    dict.howItWorks.steps.step4,
  ];

  return (
    <>
      <PageHero
        title={dict.howItWorks.hero.title}
        subtitle={dict.howItWorks.hero.subtitle}
        imageSrc="/images/hero-how-it-works.jpg"
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gold/30 md:left-1/2 md:-translate-x-px" />

            {steps.map((step, i) => (
              <AnimatedSection key={i}>
                <div className="relative mb-16 last:mb-0">
                  {/* Step number circle */}
                  <div className="absolute left-0 flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold bg-white font-serif text-xl font-bold text-gold md:left-1/2 md:-translate-x-1/2">
                    {step.number}
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-24 md:ml-0 md:w-5/12 ${
                      i % 2 === 0
                        ? "md:pr-12"
                        : "md:ml-auto md:pl-12"
                    }`}
                  >
                    <h3 className="font-serif text-2xl font-bold text-navy">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-gray-500">
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title={dict.howItWorks.cta.title}
        description={dict.howItWorks.cta.description}
        buttonText={dict.howItWorks.cta.button}
        buttonHref={`/${locale}/contact/`}
      />
    </>
  );
}
