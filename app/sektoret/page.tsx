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
        titleEm="shërbejmë"
        subtitle="Që nga sektori bankar deri tek industria e prodhimit — UNI PROJECT ofron zgjidhje të specializuara për çdo lloj objekti."
      />

      <section className="sec">
        <div className="wrap">
          <div className="layout-2col sektoret-block">
            <div className="layout-2col-content">
              <div className="eyebrow">Sektori {sectorDetails[0].number}</div>
              <h2 className="section-title">{sectorDetails[0].name}</h2>
              <p className="section-sub">{sectorDetails[0].description}</p>
              <div className="mt-8">
                <CheckList items={sectorDetails[0].checklist} />
              </div>
            </div>
            <div className="photo-frame photo-frame-ar layout-2col-img">
              <img className="photo-cover photo-muted--soft" src={sectorDetails[0].image} alt={sectorDetails[0].name} loading="lazy" />
            </div>
          </div>
          <hr className="hr sektoret-hr" />

          <div className="layout-2col layout-2col--image-first sektoret-block">
            <div className="photo-frame photo-frame-ar layout-2col-img">
              <img className="photo-cover photo-muted--soft" src={sectorDetails[1].image} alt={sectorDetails[1].name} loading="lazy" />
            </div>
            <div className="layout-2col-content">
              <div className="eyebrow">Sektori {sectorDetails[1].number}</div>
              <h2 className="section-title">{sectorDetails[1].name}</h2>
              <p className="section-sub">{sectorDetails[1].description}</p>
              <div className="mt-8">
                <CheckList items={sectorDetails[1].checklist} />
              </div>
            </div>
          </div>
          <hr className="hr sektoret-hr" />

          <div className="layout-2col sektoret-cards" style={{ gap: 32, marginBottom: 96 }}>
            {sectorCards.map((sec) => (
              <div key={sec.number} className="sektoret-card">
                <div className="card-icon">
                  <SectorIcon type={sec.icon} />
                </div>
                <div>
                  <div className="eyebrow">Sektori {sec.number}</div>
                  <h2 className="sektoret-card-title">{sec.name}</h2>
                  <p className="sektoret-card-text">{sec.description}</p>
                </div>
                <CheckList items={sec.checklist} />
              </div>
            ))}
          </div>
          <hr className="hr sektoret-hr" />

          <div className="sh center">
            <div className="eyebrow">Sektorë të tjerë</div>
            <h2 className="section-title">Edhe më shumë sektorë të shërbyer</h2>
          </div>
          <div className="grid-4">
            {smallSectors.map((sec) => (
              <div key={sec.name} className="card small-sector-card h-full">
                <div className="card-icon">
                  <SectorIcon type={sec.icon} />
                </div>
                <h3 className="sektoret-card-title">{sec.name}</h3>
                <p className="sektoret-card-text">{sec.description}</p>
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
