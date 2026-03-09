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
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 72,
                  alignItems: "center",
                  marginBottom: i < serviceDetails.length - 1 ? 100 : 0,
                }}
              >
                {i % 2 === 1 && (
                  <div className="photo-frame" style={{ aspectRatio: "4/3", order: 1 }}>
                    <img
                      className="photo-cover"
                      src={svc.image}
                      alt={svc.title}
                      style={{ filter: "brightness(.9) saturate(.85)" }}
                    />
                  </div>
                )}
                <div style={{ order: i % 2 === 1 ? 2 : undefined }}>
                  <div className="eyebrow">Shërbimi {svc.number}</div>
                  <h2 className="section-title">{svc.title}</h2>
                  <p className="section-sub">{svc.description}</p>
                  <div style={{ marginTop: 28 }}>
                    <CheckList items={svc.checklist} />
                  </div>
                  <div style={{ marginTop: 32, display: "flex", gap: 12 }}>
                    <Link href={`/sherbimet/${svc.slug}`} className="btn btn-blue">
                      Shiko më shumë
                    </Link>
                    <Link href="/kontakt" className="btn btn-outline">
                      Kërko ofertë
                    </Link>
                  </div>
                </div>
                {i % 2 === 0 && (
                  <div className="photo-frame" style={{ aspectRatio: "4/3" }}>
                    <img
                      className="photo-cover"
                      src={svc.image}
                      alt={svc.title}
                      style={{ filter: "brightness(.9) saturate(.85)" }}
                    />
                  </div>
                )}
              </div>
              {i < serviceDetails.length - 1 && (
                <hr className="hr" style={{ marginBottom: 100 }} />
              )}
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
