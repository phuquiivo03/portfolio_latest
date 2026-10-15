"use client";

import type { Project } from "@/data/projects";
import { useCallback, useEffect, useRef } from "react";
import { ProjectShot } from "./ProjectShot";

type ProjectModalProps = {
  project: Project | null;
  open: boolean;
  onClose: () => void;
};

export function ProjectModal({ project, open, onClose }: ProjectModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);
  const lastFocusRef = useRef<HTMLElement | null>(null);

  const handleClose = useCallback(() => {
    onClose();
    document.body.classList.remove("locked");
    if (lastFocusRef.current) {
      lastFocusRef.current.focus({ preventScroll: true });
    }
  }, [onClose]);

  useEffect(() => {
    if (!open || !project) return;
    lastFocusRef.current = document.activeElement as HTMLElement | null;
    document.body.classList.add("locked");
    sheetRef.current?.scrollTo(0, 0);
    const id = requestAnimationFrame(() => {
      closeRef.current?.focus({ preventScroll: true });
    });
    return () => cancelAnimationFrame(id);
  }, [open, project]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, handleClose]);

  if (!project) return null;

  return (
    <div
      className={`scrim${open ? " on" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="m-title"
      hidden={!open}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div className="sheet" ref={sheetRef}>
        <button
          type="button"
          className="close"
          ref={closeRef}
          aria-label="Close project details"
          onClick={handleClose}
        >
          ✕
        </button>
        <h2 id="m-title">{project.title}</h2>
        <p className="m-meta">
          {project.role} · {project.org} · {project.when}
        </p>
        <ProjectShot project={project} />
        {project.desc ? <p className="m-desc">{project.desc}</p> : null}
        <h4>Tech stack</h4>
        <div className="m-grid">
          {project.stack.map(([k, v]) => (
            <div key={k} className="m-row">
              <b>{k}</b>
              <div>{v}</div>
            </div>
          ))}
        </div>
        <h4>What I did</h4>
        <ul>
          {project.work.map((w, i) => (
            <li key={w} style={{ animationDelay: `${140 + i * 70}ms` }}>
              {w}
            </li>
          ))}
        </ul>
        {project.repo ? (
          <a
            className="repo"
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
          >
            View the code on GitHub
          </a>
        ) : null}
      </div>
    </div>
  );
}
