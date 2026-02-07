interface PageHeroProps {
  title: string;
  subtitle?: string;
  imageSrc?: string;
}

export default function PageHero({
  title,
  subtitle,
  imageSrc,
}: PageHeroProps) {
  return (
    <section
      className="relative flex min-h-[40vh] items-center justify-center bg-navy bg-cover bg-center"
      style={
        imageSrc
          ? { backgroundImage: `url(${imageSrc})` }
          : undefined
      }
    >
      <div className="absolute inset-0 bg-navy/70" />
      <div className="relative z-10 px-6 py-24 text-center">
        <h1 className="font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
            {subtitle}
          </p>
        )}
        <div className="mx-auto mt-6 h-0.5 w-16 bg-gold" />
      </div>
    </section>
  );
}
