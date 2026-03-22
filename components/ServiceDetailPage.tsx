import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import PageHeader from "@/components/PageHeader";
import CheckList from "@/components/CheckList";
import type { ServiceDetail } from "@/content/services";

export default function ServiceDetailPage({ service }: { service: ServiceDetail }) {
  return (
    <>
      <Navbar />
      <PageHeader
        breadcrumbs={[
          { label: "Ballina", href: "/" },
          { label: "Shërbimet", href: "/sherbimet" },
          { label: service.title },
        ]}
        title={service.title}
        titleEm={service.number}
        subtitle={service.subtitle}
      />

      <section className="sec">
        <div className="wrap">
          <div className="layout-2col service-detail-top">
            <div className="layout-2col-content">
              <div className="eyebrow">Çfarë ofrojmë</div>
              <h2 className="section-title">{service.title}</h2>
              <p className="section-sub">{service.description}</p>
              <div className="mt-8">
                <CheckList items={service.checklist} />
              </div>
              <div className="sherbimet-actions">
                <Link href="/kontakt" className="btn btn-blue btn-lg">Kërko ofertë</Link>
                <Link href="/sherbimet" className="btn btn-outline">Shërbimet e tjera</Link>
              </div>
            </div>
            <div className="photo-frame photo-frame-ar layout-2col-img">
              <img className="photo-cover photo-muted" src={service.image} alt={service.title} loading="lazy" />
            </div>
          </div>

          <div className="process-box">
            <div className="sh center">
              <div className="eyebrow">Procesi</div>
              <h2 className="section-title">Si e ekzekutojmë</h2>
            </div>
            <div className="process-step-list">
              {service.process.map((step, i) => (
                <div key={i} className="process-step">
                  <div className="process-step-num">{String(i + 1).padStart(2, "0")}</div>
                  <div>
                    <div className="process-step-title">{step.title}</div>
                    <div className="process-step-desc">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABand
        headline={service.cta.headline}
        text={service.cta.text}
        note="Përgjigje brenda 24 orësh"
      />

      <Footer />
    </>
  );
}
