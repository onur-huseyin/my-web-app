export type TechItem = {
  id: string;
  label: string;
};

/** Shared tech stack for the hero marquee (locale-agnostic labels). */
export const techStack: TechItem[] = [
  { id: "dotnet", label: ".NET Core" },
  { id: "nodejs", label: "Node.js" },
  { id: "react", label: "React" },
  { id: "nextjs", label: "Next.js" },
  { id: "postgresql", label: "PostgreSQL" },
  { id: "redis", label: "Redis" },
  { id: "rabbitmq", label: "RabbitMQ" },
  { id: "docker", label: "Docker" },
  { id: "typescript", label: "TypeScript" },
  { id: "react-native", label: "React Native" },
  { id: "python", label: "Python" },
  { id: "javascript", label: "JavaScript" },
];
