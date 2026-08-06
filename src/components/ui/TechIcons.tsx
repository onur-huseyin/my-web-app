type IconProps = { className?: string };

const base = "h-11 w-11 shrink-0 md:h-14 md:w-14";

export function DotNetIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className ?? base} fill="currentColor" aria-hidden="true">
      <path d="M24 8.77h-2.468v7.565h-1.425V8.77h-2.462V7.53H24zm-6.752 0h-4.709v1.24h1.644v6.325h1.42V9.01h1.645zm-7.256.016L8.442 13.693 6.827 8.786H5.297l-1.633 4.907L2.138 8.786H.853l2.468 7.549h1.497l1.59-4.76 1.616 4.76h1.471l2.467-7.549z" />
    </svg>
  );
}

export function NodeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className ?? base} fill="currentColor" aria-hidden="true">
      <path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.382.585-.203.703-.25 1.33-.602.065-.037.151-.023.218.017l2.256 1.339c.082.045.198.045.275 0l8.795-5.076c.082-.047.135-.141.135-.241V6.921c0-.103-.055-.198-.137-.246l-8.791-5.072c-.081-.047-.189-.047-.273 0L2.075 6.675c-.084.049-.139.145-.139.246v10.146c0 .1.055.194.139.241l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.113-.253.255-.253h1.115c.14 0 .255.112.255.253v10.021c0 1.743-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L1.276 18.675C.46 18.207 0 17.323 0 16.388V6.242c0-.934.46-1.818 1.276-2.285L10.05.258c.798-.452 1.86-.452 2.648 0l8.769 5.699c.816.467 1.276 1.351 1.276 2.285v10.146c0 .934-.46 1.817-1.276 2.284l-8.769 5.7c-.403.227-.857.34-1.32.34z" />
    </svg>
  );
}

export function ReactIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className ?? base} fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="2.1" fill="currentColor" />
      <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="currentColor" strokeWidth="1.35" />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="3.8"
        stroke="currentColor"
        strokeWidth="1.35"
        transform="rotate(60 12 12)"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="3.8"
        stroke="currentColor"
        strokeWidth="1.35"
        transform="rotate(120 12 12)"
      />
    </svg>
  );
}

export function NextIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className ?? base} fill="currentColor" aria-hidden="true">
      <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.604 1.6 2.061V7.2h-1.6v6.174Z" />
    </svg>
  );
}

export function PostgresIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className ?? base} fill="none" aria-hidden="true">
      <ellipse cx="12" cy="5.5" rx="7.5" ry="3" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M4.5 5.5v13c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3v-13"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M4.5 12c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function RedisIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className ?? base} fill="currentColor" aria-hidden="true">
      <path d="m22.84 7.85-10.52-5.55a.63.63 0 0 0-.6 0L1.2 7.85a.63.63 0 0 0 0 1.1l3.5 1.85v3.95c0 .24.13.45.35.56l6.97 3.7a.63.63 0 0 0 .6 0l6.97-3.7a.63.63 0 0 0 .35-.56V10.8l2.9-1.85a.63.63 0 0 0 0-1.1ZM12 3.72l8.5 4.5-2.08 1.1L12 5.9 5.58 9.32 3.5 8.22Zm0 14.2-5.9-3.13v-2.5L12 15.6l5.9-3.3v2.5Zm5.9-6.8L12 14.3 6.1 11.12V9.4L12 12.7l5.9-3.3Z" />
    </svg>
  );
}

