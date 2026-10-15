import { site } from "@/data/site";

export function TerminalFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="term-footer">
      <p className="footer-echo">
        $ echo &quot;(c) {year} {site.name}, built in the terminal, shipped
        fast&quot;
        <span className="cursor-block" aria-hidden="true" />
      </p>
      <p className="footer-git">
        last commit: portfolio retheme, main@7c4a1f9, uptime 99.98%
      </p>
    </footer>
  );
}
