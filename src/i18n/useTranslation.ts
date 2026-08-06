"use client";

import { useSyncExternalStore } from "react";
import { getSnapshot, getServerSnapshot, subscribe, setLocale, locales } from "./store";
import { en } from "./dictionaries/en";
import { tr } from "./dictionaries/tr";
import type { Dictionary, Locale } from "./types";

const dictionaries: Record<Locale, Dictionary> = { en, tr };

export function useLocale(): Locale {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function useTranslation(): {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  locales: typeof locales;
  t: Dictionary;
} {
  const locale = useLocale();
  return { locale, setLocale, locales, t: dictionaries[locale] };
}
