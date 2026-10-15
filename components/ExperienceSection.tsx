import { jobs } from "@/data/experience";
import { SectionPrompt } from "./SectionPrompt";

export function ExperienceSection() {
  return (
    <section className="term-section" id="work" aria-labelledby="work-heading">
      <SectionPrompt command="cat ~/experience.log" />
      <p className="section-label">&gt; work history</p>
      <h2 className="section-heading" id="work-heading">
        Roles I have shipped in <span className="dim">{"// 2021 — now"}</span>
      </h2>
      <div className="experience-log">
        {jobs.map((job) => (
          <article key={job.company} className="exp-entry panel">
            <h3 className="exp-company">{job.company}</h3>
            <p className="exp-meta">{job.meta}</p>
            <ul className="exp-bullets">
              {job.bullets.map((b) => (
                <li key={b}>
                  <span className="bullet">[x]</span> {b}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <hr className="term-rule" />
    </section>
  );
}
