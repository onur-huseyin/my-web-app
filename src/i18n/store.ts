import type { Locale, LocaleMeta } from "./types";

export const locales: LocaleMeta[] = [
  { code: "en", label: "English", short: "EN" },
  { code: "tr", label: "Türkçe", short: "TR" },
];

const STORAGE_KEY = "portfolio-locale";

function isLocale(value: string | null): value is Locale {
  return value === "en" || value === "tr";
}

function readInitialLocale(): Locale {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return isLocale(stored) ? stored : "en";
}

let currentLocale: Locale = readInitialLocale();
const listeners = new Set<() => void>();

export function getSnapshot(): Locale {
  return currentLocale;
}

export function getServerSnapshot(): Locale {
  return "en";
}

export function subscribe(callback: () => void): () => void {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

export function setLocale(locale: Locale): void {
  if (locale === currentLocale) return;
  currentLocale = locale;
  if (typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale;
  }
  listeners.forEach((listener) => listener());
}
