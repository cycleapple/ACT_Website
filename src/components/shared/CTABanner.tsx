import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface CTABannerProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

export default function CTABanner({
  title,
  description,
  buttonText,
  buttonHref,
}: CTABannerProps) {
  return (
    <section className="bg-navy py-20">
      <AnimatedSection>
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">
            {title}
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-16 bg-gold" />
          <p className="mt-6 text-lg text-white/70">{description}</p>
          <div className="mt-8">
            <Button href={buttonHref}>{buttonText}</Button>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
