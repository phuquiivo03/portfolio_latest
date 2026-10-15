"use client";

import { projects } from "@/data/projects";
import { useCallback, useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { SectionPrompt } from "./SectionPrompt";

export function ProjectsSection() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const project = openId
    ? projects.find((p) => p.id === openId) ?? null
    : null;

  const handleOpen = useCallback((id: string) => {
    setOpenId(id);
    requestAnimationFrame(() => setIsOpen(true));
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    window.setTimeout(() => setOpenId(null), 360);
  }, []);

  return (
    <>
      <section className="term-section" id="projects" aria-labelledby="projects-heading">
        <SectionPrompt command="ls -la ~/projects" />
        <p className="section-label">&gt; selected work</p>
        <h2 className="section-heading" id="projects-heading">
          Things I built and shipped{" "}
          <span className="dim">{"// drwxr-xr-x"}</span>
        </h2>
        <div className="proj-grid">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} onOpen={handleOpen} />
          ))}
        </div>
      </section>
      {project ? (
        <ProjectModal project={project} open={isOpen} onClose={handleClose} />
      ) : null}
    </>
  );
}
