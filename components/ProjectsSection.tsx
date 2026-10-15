"use client";

import { projects } from "@/data/projects";
import { useCallback, useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";

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
      <section id="projects">
        <div className="s-head rv">
          <h2>Projects</h2>
          <span className="rule" />
          <span className="count">Tap a card for the full breakdown</span>
        </div>
        <div className="cards">
          {projects.map((p, i) => (
            <ProjectCard
              key={p.id}
              project={p}
              index={i}
              onOpen={handleOpen}
            />
          ))}
        </div>
      </section>
      {project ? (
        <ProjectModal project={project} open={isOpen} onClose={handleClose} />
      ) : null}
    </>
  );
}
