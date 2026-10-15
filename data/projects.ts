export type Project = {
  id: string;
  title: string;
  org: string;
  shot?: string;
  site?: string;
  when: string;
  role: string;
  short: string;
  desc?: string;
  tags: string[];
  stack: [string, string][];
  work: string[];
  repo?: string;
};

export const projects: Project[] = [
  {
    id: "deducto",
    title: "Deducto",
    org: "Personal Project",
    shot: "/deducto.png",
    site: "https://deducto-gamma.vercel.app/",
    when: "2026",
    role: "Fullstack Developer",
    short:
      "An interactive mystery deduction game where players solve murder cases by linking clues, with AI Generative support for custom case creation.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Generative AI",
      "Zustand",
    ],
    stack: [
      [
        "Frontend",
        "Next.js, TypeScript, React, Tailwind CSS, Zustand, React Flow",
      ],
      ["Backend & AI", "Node.js, AWS/Bedrock AI, Supabase Auth & Database"],
      ["Deployment", "Vercel"],
    ],
    work: [
      "Designed and built core mystery deduction gameplay allowing users to connect clues and make logical inferences to uncover suspects.",
      "Integrated Generative AI to automatically generate custom detective cases, character backgrounds, and clue relations.",
      "Implemented interactive UI components and flow node connections for smooth clue-linking mechanics.",
      "Built user authentication and database management for saving progress and user-generated cases.",
    ],
    repo: "https://github.com/phuquiivo03/Deducto",
  },
  {
    id: "drawly",
    title: "Lucky Slot",
    org: "Personal Project",
    shot: "/drawly-site.png",
    site: "https://drawly-omega.vercel.app/",
    when: "2026",
    role: "Fullstack Developer",
    short:
      "A social giveaway platform where creators create events, share invite links, let users claim slots, and randomly select a winner.",
    tags: ["Next.js", "TypeScript", "Supabase", "Zustand", "GSAP"],
    stack: [
      ["Frontend", "Next.js, TypeScript, Zustand, Zod, GSAP, React Joyride"],
      ["Backend services", "Supabase Auth, PostgreSQL, Storage, Realtime"],
      ["Deployment", "Vercel"],
    ],
    work: [
      "Built the complete flow: create event → invite → pick slots → lock event → draw winner.",
      "Implemented Facebook OAuth and a demo account flow using Supabase Auth.",
      "Built event and slot management with per-user limits and real-time updates.",
      "Implemented a server-side SHA-256 based random draw with verifiable winner results.",
      "Built interactive reel animations and onboarding with GSAP and React Joyride.",
    ],
    repo: "https://github.com/phuquiivo03/drawly",
  },
  {
    id: "wallet",
    title: "Mini Wallet System",
    shot: "/miniwalletDemo.png",
    site: "https://mini-wallet-demo-fe.vercel.app/",
    org: "Personal project",
    when: "Aug 2026",
    role: "Fullstack Developer",
    short:
      "A wallet app with accounts, balances and transfers, processed asynchronously and pushed to clients in real time.",
    desc:
      "A full-stack mini wallet application supporting user accounts, balance management and money transfers, with asynchronous transaction processing and real-time notifications.",
    tags: ["Express.js", "PostgreSQL", "RabbitMQ", "WebSocket", "AWS"],
    stack: [
      ["Frontend", "React.js, Shadcn UI"],
      ["Backend", "TypeScript, Express.js, Prisma"],
      ["Data & messaging", "PostgreSQL, Redis, RabbitMQ"],
      ["Real-time & security", "WebSocket, JWT, bcrypt, Zod"],
      ["Deployment", "Docker, Nginx, AWS EC2, Vercel"],
    ],
    work: [
      "Designed and implemented the backend architecture and REST APIs for authentication, accounts, balance management and money transfers.",
      "Built transaction processing on a double-entry model to track account movements and keep an auditable record.",
      "Integrated RabbitMQ for asynchronous processing with durable queues, retries and dead letter queues for failed messages.",
      "Delivered transaction updates to connected clients over WebSocket.",
      "Built the frontend demo and wired it to the backend APIs and real-time services.",
    ],
    repo: "https://github.com/phuquiivo03/mini-wallet-demo",
  },
  {
    id: "raffle",
    title: "Raffle",
    org: "The Binary Holdings",
    when: "Jun 2025 — Nov 2025",
    role: "Fullstack Developer",
    short:
      "A GameFi web app where players connect a crypto wallet and pay on-chain without leaving the game.",
    desc:
      "A GameFi web application that combines a traditional gaming experience with Web3 functionality, letting users connect their crypto wallets and use blockchain payments directly inside the game.",
    tags: ["Next.js", "Redux", "PixiJS", "Ethers.js"],
    stack: [
      ["Frontend", "Next.js, Redux, PixiJS, Ethers.js"],
      ["Backend services", "Supabase"],
    ],
    work: [
      "Developed the frontend interface and interactive game UI in Next.js.",
      "Managed global state with Redux across game and wallet flows.",
      "Integrated Web3 wallet connectivity and blockchain payments with Ethers.js.",
      "Implemented wallet transaction flows, from connecting a wallet to initiating a payment.",
      "Used Supabase for backend services, data persistence and user data.",
      "Built responsive, interactive UI components around the Web3 experience.",
    ],
  },
  {
    id: "openbattle",
    title: "OpenBattle",
    org: "VBI Academy",
    when: "Dec 2024 — Apr 2025",
    role: "Backend Developer & DevOps",
    short:
      "A quiz-and-boss-battle game where social tasks earn points that convert into campaign rewards.",
    desc:
      "An educational game where players answer multiple-choice questions to earn turns for boss battles, and complete social tasks to earn points redeemable for rewards through company campaigns.",
    tags: ["Express.js", "MongoDB", "GKE", "Unity"],
    stack: [
      ["Frontend", "React.js, Shadcn UI, React Unity WebGL, Sentry"],
      ["Backend", "Express.js, MongoDB, Mongoose, Redis"],
      ["Game engine", "Unity"],
      [
        "Integrations & infra",
        "X (Twitter) API, Facebook API, Telegram API, Docker, GKE, Artifact Registry, PM2, Nginx",
      ],
    ],
    work: [
      "Designed the system architecture and backend APIs for game features, social tasks, scoring and reward campaigns.",
      "Implemented and maintained backend services with Express.js, MongoDB, Mongoose and Redis.",
      "Researched and integrated third-party APIs to verify social tasks on X, Facebook and Telegram.",
      "Set up CI/CD pipelines and ran deployments on GKE with Docker, Artifact Registry, PM2 and Nginx.",
      "Produced periodic game and user reports for the marketing team to track campaigns.",
    ],
  },
];
