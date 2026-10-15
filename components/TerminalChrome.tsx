import { site } from "@/data/site";
import type { ReactNode } from "react";

const nav = [
  { href: "#work", label: "~/work" },
  { href: "#stack", label: "~/stack" },
  { href: "#contact", label: "~/contact" },
];

export function TerminalChrome({ children }: { children: ReactNode }) {
  return (
    <div className="crt-page">
      <div className="crt-glow crt-glow-tr" aria-hidden="true" />
      <div className="crt-glow crt-glow-bl" aria-hidden="true" />
      <div className="crt-scanlines" aria-hidden="true" />
      <div className="term-window">
        <header className="term-titlebar">
          <div className="term-dots" aria-hidden="true">
            <span className="dot dot-close" />
            <span className="dot dot-min" />
            <span className="dot dot-max" />
          </div>
          <p className="term-path">user@portfolio: ~/dev</p>
          <nav className="term-nav" aria-label="Section navigation">
            {nav.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <p className="term-status">
            <span className="status-amber">{site.availability}</span>
          </p>
        </header>
        <div className="term-body">{children}</div>
      </div>
    </div>
  );
}
