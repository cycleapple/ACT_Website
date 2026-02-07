import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import type { Dictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";

const destinations = [
  { key: "taiwan" as const, image: "/images/dest-taiwan.jpg" },
  { key: "hongkong" as const, image: "/images/dest-hongkong.jpg" },
  { key: "china" as const, image: "/images/dest-china.jpg" },
];

export default function DestinationPreview({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  return (
    <section className="bg-cream py-20">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection>
          <SectionHeading
            title={dict.home.destinations.title}
            subtitle={dict.home.destinations.subtitle}
          />
        </AnimatedSection>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {destinations.map((dest) => {
            const d =
              dict.home.destinations[dest.key];
            return (
              <AnimatedSection key={dest.key}>
                <div className="group overflow-hidden rounded-sm bg-white shadow-sm transition-shadow hover:shadow-md">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={dest.image}
                      alt={d.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-2xl font-bold text-navy">
                      {d.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-gray-500">
                      {d.description}
                    </p>
                    <div className="mt-4">
                      <Button
                        href={`/${locale}/travel-styles/`}
                        variant="ghost"
                        className="px-0"
                      >
                        {dict.home.destinations.explore} →
                      </Button>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
