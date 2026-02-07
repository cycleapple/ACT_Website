interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2
        className={`font-serif text-3xl font-bold md:text-4xl ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      <div
        className={`mt-4 h-0.5 w-16 bg-gold ${
          centered ? "mx-auto" : ""
        }`}
      />
      {subtitle && (
        <p
          className={`mt-4 text-lg ${
            light ? "text-white/70" : "text-gray-500"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
