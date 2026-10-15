const awards = [
  { when: "Nov 2024", text: "1st place — Sui Hacker House, Bangkok" },
  { when: "Sep 2023", text: "3rd place — Web3Hackfest" },
  { when: "Sep 2023", text: "1st place — VBI × TDTU Blockchain Hackathon" },
  { when: "Nov 2022", text: "2nd place — Web Portfolio Competition" },
];

export function AwardsSection() {
  return (
    <section id="awards">
      <div className="s-head rv">
        <h2>Awards</h2>
        <span className="rule" />
        <span className="count">4 hackathon placements</span>
      </div>
      <ul className="awards">
        {awards.map((a) => (
          <li key={a.text} className="rv">
            <span>{a.when}</span>
            {a.text}
          </li>
        ))}
      </ul>
    </section>
  );
}
