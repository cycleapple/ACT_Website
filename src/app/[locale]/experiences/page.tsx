import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";
import type { PageProps } from "@/lib/types";
import { generatePageMetadata } from "@/lib/metadata";
import PageHero from "@/components/shared/PageHero";
import CTABanner from "@/components/shared/CTABanner";
import AnimatedSection from "@/components/ui/AnimatedSection";

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  return generatePageMetadata(locale, "experiences");
}

const experienceImages = {
  culinary: "/images/exp-culinary.jpg",
  cultural: "/images/exp-cultural.jpg",
  walking: "/images/exp-walking.jpg",
  localLife: "/images/exp-local-life.jpg",
};

const experienceKeys = ["culinary", "cultural", "walking", "localLife"] as const;

export default async function ExperiencesPage({ params }: PageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <>
      <PageHero
        title={dict.experiences.hero.title}
        subtitle={dict.experiences.hero.subtitle}
        imageSrc="/images/hero-experiences.jpg"
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <AnimatedSection>
            <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-gray-500">
              {dict.experiences.intro}
            </p>
          </AnimatedSection>

          <div className="mt-16 space-y-20">
            {experienceKeys.map((key, i) => {
              const exp = dict.experiences[key];
              const isReversed = i % 2 === 1;

              return (
                <AnimatedSection key={key}>
                  <div
                    className={`grid items-center gap-12 lg:grid-cols-2 ${
                      isReversed ? "lg:direction-rtl" : ""
                    }`}
                  >
                    <div className={isReversed ? "lg:order-2" : ""}>
                      <div className="relative h-72 overflow-hidden rounded-sm lg:h-96">
                        <img
                          src={experienceImages[key]}
                          alt={exp.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>

                    <div className={isReversed ? "lg:order-1" : ""}>
                      <h3 className="font-serif text-2xl font-bold text-navy md:text-3xl">
                        {exp.title}
                      </h3>
                      <div className="mt-3 h-0.5 w-12 bg-gold" />
                      <p className="mt-4 text-base leading-relaxed text-gray-500">
                        {exp.description}
                      </p>
                      <ul className="mt-6 grid grid-cols-2 gap-2">
                        {exp.highlights.map(
                          (highlight: string, j: number) => (
                            <li
                              key={j}
                              className="flex items-center gap-2 text-sm text-charcoal"
                            >
                              <span className="text-gold">•</span>
                              {highlight}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner
        title={dict.experiences.cta.title}
        description={dict.experiences.cta.description}
        buttonText={dict.experiences.cta.button}
        buttonHref={`/${locale}/contact/`}
      />
    </>
  );
}
