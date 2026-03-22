import type { Metadata } from "next";
import Link from "next/link";
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
        subtitle="Kërkoni një ofertë, bëni një pyetje ose caktoni një takim vlerësimi falas. Ju kthehemi brenda 24 orëve me një përgjigje të strukturuar."
      />

      <section className="sec">
        <div className="wrap">
          <div className="layout-contact">
            <div>
              <div className="eyebrow">Informacione</div>
              <h2 className="section-title kontakt-info-title">Informacionet e kontaktit</h2>
              <p className="section-sub kontakt-lead">
                Jemi të hapur për çdo pyetje. Pas dërgimit të formës, një përgjegjës llogarie ju kontakton me email ose telefon për të konfirmuar detajet.
              </p>

              <div className="contact-card-stack">
                <div className="contact-card">
                  <div className="contact-icon-wrap" aria-hidden>
                    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" width="18" height="18"><path d="M10 1C7.24 1 5 3.24 5 6c0 3.75 5 9 5 9s5-5.25 5-9c0-2.76-2.24-5-5-5z" strokeLinecap="round" /><circle cx="10" cy="6" r="1.8" /></svg>
                  </div>
                  <div>
                    <div className="contact-card-title">Adresa</div>
                    <div className="contact-card-body">Rr. Ukshin Hoti, Nr. 12<br />10000 Prishtinë, Kosovë</div>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="contact-icon-wrap" aria-hidden>
                    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" width="18" height="18"><path d="M13.42 13.42l2.12 2.12a1 1 0 01.07 1.34C14.5 18.1 13 19 11.5 19 7.36 19 3 14.64 3 10.5c0-1.5.9-3 2.12-4.11a1 1 0 011.34.07l2.12 2.12a1 1 0 010 1.41L7.5 11.07C8.44 12.65 9.35 13.56 10.93 14.5l1.08-1.08a1 1 0 011.41 0z" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                  <div>
                    <div className="contact-card-title">Telefoni</div>
                    <div className="contact-card-body">
                      <a href="tel:+38344123456" className="contact-link">+383 44 123 456</a><br />
                      <span className="contact-link-muted">E Hënë – E Premte, 08:00 – 17:00</span>
                    </div>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="contact-icon-wrap" aria-hidden>
                    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" width="18" height="18"><path d="M3 4h14a1 1 0 011 1v9a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1zm0 1l7 5 7-5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                  <div>
                    <div className="contact-card-title">Email</div>
                    <div className="contact-card-body">
                      <a href="mailto:info@uniproject-ks.com" className="contact-link">info@uniproject-ks.com</a><br />
                      <span className="contact-link-muted">Përgjigje brenda 24 orëve</span>
                    </div>
                  </div>
                </div>

                <div className="contact-card contact-card--emergency">
                  <div className="contact-icon-wrap" aria-hidden>
                    <svg viewBox="0 0 20 20" fill="none" stroke="var(--accent-light)" strokeWidth="1.5" width="18" height="18"><circle cx="10" cy="10" r="7" /><path d="M10 7v4l2 1.5" strokeLinecap="round" /></svg>
                  </div>
                  <div>
                    <div className="contact-card-title">Emergjencë 24/7</div>
                    <div className="contact-card-body">Për situata urgjente, jemi të gatshëm çdo orë.</div>
                    <div className="mt-4">
                      <a href="tel:+38344123456" className="contact-emergency-link">+383 44 123 456</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="kontakt-form-wrap">
              <div className="kontakt-form-header">
                <div className="eyebrow">Formulari</div>
                <h3>Kërkoni një ofertë</h3>
                <p>Plotësoni fushat e shënuara me *. Pas dërgimit, ju kontaktojmë brenda 24 orëve të punës.</p>
              </div>
              <form className="contact-form" action="#" method="post" noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="k-name">Emri &amp; Mbiemri <span className="req" aria-hidden>*</span></label>
                    <input id="k-name" name="name" type="text" autoComplete="name" placeholder="p.sh. Agron Krasniqi" required aria-required="true" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="k-company">Kompania <span className="req" aria-hidden>*</span></label>
                    <input id="k-company" name="company" type="text" autoComplete="organization" placeholder="Emri i kompanisë suaj" required aria-required="true" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="k-email">Email <span className="req" aria-hidden>*</span></label>
                    <input id="k-email" name="email" type="email" autoComplete="email" placeholder="email@kompania.com" required aria-required="true" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="k-phone">Telefoni</label>
                    <input id="k-phone" name="phone" type="tel" autoComplete="tel" placeholder="+383 44 …" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="k-service">Lloji i shërbimit <span className="req" aria-hidden>*</span></label>
                  <select id="k-service" name="service" defaultValue="" required aria-required="true">
                    <option value="" disabled>Zgjidhni shërbimin…</option>
                    <option>Pastrim Profesional</option>
                    <option>Menaxhimi i Objekteve</option>
                    <option>Dezinfektim &amp; Sanitizim</option>
                    <option>Gatishmëri / Emergjencë</option>
                    <option>Paketë e plotë</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="k-sector">Lloji i objektit</label>
                  <select id="k-sector" name="sector" defaultValue="">
                    <option value="" disabled>Zgjidhni sektorin…</option>
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
                  <label htmlFor="k-msg">Mesazhi</label>
                  <textarea id="k-msg" name="message" placeholder="Përshkruani objektin tuaj, sipërfaqen (m²) dhe çfarë shërbimesh kërkoni…" rows={5} />
                </div>
                <div>
                  <button type="submit" className="btn btn-blue btn-lg btn-block">
                    Dërgoni kërkesën{" "}
                    <svg viewBox="0 0 16 16" fill="none" aria-hidden><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </button>
                  <p className="kontakt-note">
                    Të dhënat përpunohen sipas{" "}
                    <Link href="/politika-privatisesi">Politikës së Privatësisë</Link>.
                    Nuk i shesim palëve të treta.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
