"use client";

import { useNavSpy } from "@/hooks/useNavSpy";
import { useReveal } from "@/hooks/useReveal";
import { AwardsSection } from "./AwardsSection";
import { ContactLinks } from "./ContactLinks";
import { EducationSection } from "./EducationSection";
import { ExperienceSection } from "./ExperienceSection";
import { ProjectsSection } from "./ProjectsSection";
import { Rail } from "./Rail";
import { SkillsSection } from "./SkillsSection";

export function Portfolio() {
  useReveal();
  useNavSpy();

  return (
    <div className="shell">
      <Rail />
      <main>
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <AwardsSection />
        <EducationSection />
        <section className="cta rv">
          <h2>Looking for someone who can own a feature end to end?</h2>
          <p>
            I am available for fullstack and backend positions in Ho Chi Minh
            City or remote. The fastest way to reach me is email.
          </p>
          <ContactLinks variant="cta" />
        </section>
        <footer>
          Vo Nguyen Phu Qui · Fullstack developer · Ho Chi Minh City
        </footer>
      </main>
    </div>
  );
}
