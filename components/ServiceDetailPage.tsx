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
        title={`Shërbimi`}
        titleEm={service.number}
        subtitle={service.subtitle}
      >
        <h2
          style={{
            fontFamily: "var(--font-d)",
            fontSize: "2rem",
            fontWeight: 700,
            color: "#fff",
            marginTop: 8,
            letterSpacing: "-.02em",
          }}
        >
          {service.title}
        </h2>
      </PageHeader>

      <section className="sec">
        <div className="wrap">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 72,
              alignItems: "center",
              marginBottom: 96,
            }}
          >
            <div>
              <div className="eyebrow">Çfarë ofrojmë</div>
              <h2 className="section-title">{service.title}</h2>
              <p className="section-sub">{service.description}</p>
              <div style={{ marginTop: 28 }}>
                <CheckList items={service.checklist} />
              </div>
              <div style={{ marginTop: 32, display: "flex", gap: 12 }}>
                <Link href="/kontakt" className="btn btn-blue btn-lg">
                  Kërko ofertë
                </Link>
                <Link href="/sherbimet" className="btn btn-outline">
                  Shërbimet e tjera
                </Link>
              </div>
            </div>
            <div className="photo-frame" style={{ aspectRatio: "4/3" }}>
              <img
                className="photo-cover"
                src={service.image}
                alt={service.title}
                style={{ filter: "brightness(.88) saturate(.85)" }}
              />
            </div>
          </div>

          {/* Process */}
          <div
            style={{
              background: "var(--bg-subtle)",
              borderRadius: "var(--r-lg)",
              padding: 56,
            }}
          >
            <div className="sh center">
              <div className="eyebrow">Procesi</div>
              <h2 className="section-title">Si e ekzekutojmë</h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {service.process.map((step, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: 16,
                    alignItems: "flex-start",
                    padding: 20,
                    background: "#fff",
                    border: "1px solid var(--div)",
                    borderRadius: "var(--r)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-m)",
                      fontSize: "1.1rem",
                      fontWeight: 500,
                      color: "var(--blue)",
                      flexShrink: 0,
                      minWidth: 28,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-d)",
                        fontWeight: 600,
                        fontSize: ".9rem",
                        color: "var(--text-h)",
                        marginBottom: 4,
                      }}
                    >
                      {step.title}
                    </div>
                    <div style={{ fontSize: ".85rem", color: "var(--text-m)" }}>
                      {step.desc}
                    </div>
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
