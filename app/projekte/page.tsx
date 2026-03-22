import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import PageHeader from "@/components/PageHeader";
import { clientReferences, partnerValueProps } from "@/content/projects";

export const metadata: Metadata = {
  title: "Referencat",
  description:
    "Organizata dhe institucione që kanë besuar UNI PROJECT — referenca të emërtuara, jo studi rasti të fabrikuar.",
};

export default function ProjektePage() {
  return (
    <>
      <Navbar />
      <PageHeader
        breadcrumbs={[{ label: "Ballina", href: "/" }, { label: "Referencat" }]}
        title="Referencat &"
        titleEm="partnerët"
        subtitle="Një përzgjedhje organizatesh me të cilat kemi operuar ose operojmë — emrat reflektojnë kontekstin institucional; detajet kontraktuale mbeten të mbrojtura kur kërkohet."
      />

      <section className="sec">
        <div className="wrap">
          <div className="layout-stats-4 projekte-stats">
            <div className="proj-stat-card">
              <div className="proj-stat-n">
                24<span>+</span>
              </div>
              <div className="proj-stat-l">Vite në treg</div>
            </div>
            <div className="proj-stat-card proj-stat-card-navy">
              <div className="proj-stat-n">
                270<span>+</span>
              </div>
              <div className="proj-stat-l">Profesionistë</div>
            </div>
            <div className="proj-stat-card">
              <div className="proj-stat-n">
                50<span>+</span>
              </div>
              <div className="proj-stat-l">Objekte aktive</div>
            </div>
            <div className="proj-stat-card">
              <div className="proj-stat-n">3</div>
              <div className="proj-stat-l">Çertifikime ISO</div>
            </div>
          </div>

          <div className="sh">
            <div className="eyebrow">Referenca të emërtuara</div>
            <h2 className="section-title">Organizata dhe institucione</h2>
            <p className="section-sub">
              Kjo nuk është listë marketingu me pretendime të pavërtetuara — është një përzgjedhje e emrave që ilustrojnë llojin e partnerëve (financiar, publik, ndërkombëtar) me të cilët punojmë.
            </p>
          </div>

          <ul className="refs-page-list" role="list">
            {clientReferences.map((ref) => (
              <li key={ref.name} className="refs-page-item">
                <div className="refs-page-head">
                  <span className="refs-page-name">{ref.name}</span>
                  <span className="refs-page-pill">{ref.category}</span>
                </div>
                {ref.line && <p className="refs-page-line">{ref.line}</p>}
              </li>
            ))}
          </ul>

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
