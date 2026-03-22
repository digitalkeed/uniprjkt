import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-main">
          <div>
            <Link href="/" className="ft-logo-wrap" aria-label="UNI PROJECT — Ballina">
              <Logo className="logo-full--light" />
            </Link>
            <p className="ft-desc">
              Pastrim profesional, mirëmbajtje teknike dhe menaxhim i objekteve në të gjithë
              Kosovën. Partner i besueshëm i sektorit korporativ që nga 2001.
            </p>
            <div className="ft-since">&#8212; Themeluar 2001</div>
            <div className="iso-pills ft-iso-pills">
              <span className="iso-pill">ISO 9001</span>
              <span className="iso-pill">ISO 14001</span>
              <span className="iso-pill">ISO 45001</span>
            </div>
          </div>

          <div>
            <div className="ft-col-title">Navigimi</div>
            <ul className="ft-links">
              <li><Link href="/">Ballina</Link></li>
              <li><Link href="/sherbimet">Shërbimet</Link></li>
              <li><Link href="/sektoret">Sektorët</Link></li>
              <li><Link href="/si-operojme">Si Operojmë</Link></li>
              <li><Link href="/projekte">Projekte</Link></li>
              <li><Link href="/kontakt">Kontakti</Link></li>
            </ul>
          </div>

          <div>
            <div className="ft-col-title">Shërbimet</div>
            <ul className="ft-links">
              <li><Link href="/sherbimet/pastrim">Pastrim Profesional</Link></li>
              <li><Link href="/sherbimet/facility">Menaxhimi i Objekteve</Link></li>
              <li><Link href="/sherbimet/dezinfektim">Dezinfektim &amp; Sanitizim</Link></li>
              <li><Link href="/sherbimet/oncall">Gatishmëri &amp; Emergjencë</Link></li>
            </ul>
          </div>

          <div>
            <div className="ft-col-title">Kontakti</div>
            <div className="ft-ci">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M8 1C5.24 1 3 3.24 3 6c0 3.75 5 9 5 9s5-5.25 5-9c0-2.76-2.24-5-5-5z" strokeLinecap="round" />
                <circle cx="8" cy="6" r="1.5" />
              </svg>
              <span>Rr. Ukshin Hoti, Prishtinë, Kosovë</span>
            </div>
            <div className="ft-ci">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M2 3h12a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1V4a1 1 0 011-1zm0 1l6 4 6-4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span><a href="mailto:info@uniproject-ks.com">info@uniproject-ks.com</a></span>
            </div>
            <div className="ft-ci">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M10.42 10.42l2.12 2.12a1 1 0 01.07 1.34C11.5 15.1 10 16 8.5 16 4.36 16 0 11.64 0 7.5c0-1.5.9-3 2.12-4.11a1 1 0 011.34.07l2.12 2.12a1 1 0 010 1.41L4.5 8.07C5.44 9.65 6.35 10.56 7.93 11.5l1.08-1.08a1 1 0 011.41 0z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span><a href="tel:+38344123456">+383 44 123 456</a></span>
            </div>
            <div className="ft-ci">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
                <circle cx="8" cy="8" r="6" strokeLinecap="round" />
                <path d="M8 5v3.5l2 1.5" strokeLinecap="round" />
              </svg>
              <span>E Hënë &ndash; E Premte: 08:00 &ndash; 17:00</span>
            </div>
          </div>
        </div>

        <div className="ft-bottom">
          <div className="ft-legal">&copy; 2026 UNI PROJECT Sh.P.K. Të gjitha të drejtat e rezervuara.</div>
          <div className="ft-legal-links">
            <Link href="/politika-privatisesi">Politika e Privatësisë</Link>
            <Link href="/politika-privatisesi#cookies">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
