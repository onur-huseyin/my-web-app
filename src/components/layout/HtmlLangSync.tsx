"use client";

import { useEffect } from "react";
import { useLocale } from "@/i18n/useTranslation";

export default function HtmlLangSync() {
  const locale = useLocale();

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
