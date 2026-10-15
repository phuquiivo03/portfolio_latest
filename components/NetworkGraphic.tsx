import type { CSSProperties } from "react";

export function NetworkGraphic() {
  return (
    <svg
      className="net"
      viewBox="0 0 520 420"
      aria-hidden="true"
      preserveAspectRatio="xMidYMin slice"
    >
      <path
        style={{ "--len": "760" } as CSSProperties}
        d="M-20 120 L120 120 L200 60 L360 60 L440 140 L560 140"
      />
      <path
        style={{ "--len": "820", animationDelay: "0.18s" } as CSSProperties}
        d="M-20 220 L90 220 L170 300 L330 300 L410 210 L560 210"
      />
      <path
        style={{ "--len": "700", animationDelay: "0.34s" } as CSSProperties}
        d="M120 120 L170 180 L330 180 L410 210"
      />
      <path
        style={{ "--len": "640", animationDelay: "0.5s" } as CSSProperties}
        d="M200 60 L200 380 L560 380"
      />
      <circle cx="120" cy="120" r="4" style={{ animationDelay: "0.9s" }} />
      <circle cx="200" cy="60" r="4" style={{ animationDelay: "1s" }} />
      <circle cx="170" cy="300" r="4" style={{ animationDelay: "1.1s" }} />
      <circle cx="410" cy="210" r="4" style={{ animationDelay: "1.2s" }} />
      <circle cx="200" cy="380" r="4" style={{ animationDelay: "1.3s" }} />
      <circle className="packet" r="3.2">
        <animateMotion
          dur="5.5s"
          begin="1.6s"
          repeatCount="indefinite"
          path="M-20 120 L120 120 L200 60 L360 60 L440 140 L560 140"
        />
        <animate
          attributeName="opacity"
          values="0;1;1;0"
          dur="5.5s"
          begin="1.6s"
          repeatCount="indefinite"
        />
      </circle>
      <circle className="packet" r="3.2">
        <animateMotion
          dur="6.5s"
          begin="2.9s"
          repeatCount="indefinite"
          path="M-20 220 L90 220 L170 300 L330 300 L410 210 L560 210"
        />
        <animate
          attributeName="opacity"
          values="0;1;1;0"
          dur="6.5s"
          begin="2.9s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}
