import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import PageHeader from "@/components/PageHeader";
import CheckList from "@/components/CheckList";
import SectorIcon from "@/components/SectorIcon";
import { sectorDetails, sectorCards, smallSectors } from "@/content/sectors";

export const metadata: Metadata = { title: "Sektorët" };

export default function SektoretPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        breadcrumbs={[{ label: "Ballina", href: "/" }, { label: "Sektorët" }]}
        title="Sektorët që"
        titleEm="shërbejm"
        subtitle="Që nga sektori bankar deri tek industria e prodhimit — UNI PROJECT ofron zgjidhje të specializuara për çdo lloj objekti."
      />

      <section className="sec">
        <div className="wrap">
          {/* Sector 1 */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center", marginBottom: 96 }}>
            <div>
              <div className="eyebrow">Sektori {sectorDetails[0].number}</div>
              <h2 className="section-title">{sectorDetails[0].name}</h2>
              <p className="section-sub">{sectorDetails[0].description}</p>
              <div style={{ marginTop: 24 }}>
                <CheckList items={sectorDetails[0].checklist} />
              </div>
            </div>
            <div className="photo-frame" style={{ aspectRatio: "4/3" }}>
              <img className="photo-cover" src={sectorDetails[0].image} alt={sectorDetails[0].name} style={{ filter: "brightness(.85) saturate(.8)" }} />
            </div>
          </div>
          <hr className="hr" style={{ marginBottom: 96 }} />

          {/* Sector 2 */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center", marginBottom: 96 }}>
            <div className="photo-frame" style={{ aspectRatio: "4/3" }}>
              <img className="photo-cover" src={sectorDetails[1].image} alt={sectorDetails[1].name} style={{ filter: "brightness(.85) saturate(.8)" }} />
            </div>
            <div>
              <div className="eyebrow">Sektori {sectorDetails[1].number}</div>
              <h2 className="section-title">{sectorDetails[1].name}</h2>
              <p className="section-sub">{sectorDetails[1].description}</p>
              <div style={{ marginTop: 24 }}>
                <CheckList items={sectorDetails[1].checklist} />
              </div>
            </div>
          </div>
          <hr className="hr" style={{ marginBottom: 96 }} />

          {/* Sectors 3 + 4 side by side */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginBottom: 96 }}>
            {sectorCards.map((sec) => (
              <div key={sec.number} style={{ background: "var(--bg-subtle)", borderRadius: "var(--r-lg)", padding: 48, display: "flex", flexDirection: "column", gap: 24 }}>
                <div className="card-icon">
                  <SectorIcon type={sec.icon} />
                </div>
                <div>
                  <div className="eyebrow">Sektori {sec.number}</div>
                  <h3 style={{ fontFamily: "var(--font-d)", fontSize: "1.5rem", fontWeight: 700, color: "var(--text-h)", letterSpacing: "-.015em", marginBottom: 12 }}>
                    {sec.name}
                  </h3>
                  <p style={{ fontSize: ".9rem", color: "var(--text-m)", lineHeight: 1.72 }}>
                    {sec.description}
                  </p>
                </div>
                <CheckList items={sec.checklist} />
              </div>
            ))}
          </div>
          <hr className="hr" style={{ marginBottom: 96 }} />

          {/* Sectors 5-8 grid */}
          <div className="sh center">
            <div className="eyebrow">Sektorë të tjerë</div>
            <h2 className="section-title">Edhe më shumë sektoret të shërbyer</h2>
          </div>
          <div className="grid-4">
            {smallSectors.map((sec) => (
              <div key={sec.name} className="card" style={{ padding: 32, display: "flex", flexDirection: "column", gap: 14 }}>
                <div className="card-icon">
                  <SectorIcon type={sec.icon} />
                </div>
                <div style={{ fontFamily: "var(--font-d)", fontWeight: 600, color: "var(--text-h)" }}>{sec.name}</div>
                <div style={{ fontSize: ".85rem", color: "var(--text-m)", lineHeight: 1.6 }}>{sec.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        headline="Sektori juaj nuk është në listë?"
        text="Na kontaktoni — ofrojmë zgjidhje të personalizuara për çdo lloj objekti dhe sektori."
        buttonLabel="Na kontaktoni"
        note="Përgjigje brenda 24 orësh"
      />

      <Footer />
    </>
  );
}
