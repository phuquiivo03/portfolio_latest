"use client";

import type { Project } from "@/data/projects";
import { useCallback } from "react";

type ProjectCardProps = {
  project: Project;
  index: number;
  onOpen: (id: string) => void;
};

export function ProjectCard({ project, index, onOpen }: ProjectCardProps) {
  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLButtonElement>) => {
      const c = e.currentTarget;
      const r = c.getBoundingClientRect();
      c.style.setProperty("--mx", `${e.clientX - r.left}px`);
      c.style.setProperty("--my", `${e.clientY - r.top}px`);
    },
    [],
  );

  return (
    <button
      type="button"
      className="card rv"
      style={{ transitionDelay: `${index * 70}ms` }}
      onClick={() => onOpen(project.id)}
      onPointerMove={onPointerMove}
    >
      <h3>{project.title}</h3>
      <p className="org">
        {project.role} · {project.org}
      </p>
      <p className="when">{project.when}</p>
      <p>{project.short}</p>
      <div className="stack">
        {project.tags.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>
      <span className="open">
        Read the details <span className="arrow">→</span>
      </span>
    </button>
  );
}
