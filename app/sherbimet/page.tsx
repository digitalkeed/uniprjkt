import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import PageHeader from "@/components/PageHeader";
import CheckList from "@/components/CheckList";
import { serviceDetails } from "@/content/services";

export const metadata: Metadata = {
  title: "Shërbimet",
};

export default function SherbimetPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        breadcrumbs={[{ label: "Ballina", href: "/" }, { label: "Shërbimet" }]}
        title="Shërbimet"
        titleEm="tona"
        subtitle="Tre shtylla kryesore që mbulojnë çdo nevojë të objektit tuaj — nga pastrim ditor deri te menaxhim i plotë i infrastrukturës."
      />

      <section className="sec">
        <div className="wrap">
          {serviceDetails.map((svc, i) => (
            <div key={svc.slug}>
              <div className={`layout-2col sherbimet-block ${i % 2 === 1 ? "layout-2col--image-first" : ""}`} style={{ marginBottom: i < serviceDetails.length - 1 ? 100 : 0 }}>
                {i % 2 === 1 ? (
                  <>
                    <div className="photo-frame layout-2col-img" style={{ aspectRatio: "4/3" }}>
                      <img className="photo-cover" src={svc.image} alt={svc.title} style={{ filter: "brightness(.9) saturate(.85)" }} />
                    </div>
                    <div className="layout-2col-content">
                      <div className="eyebrow">Shërbimi {svc.number}</div>
                      <h2 className="section-title">{svc.title}</h2>
                      <p className="section-sub">{svc.description}</p>
                      <div style={{ marginTop: 28 }}>
                        <CheckList items={svc.checklist} />
                      </div>
                      <div className="sherbimet-actions">
                        <Link href={`/sherbimet/${svc.slug}`} className="btn btn-blue">Shiko më shumë</Link>
                        <Link href="/kontakt" className="btn btn-outline">Kërko ofertë</Link>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="layout-2col-content">
                      <div className="eyebrow">Shërbimi {svc.number}</div>
                      <h2 className="section-title">{svc.title}</h2>
                      <p className="section-sub">{svc.description}</p>
                      <div style={{ marginTop: 28 }}>
                        <CheckList items={svc.checklist} />
                      </div>
                      <div className="sherbimet-actions">
                        <Link href={`/sherbimet/${svc.slug}`} className="btn btn-blue">Shiko më shumë</Link>
                        <Link href="/kontakt" className="btn btn-outline">Kërko ofertë</Link>
                      </div>
                    </div>
                    <div className="photo-frame layout-2col-img" style={{ aspectRatio: "4/3" }}>
                      <img className="photo-cover" src={svc.image} alt={svc.title} style={{ filter: "brightness(.9) saturate(.85)" }} />
                    </div>
                  </>
                )}
              </div>
              {i < serviceDetails.length - 1 && <hr className="hr sherbimet-hr" />}
            </div>
          ))}
        </div>
      </section>

      <CTABand
        headline="Nuk jeni të sigurt cili shërbim ju nevojitet?"
        text="Na kontaktoni dhe në 24 orë ju dërgojmë një propozim të personalizuar, pa angazhim."
        buttonLabel="Na kontaktoni"
        note="Përgjigje brenda 24 orësh"
      />

      <Footer />
    </>
  );
}
