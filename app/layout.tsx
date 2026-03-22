import type { Metadata } from "next";
import "./globals.css";
import CookiesConsent from "@/components/CookiesConsent";

export const metadata: Metadata = {
  title: {
    default: "UNI PROJECT Sh.P.K. — Pastrim Profesional & Menaxhimi i Objekteve",
    template: "%s | UNI PROJECT Sh.P.K.",
  },
  description:
    "Pastrim profesional, mirëmbajtje teknike dhe menaxhim i objekteve në Kosovë — ISO 9001/14001/45001, akademi trajnimi që nga 2006, mbulim në Prishtinë dhe qytete të tjera.",
  keywords: [
    "pastrim profesional",
    "menaxhimi i objekteve",
    "Kosovë",
    "ISO 9001",
    "UNI PROJECT",
    "mirëmbajtje",
    "dezinfektim",
  ],
  openGraph: {
    type: "website",
    locale: "sq_AL",
    siteName: "UNI PROJECT Sh.P.K.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sq">
      <body>
        <a href="#main-content" className="skip-link">
          Kaloni te përmbajtja kryesore
        </a>
        <main id="main-content">{children}</main>
        <CookiesConsent />
      </body>
    </html>
  );
}
