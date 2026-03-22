import Link from "next/link";
import ScrollFade from "@/components/ScrollFade";
import SectorIcon from "@/components/SectorIcon";
import CTABand from "@/components/CTABand";
import {
  homeHero,
  homeAbout,
  homeProofMetrics,
  homeWhy,
  homeSectors,
  homeProcess,
  homeStandards,
  homeServicesIntro,
  homeServiceBlocks,
  homeTrainingBlock,
  homeReferencesPreview,
  homeTestimonialsIntro,
  homeFinalCta,
} from "@/content/homepage";
import { testimonials } from "@/content/testimonials";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckMini() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden className="home-check-ico">
      <path d="M2 8l4.5 4.5L14 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function HomePageView() {
  return (
    <>
      <section className="hero" id="hero" aria-labelledby="hero-heading">
        <div className="wrap hero-inner">
          <div className="hero-content">
            <div className="hero-badge fu">
              <div className="badge-dot" />
              <span>{homeHero.badge}</span>
            </div>
            <h1 id="hero-heading" className="hero-h1 fu fu1">
              {homeHero.titleLines.map((line, i) => (
                <span key={line}>
                  {i > 0 && <br />}
                  {i === homeHero.titleEmphasis ? <em>{line}</em> : line}
                </span>
              ))}
            </h1>
            <p className="hero-p fu fu2">{homeHero.lead}</p>
            <p className="hero-mission fu fu2">{homeHero.missionLine}</p>
            <div className="hero-actions fu fu3">
              <Link href="/kontakt" className="btn btn-blue btn-lg">
                Kërko ofertë <ArrowIcon />
              </Link>
              <Link href="/si-operojme" className="btn btn-outline btn-lg">
                Si operojmë
              </Link>
            </div>
            <p className="hero-proof-line fu fu4">{homeHero.proofLine}</p>
          </div>
          <div className="hero-visual">
            <div className="hero-frame">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Ambiente profesionale të pastra dhe të organizuara"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="home-proof-strip" role="region" aria-label="Tregues kryesorë">
        <div className="wrap">
          <ul className="home-proof-grid">
            {homeProofMetrics.map((m) => (
              <li key={m.label} className="home-proof-item">
                <span className="home-proof-value">{m.value}</span>
                <span className="home-proof-label">{m.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <section className="sec sec-subtle" id="rreth-kompanise" aria-labelledby="about-heading">
        <div className="wrap">
          <div className="layout-2col home-about-grid">
            <div className="layout-2col-content">
              <div className="eyebrow">{homeAbout.eyebrow}</div>
              <h2 id="about-heading" className="section-title">
                {homeAbout.title}
              </h2>
              <div className="home-prose">
                {homeAbout.paragraphs.map((p) => (
                  <p key={p.slice(0, 48)} className="home-about-p">
                    {p}
                  </p>
                ))}
              </div>
              <div className="home-about-actions">
                <Link href="/kontakt" className="btn btn-blue">
                  Flisni me operacionet <ArrowIcon />
                </Link>
                <Link href="/rreth-nesh" className="btn btn-outline">
                  Rreth nesh
                </Link>
                <Link href="/sherbimet" className="btn btn-ghost">
                  Shërbimet
                </Link>
              </div>
            </div>
            <div className="layout-2col-img home-about-visual">
              <div className="photo-frame photo-frame-ar">
                <img
                  className="photo-cover photo-muted"
                  src={homeAbout.imageSrc}
                  alt={homeAbout.imageAlt}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" id="sherbimet" aria-labelledby="services-heading">
        <div className="wrap">
          <div className="sh">
            <div className="eyebrow">{homeServicesIntro.eyebrow}</div>
            <h2 id="services-heading" className="section-title">
              {homeServicesIntro.title}
            </h2>
            <p className="section-sub">{homeServicesIntro.subtitle}</p>
          </div>

          <div className="home-service-stack">
            {homeServiceBlocks.map((block, index) => (
              <ScrollFade key={block.slug} delay={index * 40}>
                <article
                  className={`home-service-block ${index % 2 === 1 ? "home-service-block--reverse" : ""}`}
                  aria-labelledby={`svc-${block.slug}-title`}
                >
                  <div className="home-service-visual">
                    <div className="home-service-num">{block.number}</div>
                    <div className="photo-frame photo-frame-ar home-service-img">
                      <img
                        className="photo-cover photo-muted--soft"
                        src={block.image}
                        alt=""
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="home-service-body">
                    <div className="home-service-icon-wrap" aria-hidden>
                      <SectorIcon type={block.icon} />
                    </div>
                    <h3 id={`svc-${block.slug}-title`} className="home-service-title">
                      {block.title}
                    </h3>
                    <p className="home-service-positioning">{block.positioning}</p>
                    <p className="home-service-desc">{block.body}</p>
                    <ul className="home-cap-list">
                      {block.capabilities.map((c) => (
                        <li key={c} className="home-cap-item">
                          <CheckMini />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="home-service-footer">
                      <div className="tags" aria-label="Etiketa">
                        {block.tags.map((tag) => (
                          <span key={tag} className="tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link href={block.href} className="btn btn-ghost">
                        Detaje &amp; procesi <ArrowIcon />
                      </Link>
                    </div>
                  </div>
                </article>
              </ScrollFade>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec-subtle" id="pse-uni" aria-labelledby="why-heading">
        <div className="wrap">
          <div className="sh center">
            <div className="eyebrow">{homeWhy.eyebrow}</div>
            <h2 id="why-heading" className="section-title">
              {homeWhy.title}
            </h2>
            <p className="section-sub">{homeWhy.subtitle}</p>
          </div>
          <div className="home-why-grid">
            {homeWhy.points.map((pt, i) => (
              <ScrollFade key={pt.title} delay={i * 45}>
                <div className="home-why-card">
                  <div className="home-why-index">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="home-why-title">{pt.title}</h3>
                  <p className="home-why-text">{pt.text}</p>
                </div>
              </ScrollFade>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec-subtle" id="trajnimi-profesional" aria-labelledby="training-heading">
        <div className="wrap">
          <div className="home-training-block">
            <div className="eyebrow">{homeTrainingBlock.eyebrow}</div>
            <h2 id="training-heading" className="section-title">
              {homeTrainingBlock.title}
            </h2>
            <p className="section-sub home-training-text">{homeTrainingBlock.text}</p>
          </div>
        </div>
      </section>

      <section className="sec" id="sektoret" aria-labelledby="sectors-heading">
        <div className="wrap">
          <div className="sh">
            <div className="eyebrow">Sektorët</div>
            <h2 id="sectors-heading" className="section-title">
              Mjedise të ndryshme — i njëjti disiplin operacional
            </h2>
            <p className="section-sub">
              Nuk aplikojmë të njëjtin ‘paketë’ kudo; aplikojmë të njëjtin standard governance dhe raportimi, të përkthyer për kontekstin tuaj.
            </p>
          </div>
          <div className="home-sector-list">
            {homeSectors.map((sec, i) => (
              <ScrollFade key={sec.name} delay={i * 35}>
                <article className="home-sector-row">
                  <div className="home-sector-icon" aria-hidden>
                    <SectorIcon type={sec.icon} />
                  </div>
                  <div className="home-sector-main">
                    <h3 className="home-sector-name">{sec.name}</h3>
                    <p className="home-sector-context">{sec.context}</p>
                  </div>
                </article>
              </ScrollFade>
            ))}
          </div>
          <div className="section-cta-row">
            <Link href="/sektoret" className="btn btn-outline">
              Lexoni më shumë për sektorët <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <section className="sec sec-subtle" id="si-punojme" aria-labelledby="process-heading">
        <div className="wrap">
          <div className="sh center">
            <div className="eyebrow">{homeProcess.eyebrow}</div>
            <h2 id="process-heading" className="section-title">
              {homeProcess.title}
            </h2>
            <p className="section-sub">{homeProcess.subtitle}</p>
          </div>
          <ol className="home-process-list">
            {homeProcess.steps.map((step, i) => (
              <li key={step.num} className="home-process-li">
                <ScrollFade delay={i * 50} className="home-process-fade">
                  <div className="home-process-step">
                    <span className="home-process-num">{step.num}</span>
                    <div className="home-process-content">
                      <h3 className="home-process-title">{step.title}</h3>
                      <p className="home-process-desc">{step.desc}</p>
                    </div>
                  </div>
                </ScrollFade>
              </li>
            ))}
          </ol>
          <div className="section-cta-row">
            <Link href="/si-operojme" className="btn btn-ghost">
              Dokumentacioni i plotë i procesit
            </Link>
          </div>
        </div>
      </section>

      <section className="sec sec-navy" id="standarde" aria-labelledby="standards-heading">
        <div className="wrap">
          <div className="sh center">
            <div className="eyebrow eyebrow-white">{homeStandards.eyebrow}</div>
            <h2 id="standards-heading" className="section-title">
              {homeStandards.title}
            </h2>
            <p className="section-sub">{homeStandards.intro}</p>
          </div>
          <div className="home-standards-grid">
            {homeStandards.columns.map((col) => (
              <div key={col.title} className="home-standards-col">
                <h3 className="home-standards-col-title">{col.title}</h3>
                <ul className="home-standards-ul">
                  {col.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" id="deshmite" aria-labelledby="testimonials-heading">
        <div className="wrap">
          <div className="sh center">
            <div className="eyebrow">{homeTestimonialsIntro.eyebrow}</div>
            <h2 id="testimonials-heading" className="section-title">
              {homeTestimonialsIntro.title}
            </h2>
            <p className="section-sub">{homeTestimonialsIntro.subtitle}</p>
          </div>
          <div className="home-test-grid">
            {testimonials.map((t, i) => (
              <ScrollFade key={t.name + t.role} delay={i * 60}>
                <figure className="test-card home-test-card">
                  <div className="qmark">&ldquo;</div>
                  <blockquote className="test-text">{t.text}</blockquote>
                  <figcaption className="home-test-meta">
                    <div className="home-test-chips">
                      {t.sector && <span className="home-test-chip">{t.sector}</span>}
                      {t.facility && <span className="home-test-chip home-test-chip--muted">{t.facility}</span>}
                    </div>
                    {t.serviceLine && <p className="home-test-service">{t.serviceLine}</p>}
                    <div className="test-meta">
                      <div className="test-name">{t.name}</div>
                      <div className="test-role">{t.role}</div>
                    </div>
                  </figcaption>
                </figure>
              </ScrollFade>
            ))}
          </div>
        </div>
      </section>

      <section
        className="sec sec-subtle home-refs-section"
        id="referencat-preview"
        aria-labelledby="refs-preview-heading"
      >
        <div className="wrap">
          <div className="sh center">
            <div className="eyebrow">Besuar nga organizata të njohura</div>
            <h2 id="refs-preview-heading" className="section-title">
              Partnerë dhe referenca
            </h2>
            <p className="section-sub">
              Një përzgjedhje organizatesh me të cilat kemi bashkëpunuar ose operojmë — pa logot për arsye kontrate; emrat flasin për kontekstin institucional dhe financiar.
            </p>
          </div>
          <ul className="home-refs-strip" role="list">
            {homeReferencesPreview.map((ref) => (
              <li key={ref.name} className="home-refs-item">
                <span className="home-refs-name">{ref.name}</span>
                <span className="home-refs-pill">{ref.category}</span>
              </li>
            ))}
          </ul>
          <div className="section-cta-row">
            <Link href="/projekte" className="btn btn-outline">
              Shiko të gjitha referencat <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <CTABand
        headline={homeFinalCta.headline}
        text={homeFinalCta.text}
        bullets={homeFinalCta.bullets}
        note={homeFinalCta.note}
      />
    </>
  );
}
