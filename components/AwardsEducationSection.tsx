import { awards } from "@/data/awards";
import { site } from "@/data/site";
import { SectionPrompt } from "./SectionPrompt";

export function AwardsEducationSection() {
  return (
    <section className="term-section" aria-labelledby="creds-heading">
      <SectionPrompt command="ls ~/awards && cat ~/education" />
      <p className="section-label">&gt; credentials</p>
      <h2 className="section-heading" id="creds-heading">
        Hackathons and school <span className="dim">{"// drwxr-xr-x"}</span>
      </h2>
      <ul className="awards-term">
        {awards.map((a) => (
          <li key={a.text}>
            <span className="aw-date">{a.when}</span>
            <span>{a.text}</span>
          </li>
        ))}
      </ul>
      <div className="edu-panel panel">
        <h3 className="edu-school">{site.education.school}</h3>
        <p className="edu-detail">{site.education.detail}</p>
      </div>
      <hr className="term-rule" />
    </section>
  );
}
