import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = { title: "Kontakti" };

export default function KontaktPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        breadcrumbs={[{ label: "Ballina", href: "/" }, { label: "Kontakti" }]}
        title="Na"
        titleEm="kontaktoni"
        subtitle="Kërkoni një ofertë, bëni një pyetje ose caktoni një takim vlerësimi falas. Ju kthehemi brenda 24 orësh."
      />

      <section className="sec">
        <div className="wrap">
          <div className="layout-contact">
            {/* Contact info */}
            <div>
              <div className="eyebrow">Informacione</div>
              <h2 className="section-title" style={{ fontSize: "1.8rem" }}>Informacionet e kontaktit</h2>
              <p className="section-sub" style={{ marginBottom: 36 }}>Jemi të hapur për çdo pyetje. Na kontaktoni nëpërmjet formës, telefonit ose email-it.</p>

              <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 40 }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 16, padding: 20, background: "var(--bg-subtle)", borderRadius: "var(--r)" }}>
                  <div style={{ width: 40, height: 40, background: "var(--blue-lt)", borderRadius: "var(--r-sm)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" width="18" height="18"><path d="M10 1C7.24 1 5 3.24 5 6c0 3.75 5 9 5 9s5-5.25 5-9c0-2.76-2.24-5-5-5z" strokeLinecap="round" /><circle cx="10" cy="6" r="1.8" /></svg>
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-d)", fontWeight: 600, fontSize: ".875rem", color: "var(--text-h)", marginBottom: 3 }}>Adresa</div>
                    <div style={{ fontSize: ".875rem", color: "var(--text-m)" }}>Rr. Ukshin Hoti, Nr. 12<br />10000 Prishtinë, Kosovë</div>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: 16, padding: 20, background: "var(--bg-subtle)", borderRadius: "var(--r)" }}>
                  <div style={{ width: 40, height: 40, background: "var(--blue-lt)", borderRadius: "var(--r-sm)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" width="18" height="18"><path d="M13.42 13.42l2.12 2.12a1 1 0 01.07 1.34C14.5 18.1 13 19 11.5 19 7.36 19 3 14.64 3 10.5c0-1.5.9-3 2.12-4.11a1 1 0 011.34.07l2.12 2.12a1 1 0 010 1.41L7.5 11.07C8.44 12.65 9.35 13.56 10.93 14.5l1.08-1.08a1 1 0 011.41 0z" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-d)", fontWeight: 600, fontSize: ".875rem", color: "var(--text-h)", marginBottom: 3 }}>Telefoni</div>
                    <div style={{ fontSize: ".875rem", color: "var(--text-m)" }}>
                      <a href="tel:+38344123456" style={{ color: "var(--blue)" }}>+383 44 123 456</a><br />
                      <span style={{ fontSize: ".8rem", color: "var(--text-lt)" }}>E Hënë – E Premte, 08:00 – 17:00</span>
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: 16, padding: 20, background: "var(--bg-subtle)", borderRadius: "var(--r)" }}>
                  <div style={{ width: 40, height: 40, background: "var(--blue-lt)", borderRadius: "var(--r-sm)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" width="18" height="18"><path d="M3 4h14a1 1 0 011 1v9a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1zm0 1l7 5 7-5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-d)", fontWeight: 600, fontSize: ".875rem", color: "var(--text-h)", marginBottom: 3 }}>Email</div>
                    <div style={{ fontSize: ".875rem", color: "var(--text-m)" }}>
                      <a href="mailto:info@uniproject-ks.com" style={{ color: "var(--blue)" }}>info@uniproject-ks.com</a><br />
                      <span style={{ fontSize: ".8rem", color: "var(--text-lt)" }}>Përgjigje brenda 24 orësh</span>
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: 16, padding: 20, background: "var(--navy)", borderRadius: "var(--r)" }}>
                  <div style={{ width: 40, height: 40, background: "rgba(255,255,255,.1)", borderRadius: "var(--r-sm)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" width="18" height="18" color="#7EB3F5"><circle cx="10" cy="10" r="7" /><path d="M10 7v4l2 1.5" strokeLinecap="round" /></svg>
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-d)", fontWeight: 600, fontSize: ".875rem", color: "#fff", marginBottom: 3 }}>Emergjencë 24/7</div>
                    <div style={{ fontSize: ".875rem", color: "rgba(255,255,255,.55)" }}>Për situata urgjente, jemi të gatshëm çdo orë.</div>
                    <div style={{ marginTop: 8 }}><a href="tel:+38344123456" style={{ fontFamily: "var(--font-m)", fontSize: ".875rem", color: "#7EB3F5" }}>+383 44 123 456</a></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="kontakt-form-wrap">
              <div style={{ marginBottom: 28 }}>
                <div className="eyebrow">Formulari</div>
                <h3 style={{ fontFamily: "var(--font-d)", fontSize: "1.4rem", fontWeight: 700, color: "var(--text-h)" }}>Kërkoni një ofertë</h3>
                <p style={{ fontSize: ".875rem", color: "var(--text-m)", marginTop: 8 }}>Plotësoni formën dhe në 24 orë ju kthehemi me një propozim të personalizuar.</p>
              </div>
              <div className="contact-form">
                <div className="form-row">
                  <div className="form-group"><label>Emri &amp; Mbiemri*</label><input type="text" placeholder="p.sh. Agron Krasniqi" /></div>
                  <div className="form-group"><label>Kompania*</label><input type="text" placeholder="Emri i kompanisë tuaj" /></div>
                </div>
                <div className="form-row">
                  <div className="form-group"><label>Email*</label><input type="email" placeholder="email@kompania.com" /></div>
                  <div className="form-group"><label>Telefoni</label><input type="tel" placeholder="+383 44 ..." /></div>
                </div>
                <div className="form-group">
                  <label>Lloji i shërbimit*</label>
                  <select defaultValue="">
                    <option value="" disabled>Zgjidhni shërbimin...</option>
                    <option>Pastrim Profesional</option>
                    <option>Menaxhimi i Objekteve</option>
                    <option>Dezinfektim &amp; Sanitizim</option>
                    <option>Gatishmëri / Emergjencë</option>
                    <option>Paketë e plotë</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Lloji i objektit</label>
                  <select defaultValue="">
                    <option value="" disabled>Zgjidhni sektorin...</option>
                    <option>Bankë / Institucion financiar</option>
                    <option>Qendër tregtare</option>
                    <option>Institucion publik</option>
                    <option>Zyrë korporative</option>
                    <option>Industri / Fabrikë</option>
                    <option>Hoteleri</option>
                    <option>Klinikë / Spital</option>
                    <option>Tjetër</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Mesazhi</label>
                  <textarea placeholder="Përshkruani objektin tuaj, sipërfaqen (m²) dhe çfarë shërbimesh kërkoni..." />
                </div>
                <div>
                  <button type="submit" className="btn btn-blue btn-lg" style={{ width: "100%", justifyContent: "center" }}>
                    Dërgoni kërkesën{" "}
                    <svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </button>
                  <p className="form-note" style={{ marginTop: 12, textAlign: "center" }}>
                    &#128274; Të dhënat tuaja janë të sigurta. Nuk i ndajmë me palë të treta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
