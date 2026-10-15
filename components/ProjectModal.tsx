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
      className={`modal-scrim${open ? " is-open" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="m-title"
      hidden={!open}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div className="modal-sheet panel" ref={sheetRef}>
        <button
          type="button"
          className="modal-close"
          ref={closeRef}
          aria-label="Close project details"
          onClick={handleClose}
        >
          [x]
        </button>
        <p className="modal-prompt dim">$ cat {project.id}/README.md</p>
        <h2 id="m-title" className="modal-title">{project.title}</h2>
        <p className="modal-meta">
          {project.role} · {project.org} · {project.when}
        </p>
        <ProjectShot project={project} />
        <p className="modal-desc">{project.desc ?? project.short}</p>
        <h3 className="modal-subhead">Tech stack</h3>
        <div className="modal-kv">
          {project.stack.map(([k, v]) => (
            <div key={k} className="modal-row">
              <b>{k}</b>
              <div>{v}</div>
            </div>
          ))}
        </div>
        <h3 className="modal-subhead">What I did</h3>
        <ul className="modal-list">
          {project.work.map((w, i) => (
            <li key={w} style={{ animationDelay: `${140 + i * 70}ms` }}>
              <span className="bullet">[x]</span> {w}
            </li>
          ))}
        </ul>
        {project.repo ? (
          <a
            className="modal-repo"
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
          >
            View the code on GitHub →
          </a>
        ) : null}
      </div>
    </div>
  );
}
