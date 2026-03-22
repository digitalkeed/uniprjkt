import Link from "next/link";

export default function CTABand({
  headline,
  text,
  buttonLabel = "Kërko ofertë",
  buttonHref = "/kontakt",
  note = "Ju kontaktojmë brenda 24 orësh · Pa angazhim",
  bullets,
}: {
  headline: string;
  text: string;
  buttonLabel?: string;
  buttonHref?: string;
  note?: string;
  bullets?: string[];
}) {
  return (
    <div className="cta-band">
      <div className="wrap">
        <div className="cta-inner">
          <div>
            <h2 className="cta-h">{headline}</h2>
            <p className="cta-p">{text}</p>
            {bullets && bullets.length > 0 && (
              <ul className="cta-bullets">
                {bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            )}
          </div>
          <div className="cta-btns">
            <Link href={buttonHref} className="btn btn-white btn-lg">
              {buttonLabel}{" "}
              <svg viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <span className="cta-note">{note}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
