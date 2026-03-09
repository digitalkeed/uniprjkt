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
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20, marginBottom: 80 }}>
            <div style={{ textAlign: "center", padding: 36, background: "var(--bg-subtle)", borderRadius: "var(--r)" }}>
              <div style={{ fontFamily: "var(--font-d)", fontSize: "2.5rem", fontWeight: 800, color: "var(--navy)" }}>24<span style={{ color: "var(--blue)" }}>+</span></div>
              <div style={{ fontSize: ".85rem", color: "var(--text-m)", marginTop: 6 }}>Vite në treg</div>
            </div>
            <div style={{ textAlign: "center", padding: 36, background: "var(--navy)", borderRadius: "var(--r)" }}>
              <div style={{ fontFamily: "var(--font-d)", fontSize: "2.5rem", fontWeight: 800, color: "#fff" }}>270<span style={{ color: "#7EB3F5" }}>+</span></div>
              <div style={{ fontSize: ".85rem", color: "rgba(255,255,255,.5)", marginTop: 6 }}>Profesionistë</div>
            </div>
            <div style={{ textAlign: "center", padding: 36, background: "var(--bg-subtle)", borderRadius: "var(--r)" }}>
              <div style={{ fontFamily: "var(--font-d)", fontSize: "2.5rem", fontWeight: 800, color: "var(--navy)" }}>50<span style={{ color: "var(--blue)" }}>+</span></div>
              <div style={{ fontSize: ".85rem", color: "var(--text-m)", marginTop: 6 }}>Objekte aktive</div>
            </div>
            <div style={{ textAlign: "center", padding: 36, background: "var(--bg-subtle)", borderRadius: "var(--r)" }}>
              <div style={{ fontFamily: "var(--font-d)", fontSize: "2.5rem", fontWeight: 800, color: "var(--navy)" }}>98<span style={{ color: "var(--blue)" }}>%</span></div>
              <div style={{ fontSize: ".85rem", color: "var(--text-m)", marginTop: 6 }}>Shkallë kënaqësie</div>
            </div>
          </div>

          {/* Featured projects */}
          <div className="sh">
            <div className="eyebrow">Projekte të zgjedhura</div>
            <h2 className="section-title">Disa nga projektet tona kryesore</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
            {projects.map((proj, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 48,
                  alignItems: "center",
                  background: "var(--bg-subtle)",
                  borderRadius: "var(--r-lg)",
                  overflow: "hidden",
                }}
              >
                {i % 2 === 0 ? (
                  <>
                    <div style={{ height: 320, overflow: "hidden" }}>
                      <img style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(.87) saturate(.8)" }} src={proj.image} alt={proj.title} />
                    </div>
                    <div style={{ padding: 48 }}>
                      <div className="eyebrow">{proj.sector}</div>
                      <h3 style={{ fontFamily: "var(--font-d)", fontSize: "1.6rem", fontWeight: 700, color: "var(--text-h)", letterSpacing: "-.015em", marginBottom: 14 }}>{proj.title}</h3>
                      <p style={{ fontSize: ".9rem", color: "var(--text-m)", lineHeight: 1.72, marginBottom: 20 }}>{proj.description}</p>
                      <div className="tags">{proj.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
                    </div>
                  </>
                ) : (
                  <>
                    <div style={{ padding: 48 }}>
                      <div className="eyebrow">{proj.sector}</div>
                      <h3 style={{ fontFamily: "var(--font-d)", fontSize: "1.6rem", fontWeight: 700, color: "var(--text-h)", letterSpacing: "-.015em", marginBottom: 14 }}>{proj.title}</h3>
                      <p style={{ fontSize: ".9rem", color: "var(--text-m)", lineHeight: 1.72, marginBottom: 20 }}>{proj.description}</p>
                      <div className="tags">{proj.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
                    </div>
                    <div style={{ height: 320, overflow: "hidden" }}>
                      <img style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(.87) saturate(.8)" }} src={proj.image} alt={proj.title} />
                    </div>
                  </>
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
