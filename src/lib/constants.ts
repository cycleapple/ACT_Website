export const SITE_NAME = "Asia Curated Travel";

export const FORMSPREE_ENDPOINT = "https://formspree.io/f/xpwzgkby";

export const NAV_LINKS = [
  { href: "/", labelKey: "nav.home" },
  { href: "/how-it-works/", labelKey: "nav.howItWorks" },
  { href: "/travel-styles/", labelKey: "nav.travelStyles" },
  { href: "/experiences/", labelKey: "nav.experiences" },
  { href: "/about/", labelKey: "nav.about" },
  { href: "/contact/", labelKey: "nav.contact" },
] as const;

export const DESTINATIONS = ["taiwan", "hongkong", "china"] as const;

export const EXPERIENCE_TYPES = [
  "culinary",
  "cultural",
  "walking",
  "localLife",
] as const;
