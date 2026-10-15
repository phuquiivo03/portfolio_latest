export function placeholderShot(title: string): string {
  const esc = (s: string) =>
    s.replace(/[&<>"]/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c] ?? c,
    );

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360">
    <rect width="640" height="360" fill="#050805"/>
    <g stroke="#1f4d1f" stroke-width="1">
      ${Array.from(
        { length: 18 },
        (_, i) =>
          `<path d="M${i * 36} 0V360"/><path d="M0 ${i * 36}H640"/>`,
      ).join("")}
    </g>
    <rect x="40" y="40" width="560" height="280" rx="14" fill="#EEF2F7" stroke="#B6C4D4"/>
    <circle cx="66" cy="66" r="5" fill="#C3CEDB"/><circle cx="84" cy="66" r="5" fill="#C3CEDB"/><circle cx="102" cy="66" r="5" fill="#C3CEDB"/>
    <rect x="66" y="100" width="240" height="14" rx="7" fill="#C3CEDB"/>
    <rect x="66" y="128" width="420" height="10" rx="5" fill="#D3DCE6"/>
    <rect x="66" y="150" width="360" height="10" rx="5" fill="#D3DCE6"/>
    <rect x="66" y="196" width="150" height="96" rx="10" fill="#DCE4ED"/>
    <rect x="230" y="196" width="150" height="96" rx="10" fill="#DCE4ED"/>
    <rect x="394" y="196" width="150" height="96" rx="10" fill="#DCE4ED"/>
    <text x="320" y="176" text-anchor="middle" font-family="sans-serif" font-size="15" fill="#7C8CA0">${esc(
      title,
    )}</text>
  </svg>`;
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}
