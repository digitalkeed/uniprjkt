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
        subtitle="Transparencë e plotë në çdo hap — nga kontakti i parë deri te raportimi dixhital për çdo shërbim të kryer."
      />

      {/* Process strip */}
      <section className="sec">
        <div className="wrap">
          <div className="sh center">
            <div className="eyebrow">Procesi</div>
            <h2 className="section-title">Nga kërkesa deri tek rezultati</h2>
            <p className="section-sub">Tre hapa të qarta — transparencë totale, pa surpriza të fëhshura.</p>
          </div>
          <div className="process-strip">
            <ScrollFade className="ps">
              <div className="ps-num">01</div>
              <div className="ps-title">Kontakti dhe kërkesa</div>
              <p className="ps-desc">Na kontaktoni me telefon ose email. Në 24 orë ju konfirmojmë një takim vlerësimi pa angazhim dhe pa kosto. Oferta e shpejtë — saktë sipas objektit tuaj.</p>
              <span className="ps-conn">&#8594;</span>
            </ScrollFade>
            <ScrollFade className="ps">
              <div className="ps-num">02</div>
              <div className="ps-title">Vlerësimi dhe oferta</div>
              <p className="ps-desc">Eksperti ynë vlerëson objektin fizikisht dhe harton një plan shërbimi të personalizuar. Oferta është e detajuar, me çmim fiks — pa kosto të fëhshura.</p>
              <span className="ps-conn">&#8594;</span>
            </ScrollFade>
            <ScrollFade className="ps">
              <div className="ps-num">03</div>
              <div className="ps-title">Ekzekutimi dhe raportimi</div>
              <p className="ps-desc">Ekipi ynë fillon punën sipas planit të dakordësuar. Supervizim i vazhdueshëm dhe raportim dixhital në kohe reale për çdo shërbim të kryer.</p>
            </ScrollFade>
          </div>
        </div>
      </section>

      {/* ISO Standards */}
      <section className="sec sec-subtle">
        <div className="wrap">
          <div className="layout-2col">
            <div className="layout-2col-content">
              <div className="eyebrow">Standardet</div>
              <h2 className="section-title">Operojmë sipas standardeve ndërkombëtare ISO</h2>
              <p className="section-sub">Të gjitha shërbimet tona ekzekutohen në përputhje me tre çertifikimet kryesore ISO, të audituara rregullisht nga organizma të pavarura.</p>
              <div className="iso-list">
                {[
                  { code: "ISO 9001", name: "Sistemi i Menaxhimit të Cilësisë", desc: "Garantojmë që çdo shërbim dorëzohet sipas standardit të dakordësuar me klientin." },
                  { code: "ISO 14001", name: "Menaxhimi Mjedisor", desc: "Produktet dhe metodat tona janë të sigurta për mjedisin, në përputhje me rregulloret e BE-së." },
                  { code: "ISO 45001", name: "Shëndeti & Siguria në Punë", desc: "Siguria e stafit tonë është prioritet. Trajnime të rregullta dhe pajisje mbrojtëse për çdo punëtor." },
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
              <img className="photo-cover" src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=900" alt="Standardet ISO" style={{ filter: "brightness(.88) saturate(.8)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Digital Reporting */}
      <section className="sec">
        <div className="wrap">
          <div className="layout-2col layout-2col--image-first">
            <div className="photo-frame layout-2col-img" style={{ aspectRatio: "4/3" }}>
              <img className="photo-cover" src="https://images.pexels.com/photos/5900418/pexels-photo-5900418.jpeg?auto=compress&cs=tinysrgb&w=900" alt="Raportim dixhital" style={{ filter: "brightness(.88) saturate(.8)" }} />
            </div>
            <div className="layout-2col-content">
              <div className="eyebrow">Teknologjia</div>
              <h2 className="section-title">Raportim dixhital në kohë reale</h2>
              <p className="section-sub">Klientet tanë kanë akses në platformatën tonë dixhitale ku mund të shohin çdo shërbim të kryer, çdo raport dhe statusin aktual të kontratës.</p>
              <div className="layout-grid-2x2 digital-features">
                {[
                  { title: "Raporte dixhitale", desc: "Çdo shërbim dokumentohet dhe arshivohet automatikisht." },
                  { title: "Supervizim në terren", desc: "Supervizorët tanë kontrollojnë çdo taskim në kohe reale." },
                  { title: "SLA të matshme", desc: "Garantojmë respektimin e afateve dhe standardeve të cilësisë." },
                  { title: "Komunikim i hapët", desc: "Menaxheri juaj i llogarisë është gjithmonë i disponueshëm." },
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

      {/* Team */}
      <section className="sec sec-subtle">
        <div className="wrap">
          <div className="sh center">
            <div className="eyebrow">Ekipi ynë</div>
            <h2 className="section-title">270+ Profesionistë të trajnuar</h2>
            <p className="section-sub">Çdo punëtor i UNI PROJECT kalon nëpërmjet një programi të plotë trajnimi përpara se të nisë punën.</p>
          </div>
          <div className="layout-team-3">
            {[
              { title: "Trajnim i përgjithshëm", desc: "Çdo punëtor trajnohet mbi protokollet e pastrimit, sigurisë dhe komunikimit me klientin.", image: "https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&w=600" },
              { title: "Pajisje profesionale", desc: "Investojmë në teknologjitë më të reja të pastrimit — efikase, të sigurta dhe miqësore me mjedisin.", image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600" },
              { title: "Supervizim i vazhdueshëm", desc: "Supervizorët tanë janë prezentë në terren çdo ditë për të siguruar standardet më të larta.", image: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=600" },
            ].map((card) => (
              <div key={card.title} className="team-card">
                <div className="team-card-img">
                  <img src={card.image} alt={card.title} />
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
        headline="Gati për të filluar?"
        text="Na tregoni për objektin tuaj dhe në 24 orë ju kthehemi me një ofertë të detajuar."
        note="Pa angazhim · Pa kosto"
      />

      <Footer />
    </>
  );
}
