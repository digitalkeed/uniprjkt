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
        subtitle="Pesë shtylla operacionale — pastrim, menaxhim objektesh, dezinfektim, gatishmëri emergjence dhe shërbime të specializuara — me të njëjtin standard dokumentimi dhe SLA."
      />

      <section className="sec">
        <div className="wrap">
          {serviceDetails.map((svc, i) => (
            <div key={svc.slug}>
              <div className={`layout-2col sherbimet-block ${i % 2 === 1 ? "layout-2col--image-first" : ""}`} style={{ marginBottom: i < serviceDetails.length - 1 ? 100 : 0 }}>
                {i % 2 === 1 ? (
                  <>
                    <div className="photo-frame photo-frame-ar layout-2col-img">
                      <img className="photo-cover photo-muted" src={svc.image} alt={svc.title} loading="lazy" />
                    </div>
                    <div className="layout-2col-content">
                      <div className="eyebrow">Shërbimi {svc.number}</div>
                      <h2 className="section-title">{svc.title}</h2>
                      <p className="section-sub">{svc.description}</p>
                      <div className="mt-8">
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
                      <div className="mt-8">
                        <CheckList items={svc.checklist} />
                      </div>
                      <div className="sherbimet-actions">
                        <Link href={`/sherbimet/${svc.slug}`} className="btn btn-blue">Shiko më shumë</Link>
                        <Link href="/kontakt" className="btn btn-outline">Kërko ofertë</Link>
                      </div>
                    </div>
                    <div className="photo-frame photo-frame-ar layout-2col-img">
                      <img className="photo-cover photo-muted" src={svc.image} alt={svc.title} loading="lazy" />
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
        headline="Nuk jeni të sigurt cili shërbim ju përshtatet?"
        text="Na kontaktoni dhe brenda 24 orëve ju dërgojmë një propozim të personalizuar — pa angazhim fillestar."
        buttonLabel="Na kontaktoni"
        note="Përgjigje brenda 24 orësh"
      />

      <Footer />
    </>
  );
}
