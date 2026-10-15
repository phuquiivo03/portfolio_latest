import { site } from "@/data/site";
import { SectionPrompt } from "./SectionPrompt";

export function HeroSection() {
  return (
    <section className="term-section" id="hero" aria-labelledby="hero-title">
      <SectionPrompt command="whoami --full" />
      <h1 className="hero-name" id="hero-title">
        {site.nameBanner}
        <span className="cursor-block" aria-hidden="true" />
      </h1>
      <p className="hero-role">
        <span className="hero-chevron">&gt;</span> {site.role} — {site.location}
      </p>
      <p className="hero-intro">
        {site.intro}{" "}
        <span className="text-accent">{site.introExtra}</span>
      </p>
      <ul className="check-list">
        <li>
          <span className="check">[x]</span> {site.location} ({site.timezone})
        </li>
        <li>
          <span className="check">[x]</span> {site.experienceYears} shipping web
          apps
        </li>
        <li>
          <span className="check">[x]</span> Open to fullstack and backend roles
        </li>
      </ul>
      <div className="hero-ctas">
        <a className="btn btn-solid" href="#projects">
          $ ls ~/projects →
        </a>
        <a className="btn btn-ghost" href="#contact">
          ./contact --hire
        </a>
      </div>
      <hr className="term-rule" />
    </section>
  );
}
