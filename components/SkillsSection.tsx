import { skillBars } from "@/data/skills";
import { SectionPrompt } from "./SectionPrompt";

export function SkillsSection() {
  return (
    <section className="term-section" id="stack" aria-labelledby="stack-heading">
      <SectionPrompt command="cat stack.txt | sort -r" />
      <p className="section-label">&gt; proficiency</p>
      <h2 className="section-heading" id="stack-heading">
        The tools I reach for{" "}
        <span className="dim">{"// self-assessed, honest"}</span>
      </h2>
      <div className="skill-grid">
        {skillBars.map((skill) => (
          <div key={skill.label} className="skill-row">
            <span className="skill-label">{skill.label}</span>
            <div className="skill-track-wrap">
              <div className="skill-track">
                <div
                  className="skill-fill"
                  style={{ width: `${skill.percent}%` }}
                />
              </div>
              <span className="skill-pct">{skill.percent}%</span>
            </div>
          </div>
        ))}
      </div>
      <hr className="term-rule" />
    </section>
  );
}
