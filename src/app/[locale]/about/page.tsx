import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";
import type { PageProps } from "@/lib/types";
import { generatePageMetadata } from "@/lib/metadata";
import PageHero from "@/components/shared/PageHero";
import CTABanner from "@/components/shared/CTABanner";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  return generatePageMetadata(locale, "about");
}

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  const teamMembers = [
    dict.about.team.members.founder,
    dict.about.team.members.operations,
    dict.about.team.members.china,
  ];

  const teamImages = [
    "/images/team-sophie.jpg",
    "/images/team-james.jpg",
    "/images/team-liwei.jpg",
  ];

  return (
    <>
      <PageHero
        title={dict.about.hero.title}
        subtitle={dict.about.hero.subtitle}
        imageSrc="/images/hero-about.jpg"
      />

      {/* Our Story */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6">
          <AnimatedSection>
            <SectionHeading title={dict.about.story.title} />
            <div className="space-y-6">
              {dict.about.story.paragraphs.map(
                (paragraph: string, i: number) => (
                  <p
                    key={i}
                    className="text-base leading-relaxed text-gray-500"
                  >
                    {paragraph}
                  </p>
                )
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Team */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-6xl px-6">
          <AnimatedSection>
            <SectionHeading
              title={dict.about.team.title}
              subtitle={dict.about.team.subtitle}
            />
          </AnimatedSection>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {teamMembers.map((member, i) => (
              <AnimatedSection key={i}>
                <div className="overflow-hidden rounded-sm bg-white shadow-sm text-center">
                  <div className="relative h-64 overflow-hidden bg-gray-200">
                    <img
                      src={teamImages[i]}
                      alt={member.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-bold text-navy">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-gold">
                      {member.role}
                    </p>
                    <p className="mt-3 text-base leading-relaxed text-gray-500">
                      {member.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-navy py-20">
        <div className="mx-auto max-w-6xl px-6">
          <AnimatedSection>
            <SectionHeading
              title={dict.about.trust.title}
              light
            />
          </AnimatedSection>

          <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
            {dict.about.trust.indicators.map(
              (
                indicator: { value: string; label: string },
                i: number
              ) => (
                <AnimatedSection key={i}>
                  <div className="text-center">
                    <div className="font-serif text-4xl font-bold text-gold md:text-5xl">
                      {indicator.value}
                    </div>
                    <div className="mt-2 text-sm uppercase tracking-wider text-white/70">
                      {indicator.label}
                    </div>
                  </div>
                </AnimatedSection>
              )
            )}
          </div>
        </div>
      </section>

      <CTABanner
        title={dict.about.cta.title}
        description={dict.about.cta.description}
        buttonText={dict.about.cta.button}
        buttonHref={`/${locale}/contact/`}
      />
    </>
  );
}
