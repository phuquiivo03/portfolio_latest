import type { Project } from "@/data/projects";

export function projectDirName(project: Project): string {
  const map: Record<string, string> = {
    deducto: "deducto",
    drawly: "drawly",
    wallet: "mini-wallet",
    raffle: "raffle",
    openbattle: "openbattle",
  };
  return `${map[project.id] ?? project.id}/`;
}

export function projectBadge(project: Project): { label: string; variant: "live" | "src" | "shipped" } {
  if (project.site) return { label: "live", variant: "live" };
  if (project.repo) return { label: "src", variant: "src" };
  return { label: "shipped", variant: "shipped" };
}

export function amberTag(project: Project): string {
  const preferred = ["Next.js", "Generative AI", "PostgreSQL", "Express.js", "Unity"];
  for (const p of preferred) {
    if (project.tags.includes(p)) return p;
  }
  return project.tags[0] ?? "fullstack";
}
