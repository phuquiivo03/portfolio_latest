"use client";

import { AwardsEducationSection } from "./AwardsEducationSection";
import { ContactSection } from "./ContactSection";
import { ExperienceSection } from "./ExperienceSection";
import { HeroSection } from "./HeroSection";
import { NeofetchSection } from "./NeofetchSection";
import { ProjectsSection } from "./ProjectsSection";
import { SkillsSection } from "./SkillsSection";
import { TerminalChrome } from "./TerminalChrome";
import { TerminalFooter } from "./TerminalFooter";

export function Portfolio() {
  return (
    <TerminalChrome>
      <HeroSection />
      <NeofetchSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <AwardsEducationSection />
      <ContactSection />
      <TerminalFooter />
    </TerminalChrome>
  );
}
