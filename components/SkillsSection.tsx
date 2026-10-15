const skillGroups = [
  {
    title: "Languages",
    tags: [
      "JavaScript",
      "TypeScript",
      "OOP",
      "Data structures & algorithms",
    ],
  },
  {
    title: "Frontend",
    tags: [
      "React",
      "Next.js",
      "Zustand",
      "Redux",
      "TailwindCSS",
      "Shadcn/UI",
      "ESLint",
      "Prettier",
    ],
  },
  {
    title: "Backend",
    tags: [
      "Node.js",
      "Express.js",
      "NestJS",
      "FastAPI",
      "Prisma",
      "WebSocket",
      "RabbitMQ",
    ],
  },
  {
    title: "Data",
    tags: ["PostgreSQL", "MongoDB", "Redis", "Mongoose"],
  },
  {
    title: "Infrastructure",
    tags: [
      "AWS",
      "GCP",
      "Kubernetes",
      "Docker",
      "CI/CD",
      "Nginx",
      "Linux",
    ],
  },
  {
    title: "Web3",
    tags: ["Ethers.js", "Wallet connection", "NFT minting", "Supabase"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills">
      <div className="s-head rv">
        <h2>Skills</h2>
        <span className="rule" />
      </div>
      <div className="skills">
        {skillGroups.map((group) => (
          <div key={group.title} className="skill rv">
            <h3>{group.title}</h3>
            <div className="stack">
              {group.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
