export function ExperienceSection() {
  return (
    <section id="work">
      <div className="s-head rv">
        <h2>Experience</h2>
        <span className="rule" />
        <span className="count">2021 — now</span>
      </div>
      <div className="tl">
        <article className="job rv">
          <h3>The Binary Holdings</h3>
          <p className="meta">Fullstack Developer, remote · Jun 2025 — Jun 2026</p>
          <ul>
            <li>
              Built responsive interfaces with React and Next.js, backed by a
              reusable component library.
            </li>
            <li>
              Integrated RESTful APIs and cut response times with Redis caching.
            </li>
            <li>
              Implemented secure authentication and crypto wallet connection
              flows.
            </li>
          </ul>
        </article>
        <article className="job rv">
          <h3>VBI Academy</h3>
          <p className="meta">Fullstack Developer Intern · Nov 2024 — May 2025</p>
          <ul>
            <li>Designed and shipped CRUD APIs for core application data.</li>
            <li>
              Integrated blockchain features such as NFT minting with ethers.js.
            </li>
            <li>
              Set up deployment and infrastructure on GCP with Kubernetes and
              cloud storage.
            </li>
            <li>
              Owned frontend and backend of a game project, including deploys
              and basic monitoring.
            </li>
            <li>
              Built CI/CD with GitHub Actions to remove manual deploy steps.
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}
