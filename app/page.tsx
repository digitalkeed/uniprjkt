import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import ScrollFade from "@/components/ScrollFade";
import SectorIcon from "@/components/SectorIcon";
import { serviceSummaries } from "@/content/services";
import { sectors } from "@/content/sectors";
import { testimonials } from "@/content/testimonials";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero" id="hero">
        <div className="wrap hero-inner">
          <div className="hero-content">
            <div className="hero-badge fu">
              <div className="badge-dot" />
              <span>Lider në Kosovë që nga 2001</span>
            </div>
            <h1 className="hero-h1 fu fu1">
              Mjedise të pastra.<br />
              Objekte <em>funksionale.</em><br />
              Shërbim 24/7.
            </h1>
            <p className="hero-p fu fu2">
              UNI PROJECT ofron pastrim profesional, mirëmbajtje teknike dhe facility management
              në të gjithë Kosovën — me standarde ISO, staf të trajnuar dhe raportim dixhital.
            </p>
            <div className="hero-actions fu fu3">
              <Link href="/kontakt" className="btn btn-blue btn-lg">
                Kërko ofertë <ArrowIcon />
              </Link>
              <Link href="/si-operojme" className="btn btn-outline btn-lg">
                Si operojmë
              </Link>
            </div>
            <div className="hero-trust fu fu4">
              <div className="trust-item">
                <svg viewBox="0 0 16 16" fill="none"><path d="M8 1l1.8 3.6 4 .6-2.9 2.8.7 4L8 10l-3.6 2 .7-4L2.2 5.2l4-.6L8 1z" fill="currentColor" /></svg>
                <span>ISO 9001 / 14001 / 45001</span>
              </div>
              <div className="trust-sep" />
              <div className="trust-item">
                <svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.3" /><path d="M8 5v3.5l2.5 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg>
                <span>Disponueshmëri 24/7</span>
              </div>
              <div className="trust-sep" />
              <div className="trust-item">
                <svg viewBox="0 0 16 16" fill="none"><path d="M13 4L6 11 3 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <span>Pa kontratë të detyrueshme</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-frame">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Ambiente profesionale të pastra"
              />
              <div className="stat-card">
                <div className="sc-n">270<span>+</span></div>
                <div className="sc-l">Profesionistë</div>
              </div>
              <div className="stat-card alt">
                <div className="sc-n">24<span>+</span></div>
                <div className="sc-l">Vite Experiëncë</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <div className="statsbar">
        <div className="wrap">
          <div className="statsbar-grid">
            <div className="sbi"><div className="sbn">24<span>+</span></div><div className="sbl">Vite përvoja në treg</div></div>
            <div className="sbi"><div className="sbn">270<span>+</span></div><div className="sbl">Profesionistë të trajnuar</div></div>
            <div className="sbi"><div className="sbn">3</div><div className="sbl">Çertifikime ISO</div></div>
            <div className="sbi"><div className="sbn">24<span>/7</span></div><div className="sbl">Disponueshmëri operative</div></div>
          </div>
        </div>
      </div>

      {/* SERVICES OVERVIEW */}
      <section className="sec">
        <div className="wrap">
          <div className="sh sec-header-row">
            <div>
              <div className="eyebrow">Shërbimet</div>
              <h2 className="section-title">3 shtylla — një partner</h2>
              <p className="section-sub">Pastrim profesional, menaxhim i objekteve dhe gatishmëri 24/7 për çdo nevojë.</p>
            </div>
            <Link href="/sherbimet" className="btn btn-ghost">Shiko të gjitha shërbimet</Link>
          </div>
          <div className="svc-grid">
            {serviceSummaries.map((svc, i) => (
              <ScrollFade key={svc.slug} delay={i * 70}>
                <Link href={svc.href} className="svc-card svc-card-inner">
                  <div className="card-icon">
                    <SectorIcon type={svc.icon} />
                  </div>
                  <div className="svc-title">{svc.title}</div>
                  <p className="svc-desc">{svc.description}</p>
                  <ul className="check-list" style={{ marginTop: 4 }}>
                    {svc.checklist.map((item, j) => (
                      <li key={j} className="check-item">
                        <svg viewBox="0 0 16 16" fill="none"><path d="M2 8l4.5 4.5L14 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="tags">
                    {svc.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                  </div>
                  <div className="svc-link">
                    Më shumë <ArrowIcon />
                  </div>
                </Link>
              </ScrollFade>
            ))}
          </div>
        </div>
      </section>

      {/* WHO TRUSTS US */}
      <section className="sec sec-subtle">
        <div className="wrap">
          <div className="layout-2col">
            <div className="layout-2col-content">
              <div className="eyebrow">I besuar nga industria</div>
              <h2 className="section-title">Banka, qendra tregtare, institucione dhe biznese në Kosovë</h2>
              <p className="section-sub trust-sub">
                Që nga viti 2001, UNI PROJECT është partner i besueshëm i organizatave më të mëdha në vend. Shërbimet tona mbulojnë sektorin bankar, tregtar, publik dhe korporativ.
              </p>
              <div className="layout-grid-2x2 trust-stats">
                <div className="trust-stat-card">
                  <div className="trust-stat-n">24<span>+</span></div>
                  <div className="trust-stat-l">Vite përvoja</div>
                </div>
                <div className="trust-stat-card">
                  <div className="trust-stat-n">270<span>+</span></div>
                  <div className="trust-stat-l">Profesionistë</div>
                </div>
                <div className="trust-stat-card trust-stat-card-navy">
                  <div className="trust-stat-n">ISO</div>
                  <div className="trust-stat-l">9001 / 14001 / 45001</div>
                </div>
                <div className="trust-stat-card">
                  <div className="trust-stat-n">24<span>/7</span></div>
                  <div className="trust-stat-l">Shërbim aktiv</div>
                </div>
              </div>
              <div className="trust-cta">
                <Link href="/sektoret" className="btn btn-blue">
                  Shiko sektoret <ArrowIcon />
                </Link>
              </div>
            </div>
            <div className="layout-2col-img trust-visual">
              <div className="photo-frame trust-photo">
                <img
                  className="photo-cover"
                  src="https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Ekipi profesional i UNI PROJECT"
                  style={{ filter: "brightness(.88) saturate(.85)" }}
                />
              </div>
              <div className="trust-badge">
                <div className="trust-badge-h">ISO</div>
                <div className="trust-badge-l">I ÇERTIFIKUAR</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="sec">
        <div className="wrap">
          <div className="sh center">
            <div className="eyebrow">Si funksionon</div>
            <h2 className="section-title">Porositni shërbimin tuaj në 3 hapa</h2>
            <p className="section-sub">Tre hapa të qarta — nga kërkesa juaj deri te rezultati.</p>
          </div>
          <div className="process-strip">
            <ScrollFade className="ps">
              <div className="ps-num">01</div>
              <div className="ps-title">Zgjidhni shërbimin</div>
              <p className="ps-desc">Na tregoni çfarë ju duhet — pastrim, facility management apo shërbime të specializuara. Ofertë e shpejtë, pa angazhim.</p>
              <span className="ps-conn">&#8594;</span>
            </ScrollFade>
            <ScrollFade className="ps">
              <div className="ps-num">02</div>
              <div className="ps-title">Caktoni takimin</div>
              <p className="ps-desc">Vlerësojmë objektin tuaj dhe ju dërgojmë një ofertë të qartë, pa surpriza të fëhshura.</p>
              <span className="ps-conn">&#8594;</span>
            </ScrollFade>
            <ScrollFade className="ps">
              <div className="ps-num">03</div>
              <div className="ps-title">Ne kujdesemi për gjithçka</div>
              <p className="ps-desc">Ekipi ynë fillon punën me supervizim të vazhdueshëm dhe raportim dixhital në çdo fazë të shërbimit.</p>
            </ScrollFade>
          </div>
          <div style={{ marginTop: 40, textAlign: "center" }}>
            <Link href="/kontakt" className="btn btn-ghost">Kërko ofertë tani</Link>
          </div>
        </div>
      </section>

      {/* SECTORS PREVIEW */}
      <section className="sec sec-subtle">
        <div className="wrap">
          <div className="sh center">
            <div className="eyebrow">Sektorët</div>
            <h2 className="section-title">I besuar në çdo sektor</h2>
          </div>
          <div className="sec-grid-home">
            {sectors.map((sec, i) => (
              <ScrollFade key={sec.name} delay={(i % 4) * 70}>
                <div className="sector-item" style={{ height: "100%" }}>
                  <div className="card-icon">
                    <SectorIcon type={sec.icon} />
                  </div>
                  <div className="si-name">{sec.name}</div>
                  <div className="si-desc">{sec.description}</div>
                </div>
              </ScrollFade>
            ))}
          </div>
          <div style={{ marginTop: 40, textAlign: "center" }}>
            <Link href="/sektoret" className="btn btn-ghost">Shiko të gjithë sektoret</Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="sec">
        <div className="wrap">
          <div className="sh center">
            <div className="eyebrow">Dëshmitë</div>
            <h2 className="section-title">Kënaqësia e klientit është prioriteti ynë</h2>
            <p className="section-sub">Rezultatet tona dhe partnerët tanë flasin vetë.</p>
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
        headline="Zgjidhja për objektin tuaj fillon këtu."
        text="E bëjmë të drejtë herën e parë — pa angazhim, pa surpriza. Na tregoni për objektin dhe ju kontaktojmë brenda 24 orësh."
      />

      <Footer />
    </>
  );
}
