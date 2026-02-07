import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";
import type { PageProps } from "@/lib/types";
import { generatePageMetadata } from "@/lib/metadata";
import PageHero from "@/components/shared/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactForm from "@/components/sections/contact/ContactForm";

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  return generatePageMetadata(locale, "contact");
}

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  const infoItems = [
    dict.contact.info.email,
    dict.contact.info.phone,
    dict.contact.info.hours,
    dict.contact.info.response,
  ];

  return (
    <>
      <PageHero
        title={dict.contact.hero.title}
        subtitle={dict.contact.hero.subtitle}
        imageSrc="/images/hero-contact.jpg"
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <AnimatedSection>
                <h2 className="font-serif text-2xl font-bold text-navy mb-8">
                  {dict.contact.form.title}
                </h2>
                <ContactForm dict={dict.contact.form} />
              </AnimatedSection>
            </div>

            <div>
              <AnimatedSection>
                <div className="rounded-sm bg-cream p-8">
                  <h3 className="font-serif text-xl font-bold text-navy mb-6">
                    {dict.contact.info.title}
                  </h3>
                  <div className="space-y-6">
                    {infoItems.map((item, i) => (
                      <div key={i}>
                        <dt className="text-sm font-semibold uppercase tracking-wider text-gold">
                          {item.label}
                        </dt>
                        <dd className="mt-1 text-base text-charcoal">
                          {item.label === dict.contact.info.email.label ? (
                            <a
                              href={`mailto:${item.value}`}
                              className="transition-colors hover:text-gold"
                            >
                              {item.value}
                            </a>
                          ) : (
                            item.value
                          )}
                        </dd>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
