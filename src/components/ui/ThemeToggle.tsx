"use client";

import { useSyncExternalStore } from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

function readTheme(): Theme {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function subscribe(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}

export function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  localStorage.setItem(STORAGE_KEY, theme);
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, readTheme, () => "dark" as Theme);

  return (
    <div role="group" aria-label="theme" className="flex items-center gap-2 font-mono text-xs">
      {(["light", "dark"] as const).map((mode, i) => (
        <span key={mode} className="flex items-center gap-2">
          {i > 0 && <span className="text-muted-2">/</span>}
          <button
            type="button"
            onClick={() => applyTheme(mode)}
            className={theme === mode ? "text-accent" : "text-muted hover:text-fg"}
            aria-pressed={theme === mode}
          >
            {mode}
          </button>
        </span>
      ))}
    </div>
  );
}
