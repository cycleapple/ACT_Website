import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  href?: string;
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gold text-white hover:bg-gold-dark border border-gold hover:border-gold-dark",
  secondary:
    "bg-transparent text-navy border border-navy hover:bg-navy hover:text-white",
  ghost:
    "bg-transparent text-gold border border-transparent hover:border-gold",
};

export default function Button({
  href,
  variant = "primary",
  children,
  className = "",
  type = "button",
  disabled,
  onClick,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center px-8 py-3 text-sm font-semibold uppercase tracking-wider transition-all duration-200 rounded-sm ${variants[variant]} ${
    disabled ? "opacity-50 cursor-not-allowed" : ""
  } ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
