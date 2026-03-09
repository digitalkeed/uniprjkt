"use client";

/**
 * UNI PROJECT logo mark (from UNI Project LOGO SVG.svg — symbol only).
 * Default: white on navy (nav/footer). Use variant="blue" for blue accent.
 */
export default function Logo({ variant }: { variant?: "blue" }) {
  return (
    <div className={`logo-mark${variant === "blue" ? " logo-mark--blue" : ""}`}>
      <svg
        viewBox="236 36 226 197"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="logo-mark-svg"
        aria-hidden
      >
        {/* Symbol from UNI Project LOGO SVG — uses currentColor (white in nav/footer) or CSS .logo-mark--blue for blue */}
        <polygon
          points="280.7 92.4 280.7 187.9 358.3 187.9 358.3 92.4 402.7 92.4 402.7 232.3 236.5 232.3 236.5 92.4 280.7 92.4"
          fill="currentColor"
        />
        <polygon
          points="461.5 36.2 461.5 137.9 418.5 137.9 418.5 79.2 359.7 79.2 359.7 36.2 461.5 36.2"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}
