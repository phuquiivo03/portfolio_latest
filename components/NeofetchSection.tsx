import { site } from "@/data/site";
import { asciiAvatar } from "@/lib/asciiAvatar";
import { SectionPrompt } from "./SectionPrompt";

const swatches = [
  "#0d0d0d",
  "#c0392b",
  "#27ae60",
  "#f39c12",
  "#2980b9",
  "#8e44ad",
  "#16a085",
  "#bdc3c7",
];

const rows: [string, string][] = [
  ["OS", "Linux / macOS (dev)"],
  ["Host", "portfolio-latest"],
  ["Role", site.role],
  ["Uptime", `${site.experienceYears} in production teams`],
  ["Shell", "bash / zsh"],
  ["Stack", "React, Next.js, Node.js, PostgreSQL"],
  ["Focus", "Fullstack + backend APIs"],
  ["Status", site.availability],
];

export function NeofetchSection() {
  return (
    <section className="term-section" aria-labelledby="neofetch-heading">
      <SectionPrompt command="neofetch" />
      <div className="neofetch">
        <div className="neofetch-art">
          <pre className="ascii-avatar" aria-hidden="true">{asciiAvatar}</pre>
          <p className="ascii-label">user@dev</p>
        </div>
        <div className="neofetch-info">
          <h2 className="neofetch-title" id="neofetch-heading">
            user@portfolio <span className="neofetch-dashes">----------</span>
          </h2>
          <dl className="neofetch-kv">
            {rows.map(([k, v]) => (
              <div key={k} className="kv-row">
                <dt>{k}:</dt>
                <dd className={k === "Status" ? "status-amber" : undefined}>
                  {v}
                </dd>
              </div>
            ))}
          </dl>
          <div className="color-swatches" aria-hidden="true">
            {swatches.map((c) => (
              <span key={c} style={{ background: c }} />
            ))}
          </div>
        </div>
      </div>
      <hr className="term-rule" />
    </section>
  );
}
