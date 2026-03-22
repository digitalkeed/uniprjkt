import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import PageHeader from "@/components/PageHeader";
import { projects, partnerValueProps } from "@/content/projects";

export const metadata: Metadata = { title: "Projekte" };

export default function ProjektePage() {
  return (
    <>
      <Navbar />
      <PageHeader
        breadcrumbs={[{ label: "Ballina", href: "/" }, { label: "Projekte" }]}
        title="Referencat &"
        titleEm="projektet"
        subtitle="Shembuj të strukturës së kontratave dhe shkallës operacionale — pa emra komercialë për shkak të kontratave të konfidencialitetit (NDA)."
      />

      <section className="sec">
        <div className="wrap">
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
              <div className="proj-stat-n">3</div>
              <div className="proj-stat-l">Çertifikime ISO</div>
            </div>
          </div>

          <div className="sh">
            <div className="eyebrow">Raste operacionale</div>
            <h2 className="section-title">Strukturë kontrate, jo vetëm fotografi</h2>
            <p className="section-sub">Çdo rast përshkruan sektorin, shkallën dhe rezultatin operacional — pa pretenduar emra klientësh ku nuk lejohen.</p>
          </div>
          <div className="projekte-list">
            {projects.map((proj, i) => (
              <div key={proj.title} className={`layout-2col proj-card ${i % 2 === 1 ? "layout-2col--image-first" : ""}`}>
                {i % 2 === 1 && (
                  <div className="layout-2col-img proj-card-img">
                    <img className="photo-muted--soft" src={proj.image} alt="" loading="lazy" />
                  </div>
                )}
                <div className="layout-2col-content proj-card-body">
                  <div className="eyebrow">{proj.sector}</div>
                  <h2 className="proj-card-title">{proj.title}</h2>
                  <p className="proj-card-desc">{proj.description}</p>
                  <div className="tags">{proj.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
                  <dl className="proj-meta-grid">
                    <div className="proj-meta-item">
                      <dt>Shkalla / objekti</dt>
                      <dd>{proj.scope}</dd>
                    </div>
                    <div className="proj-meta-item">
                      <dt>Ekipi</dt>
                      <dd>{proj.teamSize}</dd>
                    </div>
                    <div className="proj-meta-item">
                      <dt>Shërbimet</dt>
                      <dd>{proj.services}</dd>
                    </div>
                    <div className="proj-meta-item">
                      <dt>Rezultati</dt>
                      <dd>{proj.outcome}</dd>
                    </div>
                  </dl>
                </div>
                {i % 2 === 0 && (
                  <div className="layout-2col-img proj-card-img">
                    <img className="photo-muted--soft" src={proj.image} alt="" loading="lazy" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="sh center mt-10">
            <div className="eyebrow">Pse na zgjedhin</div>
            <h2 className="section-title">Modeli ynë operacional</h2>
          </div>
          <div className="proof-cards">
            {partnerValueProps.map((p) => (
              <div key={p.title} className="proof-card">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        headline="Kërkoni të njëjtën strukturë për objektin tuaj."
        text="Takim vlerësimi dhe ofertë e detajuar — përgjigje brenda 24 orëve të punës."
        note="Pa angazhim · Vlerësim falas"
      />

      <Footer />
    </>
  );
}
