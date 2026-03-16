import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "UNI PROJECT Sh.P.K. — Pastrim Profesional & Menaxhimi i Objekteve",
    template: "%s | UNI PROJECT Sh.P.K.",
  },
  description:
    "Pastrim profesional, mirëmbajtje teknike dhe menaxhim i objekteve në të gjithë Kosovën — me standarde ISO, staf të trajnuar dhe raportim dixhital.",
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

import CookiesConsent from "@/components/CookiesConsent";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sq">
      <body>
        {children}
        <CookiesConsent />
      </body>
    </html>
  );
}
