import { IconEmail, IconGitHub, IconPhone } from "./icons";

type ContactLinksProps = {
  variant?: "rail" | "cta";
};

export function ContactLinks({ variant = "rail" }: ContactLinksProps) {
  if (variant === "cta") {
    return (
      <div className="contact">
        <a className="chip-link" href="mailto:phuquivo03.cb@gmail.com">
          <IconEmail />
          phuquivo03.cb@gmail.com
        </a>
        <a
          className="chip-link"
          href="https://github.com/phuquiivo03"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconGitHub />
          github.com/phuquiivo03
        </a>
      </div>
    );
  }

  return (
    <div className="contact rail-in">
      <a className="chip-link" href="mailto:phuquivo03.cb@gmail.com">
        <IconEmail />
        Email
      </a>
      <a className="chip-link" href="tel:+84773171203">
        <IconPhone />
        +84 773 171 203
      </a>
      <a
        className="chip-link"
        href="https://github.com/phuquiivo03"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconGitHub />
        GitHub
      </a>
    </div>
  );
}
