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
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
            <div>
              <div className="eyebrow">Standardet</div>
              <h2 className="section-title">Operojmë sipas standardeve ndërkombëtare ISO</h2>
              <p className="section-sub">Të gjitha shërbimet tona ekzekutohen në përputhje me tre çertifikimet kryesore ISO, të audituara rregullisht nga organizma të pavarura.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 20, marginTop: 36 }}>
                {[
                  { code: "ISO 9001", name: "Sistemi i Menaxhimit të Cilësisë", desc: "Garantojmë që çdo shërbim dorëzohet sipas standardit të dakordësuar me klientin." },
                  { code: "ISO 14001", name: "Menaxhimi Mjedisor", desc: "Produktet dhe metodat tona janë të sigurta për mjedisin, në përputhje me rregulloret e BE-së." },
                  { code: "ISO 45001", name: "Shëndeti & Siguria në Punë", desc: "Siguria e stafit tonë është prioritet. Trajnime të rregullta dhe pajisje mbrojtëse për çdo punëtor." },
                ].map((iso) => (
                  <div key={iso.code} style={{ display: "flex", alignItems: "flex-start", gap: 16, padding: 20, background: "#fff", border: "1px solid var(--div)", borderRadius: "var(--r)" }}>
                    <div style={{ fontFamily: "var(--font-m)", fontSize: "1rem", fontWeight: 500, color: "var(--blue)", minWidth: 90 }}>{iso.code}</div>
                    <div>
                      <div style={{ fontFamily: "var(--font-d)", fontWeight: 600, fontSize: ".9rem", color: "var(--text-h)", marginBottom: 4 }}>{iso.name}</div>
                      <div style={{ fontSize: ".85rem", color: "var(--text-m)" }}>{iso.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="photo-frame" style={{ aspectRatio: "3/4" }}>
              <img className="photo-cover" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80" alt="Standardet ISO" style={{ filter: "brightness(.88) saturate(.8)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Digital Reporting */}
      <section className="sec">
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
            <div className="photo-frame" style={{ aspectRatio: "4/3" }}>
              <img className="photo-cover" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&auto=format&fit=crop&q=80" alt="Raportim dixhital" style={{ filter: "brightness(.88) saturate(.8)" }} />
            </div>
            <div>
              <div className="eyebrow">Teknologjia</div>
              <h2 className="section-title">Raportim dixhital në kohë reale</h2>
              <p className="section-sub">Klientet tanë kanë akses në platformatën tonë dixhitale ku mund të shohin çdo shërbim të kryer, çdo raport dhe statusin aktual të kontratës.</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 36 }}>
                {[
                  { title: "Raporte dixhitale", desc: "Çdo shërbim dokumentohet dhe arshivohet automatikisht." },
                  { title: "Supervizim në terren", desc: "Supervizorët tanë kontrollojnë çdo taskim në kohe reale." },
                  { title: "SLA të matshme", desc: "Garantojmë respektimin e afateve dhe standardeve të cilësisë." },
                  { title: "Komunikim i hapët", desc: "Menaxheri juaj i llogarisë është gjithmonë i disponueshëm." },
                ].map((item) => (
                  <div key={item.title} style={{ padding: 20, background: "var(--bg-subtle)", borderRadius: "var(--r)" }}>
                    <div style={{ fontFamily: "var(--font-d)", fontWeight: 700, color: "var(--text-h)", marginBottom: 6 }}>{item.title}</div>
                    <div style={{ fontSize: ".85rem", color: "var(--text-m)" }}>{item.desc}</div>
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
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
            {[
              { title: "Trajnim i përgjithshëm", desc: "Çdo punëtor trajnohet mbi protokollet e pastrimit, sigurisë dhe komunikimit me klientin.", image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&auto=format&fit=crop&q=80" },
              { title: "Pajisje profesionale", desc: "Investojmë në teknologjitë më të reja të pastrimit — efikase, të sigurta dhe miqësore me mjedisin.", image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&auto=format&fit=crop&q=80" },
              { title: "Supervizim i vazhdueshëm", desc: "Supervizorët tanë janë prezentë në terren çdo ditë për të siguruar standardet më të larta.", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop&q=80" },
            ].map((card) => (
              <div key={card.title} style={{ background: "#fff", border: "1px solid var(--div)", borderRadius: "var(--r)", overflow: "hidden", boxShadow: "var(--sh-sm)" }}>
                <div style={{ height: 200, overflow: "hidden" }}>
                  <img style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(.88) saturate(.8)" }} src={card.image} alt={card.title} />
                </div>
                <div style={{ padding: 24 }}>
                  <div style={{ fontFamily: "var(--font-d)", fontWeight: 700, color: "var(--text-h)", marginBottom: 8 }}>{card.title}</div>
                  <div style={{ fontSize: ".875rem", color: "var(--text-m)" }}>{card.desc}</div>
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
