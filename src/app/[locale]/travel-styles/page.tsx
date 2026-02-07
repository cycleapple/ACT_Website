import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";
import type { PageProps } from "@/lib/types";
import { generatePageMetadata } from "@/lib/metadata";
import PageHero from "@/components/shared/PageHero";
import CTABanner from "@/components/shared/CTABanner";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  return generatePageMetadata(locale, "travelStyles");
}

const packageImages = [
  "/images/pkg-taiwan.jpg",
  "/images/pkg-hongkong.jpg",
  "/images/pkg-silkroad.jpg",
  "/images/pkg-grand.jpg",
];

export default async function TravelStylesPage({ params }: PageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  const packages = [
    dict.travelStyles.curated.packages.classic,
    dict.travelStyles.curated.packages.hongkong,
    dict.travelStyles.curated.packages.silk,
    dict.travelStyles.curated.packages.grand,
  ];

  return (
    <>
      <PageHero
        title={dict.travelStyles.hero.title}
        subtitle={dict.travelStyles.hero.subtitle}
        imageSrc="/images/hero-travel-styles.jpg"
      />

      {/* Curated Packages */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <AnimatedSection>
            <SectionHeading
              title={dict.travelStyles.curated.title}
              subtitle={dict.travelStyles.curated.subtitle}
            />
          </AnimatedSection>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {packages.map((pkg, i) => (
              <AnimatedSection key={i}>
                <Card
                  title={pkg.title}
                  description={pkg.description}
                  imageSrc={packageImages[i]}
                  imageAlt={pkg.title}
                >
                  <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-gold">
                    {pkg.duration}
                  </p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Personalized Journeys */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <AnimatedSection>
              <div>
                <h2 className="font-serif text-3xl font-bold text-navy md:text-4xl">
                  {dict.travelStyles.personalized.title}
                </h2>
                <div className="mt-4 h-0.5 w-16 bg-gold" />
                <p className="mt-4 text-lg text-gray-500">
                  {dict.travelStyles.personalized.subtitle}
                </p>
                <p className="mt-6 text-base leading-relaxed text-charcoal">
                  {dict.travelStyles.personalized.description}
                </p>
                <ul className="mt-8 space-y-3">
                  {dict.travelStyles.personalized.features.map(
                    (feature: string, i: number) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1 text-gold">•</span>
                        <span className="text-base text-charcoal">
                          {feature}
                        </span>
                      </li>
                    )
                  )}
                </ul>
                <div className="mt-8">
                  <Button href={`/${locale}/contact/`}>
                    {dict.travelStyles.personalized.cta}
                  </Button>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="relative h-80 overflow-hidden rounded-sm lg:h-[500px]">
                <img
                  src="/images/personalized-journey.jpg"
                  alt="Personalized travel planning"
                  className="h-full w-full object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <CTABanner
        title={dict.travelStyles.cta.title}
        description={dict.travelStyles.cta.description}
        buttonText={dict.travelStyles.cta.button}
        buttonHref={`/${locale}/contact/`}
      />
    </>
  );
}
