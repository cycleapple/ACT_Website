import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import type { Dictionary } from "@/i18n/getDictionary";

const icons = [
  // Map/route icon
  <svg key="curated" width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 6L32 12V42L16 36V6Z" />
    <path d="M16 6L6 10V40L16 36" />
    <path d="M32 12L42 8V38L32 42" />
  </svg>,
  // Compass icon
  <svg key="expertise" width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="24" cy="24" r="18" />
    <polygon points="28,16 20,20 16,28 24,24" fill="currentColor" opacity="0.3" />
    <polygon points="20,28 28,32 32,24 24,24" fill="currentColor" opacity="0.15" />
  </svg>,
  // Sparkle icon
  <svg key="seamless" width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M24 4L28 18L42 14L32 24L42 34L28 30L24 44L20 30L6 34L16 24L6 14L20 18L24 4Z" />
  </svg>,
];

export default function ServiceHighlights({
  dict,
}: {
  dict: Dictionary;
}) {
  const services = [
    dict.home.services.curated,
    dict.home.services.expertise,
    dict.home.services.seamless,
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection>
          <SectionHeading
            title={dict.home.services.title}
            subtitle={dict.home.services.subtitle}
          />
        </AnimatedSection>

        <div className="mt-12 grid gap-12 md:grid-cols-3">
          {services.map((service, i) => (
            <AnimatedSection key={i}>
              <div className="text-center">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-cream text-gold">
                  {icons[i]}
                </div>
                <h3 className="font-serif text-xl font-bold text-navy">
                  {service.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-gray-500">
                  {service.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
