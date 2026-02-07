import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Asia Curated Travel",
  description:
    "Bespoke luxury travel experiences in Taiwan, Hong Kong, and China for discerning travelers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
