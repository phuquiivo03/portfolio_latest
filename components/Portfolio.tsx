"use client";

import { AwardsEducationSection } from "./AwardsEducationSection";
import { ContactSection } from "./ContactSection";
import { ExperienceSection } from "./ExperienceSection";
import { HeroSection } from "./HeroSection";
import { NeofetchSection } from "./NeofetchSection";
import { ProjectsSection } from "./ProjectsSection";
import { TerminalChrome } from "./TerminalChrome";
import { TerminalFooter } from "./TerminalFooter";

export function Portfolio() {
  return (
    <TerminalChrome>
      <HeroSection />
      <NeofetchSection />
      <ExperienceSection />
      <ProjectsSection />
      <AwardsEducationSection />
      <ContactSection />
      <TerminalFooter />
    </TerminalChrome>
  );
}
