import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import type { Dictionary } from "@/i18n/getDictionary";

export default function WhyChooseUs({
  dict,
}: {
  dict: Dictionary;
}) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AnimatedSection>
            <div className="relative h-80 overflow-hidden rounded-sm lg:h-[500px]">
              <Image
                src="/images/why-choose-us.jpg"
                alt="Travel consultant planning journey"
                fill
                className="object-cover"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div>
              <h2 className="font-serif text-3xl font-bold text-navy md:text-4xl">
                {dict.home.why.title}
              </h2>
              <div className="mt-4 h-0.5 w-16 bg-gold" />
              <p className="mt-4 text-lg text-gray-500">
                {dict.home.why.subtitle}
              </p>
              <ul className="mt-8 space-y-4">
                {dict.home.why.points.map(
                  (point: string, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M2 7l3.5 3.5L12 4" />
                        </svg>
                      </span>
                      <span className="text-base text-charcoal">
                        {point}
                      </span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
