import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import PageHeader from "@/components/PageHeader";
import ScrollFade from "@/components/ScrollFade";

export const metadata: Metadata = { title: "Si Operojmë" };

export default function SiOperojmePage() {
  return (
    <>
      <Navbar />
      <PageHeader
        breadcrumbs={[{ label: "Ballina", href: "/" }, { label: "Si Operojmë" }]}
        title="Procesi ynë"
        titleEm="operacional"
        subtitle="Transparencë e plotë në çdo hap — nga kontakti i parë deri te raportimi dixhital dhe rishikimet mujore me menaxherin e llogarisë."
      />

      <section className="sec">
        <div className="wrap">
          <div className="sh center">
            <div className="eyebrow">Procesi i thelluar</div>
            <h2 className="section-title">Nga kërkesa deri te kontrata dhe ekzekutimi</h2>
            <p className="section-sub">
              Këtu e detajojmë çfarë ndodh pas formularit — ndryshe nga përmbledhja tre-hapëshe në ballinë.
            </p>
          </div>
          <div className="process-strip">
            <ScrollFade className="ps">
              <div className="ps-num">01</div>
              <div className="ps-title">Kontakti dhe kërkesa</div>
              <p className="ps-desc">
                Na kontaktoni me telefon ose email. Brenda 24 orëve të punës ju konfirmojmë një takim vlerësimi pa angazhim. Oferta e parë reflekton objektin, jo një shabllon.
              </p>
              <span className="ps-conn" aria-hidden>&#8594;</span>
            </ScrollFade>
            <ScrollFade className="ps">
              <div className="ps-num">02</div>
              <div className="ps-title">Vlerësimi dhe oferta e strukturuar</div>
              <p className="ps-desc">
                Eksperti vlerëson objektin në terren, përcakton SLA-në dhe ekipin. Oferta përmban çmim, orar, materiale dhe frekuencë raportimi — pa kosto të fshehura.
              </p>
              <span className="ps-conn" aria-hidden>&#8594;</span>
            </ScrollFade>
            <ScrollFade className="ps">
              <div className="ps-num">03</div>
              <div className="ps-title">Aktivizimi, supervizim dhe raport</div>
              <p className="ps-desc">
                Pas nënshkrimit, caktohet menaxheri i llogarisë. Ekzekutimi nis sipas planit; raportet dixhitale dhe takimet mujore mbajnë juve në kontroll të plotë.
              </p>
            </ScrollFade>
          </div>
        </div>
      </section>

      <section className="sec sec-subtle">
        <div className="wrap">
          <div className="layout-2col">
            <div className="layout-2col-content">
              <div className="eyebrow">Standardet</div>
              <h2 className="section-title">Operojmë sipas standardeve ndërkombëtare ISO</h2>
              <p className="section-sub">
                Çertifikimet tona (9001, 14001, 45001) mbështeten në auditime të pavarura; dokumentacioni mbetet i disponueshëm për ekipet tuaja të prokurimit dhe përputhjes.
              </p>
              <p className="section-sub" style={{ marginTop: "var(--space-4)", fontSize: "var(--text-sm)" }}>
                <strong>Shënim për blerësit korporativë:</strong> mund të kërkoni kopje të dëshmive të sistemit të menaxhimit dhe regjistrave të auditimit në fazën e tenderit.
              </p>
              <div className="iso-list">
                {[
                  { code: "ISO 9001", name: "Sistemi i Menaxhimit të Cilësisë", desc: "Çdo shërbim dorëzohet sipas standardit të dakordësuar me klientin dhe SLA-së." },
                  { code: "ISO 14001", name: "Menaxhimi mjedisor", desc: "Produktet dhe metodat janë të përshtatura për ndikim minimal mjedisor, në përputhje me kërkesat e BE-së." },
                  { code: "ISO 45001", name: "Shëndeti dhe siguria në punë", desc: "Trajnime të rregullta, veshje mbrojtëse dhe procedura të dokumentuara për stafin në terren." },
                ].map((iso) => (
                  <div key={iso.code} className="iso-list-item">
                    <div className="iso-list-code">{iso.code}</div>
                    <div>
                      <div className="iso-list-name">{iso.name}</div>
                      <div className="iso-list-desc">{iso.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="photo-frame layout-2col-img" style={{ aspectRatio: "3/4" }}>
              <img
                className="photo-cover photo-muted--soft"
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Standardet ISO"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="layout-2col layout-2col--image-first">
            <div className="photo-frame photo-frame-ar layout-2col-img">
              <img
                className="photo-cover photo-muted--soft"
                src="https://images.pexels.com/photos/5900418/pexels-photo-5900418.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Raportim dixhital"
                loading="lazy"
              />
            </div>
            <div className="layout-2col-content">
              <div className="eyebrow">Teknologjia</div>
              <h2 className="section-title">Raportim dixhital në kohë reale</h2>
              <p className="section-sub">
                Klientët tanë kanë akses në platformën tonë dixhitale ku shfaqen shërbimet e kryera, statusi i kontratës dhe raportet e supervizimit — jo vetëm PDF të dërguar me email.
              </p>
              <div className="layout-grid-2x2 digital-features">
                {[
                  { title: "Raporte dixhitale", desc: "Çdo intervenim dokumentohet dhe mbetet i kërkueshëm për auditim." },
                  { title: "Supervizim në terren", desc: "Supervizorët verifikojnë çdo detyrë të planifikuar sipas orarit." },
                  { title: "SLA të matshme", desc: "Afate dhe cilësi të përcaktuara në kontratë — të gjurmueshme në raport." },
                  { title: "Komunikim i drejtpërdrejtë", desc: "Menaxheri i llogarisë mbetet pika juaj e vetme e kontaktit operacional." },
                ].map((item) => (
                  <div key={item.title} className="digital-feature-card">
                    <div className="digital-feature-title">{item.title}</div>
                    <div className="digital-feature-desc">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec-subtle">
        <div className="wrap">
          <div className="sh center">
            <div className="eyebrow">Ekipi ynë</div>
            <h2 className="section-title">270+ profesionistë të trajnuar</h2>
            <p className="section-sub">Çdo punonjës kalon trajnime për protokolle, siguri dhe komunikim me klientin përpara caktimit në objekt.</p>
          </div>
          <div className="layout-team-3">
            {[
              { title: "Trajnim i strukturuar", desc: "Protokolle të qarta për pastrim, siguri në punë dhe sjellje në objektet e klientit.", image: "https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&w=600" },
              { title: "Pajisje profesionale", desc: "Investim i vazhdueshëm në mjete dhe agjentë që përputhen me standardet ISO dhe kërkesat e objektit.", image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600" },
              { title: "Supervizim në terren", desc: "Supervizorët tanë verifikojnë cilësinë dhe përputhjen me SLA në çdo javë operacionale.", image: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=600" },
            ].map((card) => (
              <div key={card.title} className="team-card">
                <div className="team-card-img">
                  <img src={card.image} alt="" loading="lazy" />
                </div>
                <div className="team-card-body">
                  <div className="team-card-title">{card.title}</div>
                  <div className="team-card-desc">{card.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        headline="Gati për të kaluar në operacion të strukturuar?"
        text="Na tregoni për objektin tuaj — brenda 24 orëve të punës ju kthejmë me hapin tjetër dhe një ofertë të lexueshme."
        note="Pa angazhim · Pa kosto fillestare"
      />

      <Footer />
    </>
  );
}
