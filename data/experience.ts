export type Job = {
  company: string;
  meta: string;
  bullets: string[];
};

export const jobs: Job[] = [
  {
    company: "The Binary Holdings",
    meta: "Fullstack Developer, remote · Jun 2025 — Jun 2026",
    bullets: [
      "Built responsive interfaces with React and Next.js, backed by a reusable component library.",
      "Integrated RESTful APIs and cut response times with Redis caching.",
      "Implemented secure authentication and crypto wallet connection flows.",
    ],
  },
  {
    company: "VBI Academy",
    meta: "Fullstack Developer Intern · Nov 2024 — May 2025",
    bullets: [
      "Designed and shipped CRUD APIs for core application data.",
      "Integrated blockchain features such as NFT minting with ethers.js.",
      "Set up deployment and infrastructure on GCP with Kubernetes and cloud storage.",
      "Owned frontend and backend of a game project, including deploys and basic monitoring.",
      "Built CI/CD with GitHub Actions to remove manual deploy steps.",
    ],
  },
];
