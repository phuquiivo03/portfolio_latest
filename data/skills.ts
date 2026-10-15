export type SkillBar = {
  label: string;
  percent: number;
};

export const skillBars: SkillBar[] = [
  { label: "React / Next.js", percent: 86 },
  { label: "TypeScript", percent: 82 },
  { label: "Node.js / NestJS", percent: 80 },
  { label: "PostgreSQL", percent: 78 },
  { label: "Redis / caching", percent: 74 },
  { label: "Cloud / CI/CD", percent: 76 },
  { label: "REST APIs", percent: 84 },
  { label: "WebSocket / queues", percent: 72 },
];
