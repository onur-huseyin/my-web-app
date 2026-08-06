type IconProps = { className?: string };

const base = "h-6 w-6";

export function ServerIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className ?? base} stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="4" width="18" height="6" rx="1.5" />
      <rect x="3" y="14" width="18" height="6" rx="1.5" />
      <circle cx="7" cy="7" r="0.75" fill="currentColor" />
      <circle cx="7" cy="17" r="0.75" fill="currentColor" />
    </svg>
  );
}

export function BrowserIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className ?? base} stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="4.5" width="18" height="15" rx="1.5" />
      <path d="M3 8.5h18" />
      <circle cx="6" cy="6.5" r="0.6" fill="currentColor" />
      <circle cx="8" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function DeviceIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className ?? base} stroke="currentColor" strokeWidth="1.5">
      <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
      <path d="M10 19h4" />
    </svg>
  );
}

export function DatabaseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className ?? base} stroke="currentColor" strokeWidth="1.5">
      <ellipse cx="12" cy="5.5" rx="8" ry="3" />
      <path d="M4 5.5V18.5C4 20.16 7.58 21.5 12 21.5C16.42 21.5 20 20.16 20 18.5V5.5" />
      <path d="M4 12C4 13.66 7.58 15 12 15C16.42 15 20 13.66 20 12" />
    </svg>
  );
}

export function CloudIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className ?? base} stroke="currentColor" strokeWidth="1.5">
      <path d="M7 18a4.5 4.5 0 0 1-.5-8.98A5.5 5.5 0 0 1 17.2 9.02 4 4 0 0 1 17 17H7z" />
    </svg>
  );
}

export function ArrowUpRightIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className ?? "h-4 w-4"} stroke="currentColor" strokeWidth="1.75">
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className ?? "h-4 w-4"} stroke="currentColor" strokeWidth="2">
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}
