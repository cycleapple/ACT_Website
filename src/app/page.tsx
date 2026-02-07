"use client";

import { useEffect } from "react";
import { defaultLocale } from "@/i18n/config";

export default function RootPage() {
  useEffect(() => {
    const browserLang = navigator.language.toLowerCase();
    let locale = defaultLocale;

    if (browserLang.startsWith("fr")) {
      locale = "fr";
    } else if (
      browserLang.startsWith("zh-tw") ||
      browserLang.startsWith("zh-hant")
    ) {
      locale = "zh-tw";
    }

    window.location.replace(`/${locale}/`);
  }, []);

  return (
    <html lang="en">
      <body
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          backgroundColor: "#FAF8F5",
          color: "#2D3436",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <p>Redirecting...</p>
      </body>
    </html>
  );
}
