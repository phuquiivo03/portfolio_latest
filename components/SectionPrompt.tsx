type SectionPromptProps = {
  command: string;
};

export function SectionPrompt({ command }: SectionPromptProps) {
  return (
    <p className="section-prompt" aria-hidden="true">
      <span className="prompt-user">user</span>
      <span className="prompt-path">~/dev</span>
      <span className="prompt-glyph"> $ </span>
      <span className="prompt-cmd">{command}</span>
    </p>
  );
}
