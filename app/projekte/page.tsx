import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import PageHeader from "@/components/PageHeader";
import ScrollFade from "@/components/ScrollFade";
import { projects } from "@/content/projects";
import { testimonials } from "@/content/testimonials";

export const metadata: Metadata = { title: "Projekte" };

export default function ProjektePage() {
  return (
    <>
      <Navbar />
      <PageHeader
        breadcrumbs={[{ label: "Ballina", href: "/" }, { label: "Projekte" }]}
        title="Projektet &"
        titleEm="Referencat"
        subtitle="Mbi 24 vite përvojë — partnerë të besueshëm të bankave, qendrave tregtare dhe institucioneve publike në Kosovë."
      />

      <section className="sec">
        <div className="wrap">
          {/* Stats row */}
          <div className="layout-stats-4 projekte-stats">
            <div className="proj-stat-card">
              <div className="proj-stat-n">24<span>+</span></div>
              <div className="proj-stat-l">Vite në treg</div>
            </div>
            <div className="proj-stat-card proj-stat-card-navy">
              <div className="proj-stat-n">270<span>+</span></div>
              <div className="proj-stat-l">Profesionistë</div>
            </div>
            <div className="proj-stat-card">
              <div className="proj-stat-n">50<span>+</span></div>
              <div className="proj-stat-l">Objekte aktive</div>
            </div>
            <div className="proj-stat-card">
              <div className="proj-stat-n">98<span>%</span></div>
              <div className="proj-stat-l">Shkallë kënaqësie</div>
            </div>
          </div>

          {/* Featured projects */}
          <div className="sh">
            <div className="eyebrow">Projekte të zgjedhura</div>
            <h2 className="section-title">Disa nga projektet tona kryesore</h2>
          </div>
          <div className="projekte-list">
            {projects.map((proj, i) => (
              <div key={i} className={`layout-2col proj-card ${i % 2 === 1 ? "layout-2col--image-first" : ""}`}>
                {i % 2 === 1 && (
                  <div className="layout-2col-img proj-card-img">
                    <img src={proj.image} alt={proj.title} />
                  </div>
                )}
                <div className="layout-2col-content proj-card-body">
                  <div className="eyebrow">{proj.sector}</div>
                  <h3 className="proj-card-title">{proj.title}</h3>
                  <p className="proj-card-desc">{proj.description}</p>
                  <div className="tags">{proj.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
                </div>
                {i % 2 === 0 && (
                  <div className="layout-2col-img proj-card-img">
                    <img src={proj.image} alt={proj.title} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="sec sec-subtle">
        <div className="wrap">
          <div className="sh center">
            <div className="eyebrow">Dëshmitë</div>
            <h2 className="section-title">Çfarë thonë klientët tanë</h2>
          </div>
          <div className="grid-3">
            {testimonials.map((t, i) => (
              <ScrollFade key={i} delay={i * 70}>
                <div className="test-card" style={{ height: "100%" }}>
                  <div className="qmark">&ldquo;</div>
                  <p className="test-text">{t.text}</p>
                  <div className="test-meta">
                    <div className="test-name">{t.name}</div>
                    <div className="test-role">{t.role}</div>
                  </div>
                </div>
              </ScrollFade>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        headline="Bëhuni pjesë e listës tonë të partnerëve."
        text="Na kontaktoni për një vlerësim falas të objektit tuaj."
        note="Pa angazhim · Vlerësim falas"
      />

      <Footer />
    </>
  );
}
