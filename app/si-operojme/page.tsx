import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import PageHeader from "@/components/PageHeader";
import ScrollFade from "@/components/ScrollFade";
import { homeProcess } from "@/content/homepage";

export const metadata: Metadata = { title: "Si Operojmë" };

export default function SiOperojmePage() {
  return (
    <>
      <Navbar />
      <PageHeader
        breadcrumbs={[{ label: "Ballina", href: "/" }, { label: "Si Operojmë" }]}
        title="Procesi ynë"
        titleEm="operacional"
        subtitle="I njëjtë ritëm me ballinën: vlerësim, ofertë, implementim, supervizim dhe raportim — me kontroll cilësie, siguri në punë dhe monitorim dixhital që jep transparencë në zyrën qendrore."
      />

      <section className="sec">
        <div className="wrap">
          <div className="sh center">
            <div className="eyebrow">Pesë hapa</div>
            <h2 className="section-title">{homeProcess.title}</h2>
            <p className="section-sub">{homeProcess.subtitle}</p>
          </div>
          <div className="process-strip ops-process-strip">
            {homeProcess.steps.map((step, idx) => (
              <ScrollFade key={step.num} className="ps">
                <div className="ps-num">{step.num}</div>
                <div className="ps-title">{step.title}</div>
                <p className="ps-desc">{step.desc}</p>
                {idx < homeProcess.steps.length - 1 && (
                  <span className="ps-conn" aria-hidden>
                    &#8594;
                  </span>
                )}
              </ScrollFade>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec-subtle">
        <div className="wrap">
          <div className="sh center">
            <div className="eyebrow">Kontroll cilësie</div>
            <h2 className="section-title">Supervizim, lista inspeksioni dhe korrigjim</h2>
            <p className="section-sub">
              Cilësia nuk matet vetëm në takim mujor — ajo verifikohet çdo ditë në terren.
            </p>
          </div>
          <div className="ops-qc-grid">
            <div className="ops-qc-card">
              <h3 className="ops-qc-title">Modeli i supervizimit</h3>
              <p className="ops-qc-text">
                Supervizorët tanë mbajnë përgjegjësi të qartë për zonat dhe turnet; shmangiet trajtohen para se të bëhen kosto ose rrezik reputacioni për ju.
              </p>
            </div>
            <div className="ops-qc-card">
              <h3 className="ops-qc-title">Lista e inspeksionit ditore</h3>
              <p className="ops-qc-text">
                Checklist të dokumentuara për objekt — jo “sy të pastër”, por pika të verifikuara që mbështesin menaxhimin tuaj të rrezikut.
              </p>
            </div>
            <div className="ops-qc-card">
              <h3 className="ops-qc-title">Ankesat dhe kërkesat</h3>
              <p className="ops-qc-text">
                Kanal i qartë eskalimi: regjistrim, përgjigje dhe korrigjim me afat — që ju të dini çfarë ndodhi dhe si u mbyll.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="layout-2col">
            <div className="layout-2col-content">
              <div className="eyebrow">Standardet</div>
              <h2 className="section-title">ISO, siguracion dhe politika barazie</h2>
              <p className="section-sub">
                Çertifikimet (9001, 14001, 45001) mbështeten në auditime të pavarura; dokumentacioni mbetet i disponueshëm për ekipet tuaja të prokurimit dhe përputhjes.
              </p>
              <p className="section-sub" style={{ marginTop: "var(--space-4)", fontSize: "var(--text-sm)" }}>
                <strong>Siguracion &amp; politika:</strong> mbajmë polisë sigurimi për dëme ndaj palëve të treta dhe politika për barazi dhe kundër diskriminimit — në përputhje me pritshmëritë e blerësve korporativë.
              </p>
              <p className="section-sub" style={{ marginTop: "var(--space-3)", fontSize: "var(--text-sm)" }}>
                <strong>Për tenderë:</strong> mund të kërkoni kopje të dëshmive të sistemit të menaxhimit dhe regjistrave të auditimit në fazën e ofertës.
              </p>
              <div className="iso-list">
                {[
                  {
                    code: "ISO 9001",
                    name: "Sistemi i Menaxhimit të Cilësisë",
                    desc: "Procese të përsëritshme dhe përmirësim i matshëm — jo vetëm deklarata.",
                  },
                  {
                    code: "ISO 14001",
                    name: "Menaxhimi mjedisor",
                    desc: "Përzgjedhje materialesh dhe trajtim mbeturinash në përputhje me praktikat e mira.",
                  },
                  {
                    code: "ISO 45001",
                    name: "SHSK në punë",
                    desc: "Trajnime, PPE dhe procedura të dokumentuara për stafin në terren.",
                  },
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
                alt="Standardet ISO dhe dokumentacion"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec-subtle">
        <div className="wrap">
          <div className="layout-2col layout-2col--image-first">
            <div className="photo-frame photo-frame-ar layout-2col-img">
              <img
                className="photo-cover photo-muted--soft"
                src="https://images.pexels.com/photos/5900418/pexels-photo-5900418.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Monitorim dixhital"
                loading="lazy"
              />
            </div>
            <div className="layout-2col-content">
              <div className="eyebrow">Monitorim dixhital</div>
              <h2 className="section-title">Kohë, prani dhe dukshmëri qendrore</h2>
              <p className="section-sub">
                Përveç raporteve të strukturuara, përdorim mjete që japin dukshmëri në zyrën tonë qendrore: gjurmim kohor inteligjent, monitorim i pranisë së stafit dhe (ku aplikohet) lëvizje e mjeteve — që menaxheri i llogarisë të ketë foto të qartë të operacionit, jo vetëm përmbledhje në email.
              </p>
              <div className="layout-grid-2x2 digital-features">
                {[
                  {
                    title: "Gjurmim kohor dhe prani",
                    desc: "Regjistrim i orarit dhe pranisë për turne — për përputhje me planin e objektit.",
                  },
                  {
                    title: "Dukshmëri qendrore",
                    desc: "Koordinim nga zyra: më pak boshllëqe komunikimi midis degëve dhe operacioneve.",
                  },
                  {
                    title: "Dokumentim për SLA",
                    desc: "Ngjarjet dhe ndërhyrjet mbeten të kërkueshme për rishikim dhe auditim të brendshëm.",
                  },
                  {
                    title: "Menaxheri i llogarisë",
                    desc: "Një pikë kontakti operacional — eskalim i qartë kur diçka del nga plani.",
                  },
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

      <section className="sec">
        <div className="wrap">
          <div className="sh center">
            <div className="eyebrow">Siguria &amp; disiplina</div>
            <h2 className="section-title">Protokolle pune, PPE dhe procedura të dokumentuara</h2>
            <p className="section-sub">
              Stafi punon sipas rregullave të objektit dhe të UNI PROJECT: veshje mbrojtëse, paraparje rreziku dhe disiplinë operacionale — veçanërisht në lartësi, kimikate dhe zona me akses të kufizuar.
            </p>
          </div>
          <ul className="ops-safety-list">
            <li>Protokolle sigurie në punë të përditësuara dhe të njohura nga stafi para caktimit.</li>
            <li>PPE dhe mjete sipas vlerësimit të rrezikut — jo “minimumi i përgjithshëm” për çdo objekt.</li>
            <li>Disiplinë operacionale: komunikim me sigurinë e objektit dhe respektim i zonave të ndaluara.</li>
          </ul>
        </div>
      </section>

      <section className="sec sec-subtle">
        <div className="wrap">
          <div className="sh center">
            <div className="eyebrow">Akademia &amp; ekipi</div>
            <h2 className="section-title">Trajnim në Prishtinë që nga 2006 — përsëritur në punë</h2>
            <p className="section-sub">
              Akademia e Trajnimit në Prishtinë u hap më 10 nëntor 2006. Trajnimet nuk mbarojnë në klasë: ato përforcohen në vendin e punës me supervizorë dhe lista ditore — që 270+ profesionistët tanë të punojnë njësoj në degë të ndryshme.
            </p>
          </div>
          <div className="layout-team-3">
            {[
              {
                title: "Akademia dhe module operacionale",
                desc: "Baza në akademi; përshtatje për protokollet e objektit tuaj dhe sektorin (bankë, shëndetësi, etj.).",
                image:
                  "https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&w=600",
              },
              {
                title: "Pajisje dhe metoda",
                desc: "Investim në mjete dhe agjentë që përputhen me ISO dhe me kërkesat e sipërfaqes — nga dysheme deri te fasadat.",
                image:
                  "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600",
              },
              {
                title: "Supervizim dhe përmirësim",
                desc: "Supervizorët verifikojnë SLA dhe u mësojnë ekipit korrigjimet në kohë reale — jo vetëm në raport mujor.",
                image:
                  "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=600",
              },
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
