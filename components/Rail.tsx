import Image from "next/image";
import { ContactLinks } from "./ContactLinks";
import { NetworkGraphic } from "./NetworkGraphic";

const navItems = [
  { href: "#work", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#awards", label: "Awards" },
  { href: "#education", label: "Education" },
];

export function Rail() {
  return (
    <aside className="rail">
      <NetworkGraphic />
      <div className="rail-in">
        <Image
          className="photo"
          src="/profile.jpg"
          alt="Vo Nguyen Phu Qui"
          width={76}
          height={76}
          priority
        />
        <h1 className="name">
          Vo Nguyen<br />
          Phu Qui
        </h1>
        <p className="role">Fullstack developer — Ho Chi Minh City</p>
        <p className="summary">
          Fullstack Developer with 2 years of experience building web
          applications using React, Next.js, and Node.js. Capable of
          independently building and shipping products end-to-end, leveraging
          AI-assisted development to accelerate delivery while maintaining code
          quality and reliability. Experienced in REST APIs, Redis, PostgreSQL,
          cloud deployment, and CI/CD.
        </p>
        <div className="status">
          <span className="dot" />
          Open to fullstack and backend roles
        </div>
        <nav id="nav">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              <span className="bar" />
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <ContactLinks variant="rail" />
    </aside>
  );
}
