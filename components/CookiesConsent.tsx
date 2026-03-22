"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const STORAGE_KEY = "uniproject-cookies-consent";

type Consent = "all" | "essential" | null;

export default function CookiesConsent() {
  const [consent, setConsent] = useState<Consent>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Consent | null;
      if (stored === "all" || stored === "essential") {
        setConsent(stored);
      } else {
        setConsent(null);
      }
    } catch {
      setConsent(null);
    }
    setMounted(true);
  }, []);

  const save = (value: "all" | "essential") => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
      setConsent(value);
    } catch {
      setConsent("essential");
    }
  };

  if (!mounted || consent !== null) return null;

  return (
    <div className="cookies-banner" role="dialog" aria-label="Pëlqimi i cookies">
      <div className="cookies-banner-inner">
        <p>
          Përdorim cookies për të përmirësuar përvojën tuaj në faqen tonë dhe për qëllime statistikore. Duke vazhduar, ju
          pranoni përdorimin e cookies. Lexoni{" "}
          <Link href="/politika-privatisesi#cookies">Politikën e Privatësisë dhe Cookies</Link>.
        </p>
        <div className="cookies-banner-btns">
          <button
            type="button"
            className="cookies-btn cookies-btn--essential"
            onClick={() => save("essential")}
            aria-label="Prano vetëm cookies thelbësore"
          >
            Vetëm thelbësore
          </button>
          <button
            type="button"
            className="cookies-btn cookies-btn--accept"
            onClick={() => save("all")}
            aria-label="Prano të gjitha cookies"
          >
            Prano të gjitha
          </button>
        </div>
      </div>
    </div>
  );
}
