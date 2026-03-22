import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import PageHeader from "@/components/PageHeader";
import {
  aboutPage,
  aboutMission,
  aboutVision,
  aboutValues,
  aboutExperience,
  aboutCertifications,
  aboutCoverage,
} from "@/content/about";

export const metadata: Metadata = {
  title: "Rreth UNI PROJECT — Pastrim Profesional dhe Menaxhimi i Objekteve në Kosovë",
  description:
    "Misioni, vizioni dhe vlerat e UNI PROJECT — pastrim profesional, ISO, akademi trajnimi dhe mbulim në të gjithë Kosovën.",
};

export default function RrethNeshPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        breadcrumbs={[{ label: "Ballina", href: "/" }, { label: "Rreth nesh" }]}
        title={aboutPage.titleLine1}
        titleEm={aboutPage.titleLine2}
        subtitle={aboutPage.intro}
      />

      <section className="sec sec-subtle">
        <div className="wrap about-mv-grid">
          <article className="about-mv-card">
            <h2 className="about-card-title">{aboutMission.title}</h2>
            <p className="about-card-text">{aboutMission.text}</p>
          </article>
          <article className="about-mv-card">
            <h2 className="about-card-title">{aboutVision.title}</h2>
            <p className="about-card-text">{aboutVision.text}</p>
          </article>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sh">
            <div className="eyebrow">Vlerat</div>
            <h2 className="section-title">Si punojmë me njëri-tjetrin dhe me ju</h2>
          </div>
          <ul className="about-values-grid">
            {aboutValues.map((v) => (
              <li key={v.title} className="about-value-card">
                <h3 className="about-value-title">{v.title}</h3>
                <p className="about-value-text">{v.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sec sec-subtle">
        <div className="wrap about-exp-block">
          <h2 className="section-title">{aboutExperience.title}</h2>
          {aboutExperience.paragraphs.map((p) => (
            <p key={p.slice(0, 40)} className="section-sub about-exp-p">
              {p}
            </p>
          ))}
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sh">
            <div className="eyebrow">Përputhje</div>
            <h2 className="section-title">{aboutCertifications.title}</h2>
          </div>
          <ul className="about-cert-list">
            {aboutCertifications.items.map((c) => (
              <li key={c.code} className="about-cert-item">
                <span className="about-cert-code">{c.code}</span>
                <span className="about-cert-label">{c.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sec sec-subtle">
        <div className="wrap about-coverage-block">
          <h2 className="section-title">{aboutCoverage.title}</h2>
          <p className="section-sub">{aboutCoverage.lead}</p>
          <ul className="about-cities">
            {aboutCoverage.cities.map((city) => (
              <li key={city}>{city}</li>
            ))}
          </ul>
          <p className="about-footnote">{aboutCoverage.footnote}</p>
        </div>
      </section>

      <CTABand
        headline="Dëshironi të diskutoni objektin tuaj?"
        text="Na shkruani — përgjigje e parë brenda 24 orëve të punës, me hapat e ardhshëm dhe kur është e nevojshme takim në vend."
        note="Prishtinë, Mitrovicë, Pejë, Prizren, Gjilan, Ferizaj dhe më gjerë"
      />

      <Footer />
    </>
  );
}