export function RabbitIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className ?? base} fill="none" aria-hidden="true">
      <path
        d="M8 8.5c-1.2-2.4-2.2-4.8-1.2-5.8 1.1-1.1 2.8.6 3.7 2.8M16 8.5c1.2-2.4 2.2-4.8 1.2-5.8-1.1-1.1-2.8.6-3.7 2.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <ellipse cx="12" cy="14" rx="6.5" ry="6" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="9.7" cy="13.2" r="0.9" fill="currentColor" />
      <circle cx="14.3" cy="13.2" r="0.9" fill="currentColor" />
      <path d="M11.2 16.2c.5.5 1.1.5 1.6 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function DockerIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className ?? base} fill="currentColor" aria-hidden="true">
      <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.186.186 0 0 0-.186.186v1.887c0 .103.083.185.186.185m-2.954-.185V9.006a.186.186 0 0 0-.186-.186H8.724a.186.186 0 0 0-.186.186v1.887c0 .103.083.185.186.185h2.119a.186.186 0 0 0 .186-.185m-2.955 0V9.006a.186.186 0 0 0-.186-.186H5.77a.186.186 0 0 0-.185.186v1.887c0 .103.082.185.185.185h2.12a.186.186 0 0 0 .185-.185m-2.953 0V9.006a.186.186 0 0 0-.186-.186H2.816a.186.186 0 0 0-.185.186v1.887c0 .103.082.185.185.185h2.12a.185.185 0 0 0 .185-.185m5.908-2.954V6.052a.186.186 0 0 0-.186-.186H8.724a.186.186 0 0 0-.186.186v1.887c0 .103.083.185.186.185h2.119a.186.186 0 0 0 .186-.185m-2.955 0V6.052a.186.186 0 0 0-.186-.186H5.77a.186.186 0 0 0-.185.186v1.887c0 .103.082.185.185.185h2.12a.186.186 0 0 0 .185-.185m5.909 2.954V9.006a.186.186 0 0 0-.185-.186h-2.12a.186.186 0 0 0-.185.186v1.887c0 .103.082.185.185.185h2.12a.186.186 0 0 0 .185-.185m-.001-2.954V6.052a.186.186 0 0 0-.185-.186h-2.12a.186.186 0 0 0-.185.186v1.887c0 .103.082.185.185.185h2.12a.186.186 0 0 0 .185-.185m2.954 0V6.052a.186.186 0 0 0-.186-.186h-2.119a.186.186 0 0 0-.186.186v1.887c0 .103.083.185.186.185h2.119a.186.186 0 0 0 .186-.185m1.4-1.4h-2.12a.186.186 0 0 0-.185.186v1.887c0 .103.082.185.185.185h2.12a.186.186 0 0 0 .186-.185V6.052a.186.186 0 0 0-.186-.186m7.02 5.14s-.59-.46-1.9-.3c-.1-1.1-.57-2.08-1.54-2.77l-.34-.24-.23.34c-.4.59-.58 1.4-.5 2.18-.8.24-1.35.52-1.8.85H.2c-.11 3.2.37 5.55 1.5 7.04 1.1 1.44 2.9 2.16 5.3 2.16 4.55 0 8.35-1.84 10.7-5.5 1.4.07 3.1-.14 3.95-1.35.03-.04.3-.66.3-.66z" />
    </svg>
  );
}

export function TypeScriptIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className ?? base} fill="currentColor" aria-hidden="true">
      <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.038 5.038 0 0 0-.717-.26 5.574 5.574 0 0 0-1.172-.176 3.098 3.098 0 0 0-1.37.226c-.325.136-.544.347-.656.631-.112.284-.168.657-.168 1.117v5.664h-2.836V12.53c0-.66.058-1.236.176-1.727.118-.49.308-.9.57-1.23.262-.33.601-.59 1.016-.78.415-.19.926-.285 1.532-.285zm-5.31 1.5h3.75v1.875h-1.313V21.75H13.24V13.125H11.93V11.25h1.25zM5.25 11.25H12v1.875H8.625V21.75H6.75V13.125H5.25z" />
    </svg>
  );
}

export function ReactNativeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className ?? base} fill="none" aria-hidden="true">
      <rect x="7.25" y="2.5" width="9.5" height="19" rx="2.2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M10 5.2h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="12" cy="18.7" r="0.85" fill="currentColor" />
      <circle cx="12" cy="11" r="1.15" fill="currentColor" />
      <ellipse cx="12" cy="11" rx="4.2" ry="1.7" stroke="currentColor" strokeWidth="1.15" />
      <ellipse
        cx="12"
        cy="11"
        rx="4.2"
        ry="1.7"
        stroke="currentColor"
        strokeWidth="1.15"
        transform="rotate(60 12 11)"
      />
      <ellipse
        cx="12"
        cy="11"
        rx="4.2"
        ry="1.7"
        stroke="currentColor"
        strokeWidth="1.15"
        transform="rotate(120 12 11)"
      />
    </svg>
  );
}

const icons = {
  dotnet: DotNetIcon,
  nodejs: NodeIcon,
  react: ReactIcon,
  nextjs: NextIcon,
  postgresql: PostgresIcon,
  redis: RedisIcon,
  rabbitmq: RabbitIcon,
  docker: DockerIcon,
  typescript: TypeScriptIcon,
  "react-native": ReactNativeIcon,
} as const;

export type TechIconId = keyof typeof icons;

export function TechIcon({ id, className }: { id: string; className?: string }) {
  const Icon = icons[id as TechIconId];
  if (!Icon) return null;
  return <Icon className={className} />;
}
