import type { Locale } from "@/i18n/config";

export interface PageProps {
  params: Promise<{ locale: Locale }>;
}
