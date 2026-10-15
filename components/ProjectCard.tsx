"use client";

import type { Project } from "@/data/projects";
import { amberTag, projectBadge, projectDirName } from "@/lib/projectDir";

type ProjectCardProps = {
  project: Project;
  onOpen: (id: string) => void;
};

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const badge = projectBadge(project);
  const highlight = amberTag(project);

  return (
    <article className="proj-card panel">
      <button
        type="button"
        className="proj-card-main"
        onClick={() => onOpen(project.id)}
      >
        <div className="proj-card-head">
          <span className="proj-dir">{projectDirName(project)}</span>
          <span className={`proj-badge badge-${badge.variant}`}>
            {badge.label}
          </span>
          <span className="proj-mode dim">-rwxr-xr-x</span>
        </div>
        <p className="proj-desc">{project.short}</p>
        <div className="proj-tags">
          {project.tags.map((t) => (
            <span
              key={t}
              className={`tag-pill${t === highlight ? " tag-amber" : ""}`}
            >
              {t}
            </span>
          ))}
        </div>
        <span className="proj-more dim">$ cat README — full breakdown</span>
      </button>
      <div className="proj-links">
        {project.site ? (
          <a
            href={project.site}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            live demo →
          </a>
        ) : null}
        {project.repo ? (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            source →
          </a>
        ) : null}
      </div>
    </article>
  );
}
