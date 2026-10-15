"use client";

import { site } from "@/data/site";
import { useCallback, useState } from "react";
import { SectionPrompt } from "./SectionPrompt";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const mailCmd = `$ mail ${site.email}`;

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }, []);

  return (
    <section className="term-section" id="contact" aria-labelledby="contact-heading">
      <SectionPrompt command="./contact --hire" />
      <div className="contact-panel panel">
        <h2 className="contact-headline" id="contact-heading">
          Looking for someone who can{" "}
          <span className="text-accent">own a feature end to end</span>?
        </h2>
        <p className="contact-sub">
          Available for fullstack and backend roles in {site.location} or remote.
          Fastest path: email.
        </p>
        <button type="button" className="mail-box" onClick={copyEmail}>
          <code>{mailCmd}</code>
          <span className="cursor-block" aria-hidden="true" />
          {copied ? <span className="mail-copied">copied</span> : null}
        </button>
        <div className="social-pills">
          <a href={site.github} target="_blank" rel="noopener noreferrer">
            github →
          </a>
          <a href={`mailto:${site.email}`}>email →</a>
          <a href={site.phoneHref}>phone →</a>
        </div>
      </div>
    </section>
  );
}
