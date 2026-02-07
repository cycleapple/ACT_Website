import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function Card({
  title,
  description,
  imageSrc,
  imageAlt,
  className = "",
  children,
}: CardProps) {
  return (
    <div
      className={`overflow-hidden rounded-sm bg-white shadow-sm transition-shadow duration-300 hover:shadow-md ${className}`}
    >
      {imageSrc && (
        <div className="relative h-56 w-full overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="font-serif text-xl font-bold text-navy">{title}</h3>
        <p className="mt-3 text-base leading-relaxed text-gray-500">
          {description}
        </p>
        {children}
      </div>
    </div>
  );
}
