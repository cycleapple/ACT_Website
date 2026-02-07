import Button from "@/components/ui/Button";
import type { Dictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";

export default function HeroSection({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center bg-navy bg-cover bg-center"
      style={{
        backgroundImage: "url(/images/hero-home.jpg)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/50 to-navy/70" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h1 className="font-serif text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
          {dict.home.hero.headline}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
          {dict.home.hero.subheadline}
        </p>
        <div className="mx-auto mt-4 h-0.5 w-16 bg-gold" />
        <div className="mt-8">
          <Button href={`/${locale}/contact/`}>
            {dict.home.hero.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}
