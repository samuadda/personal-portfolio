import { Play, ArrowUpRight, Star, Quote, makeIcon } from "@/components/Icons";
import { getDict } from "@/lib/content";
import { SITE_URL, SOCIALS, locales, type Locale } from "@/lib/site";

const AV = ["var(--emerald-600)", "var(--gold-600)", "var(--ink-800)", "var(--emerald-700)", "var(--gold-500)", "var(--emerald-500)"];

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const l = (locales.includes(locale as Locale) ? locale : "ar") as Locale;
  const d = getDict(l);
  const ep = d.pod.episodes[0];
  const feat = d.testimonials.items[0];

  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: l === "ar" ? "صِدّيق موسى" : "Siddiq Mousa",
    alternateName: l === "ar" ? "Siddiq Mousa" : "صِدّيق موسى",
    url: `${SITE_URL}/${l}`,
    jobTitle: l === "ar" ? "صانع محتوى تقني وذكاء اصطناعي" : "Tech & AI content creator",
    description: d.meta.desc,
    sameAs: SOCIALS.map((s) => s.href),
    knowsLanguage: ["ar", "en"],
  };

  return (
    <main id="top">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }} />

      {/* ---------------- Hero ---------------- */}
      <section className="hero dots">
        <svg className="swash" viewBox="0 0 600 300" aria-hidden><path d="M20 210 C 120 60, 260 60, 330 150 S 520 250, 580 90" /></svg>
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow chip" data-reveal><span className="dot" />AI · {d.hero.eb[0]} · {d.hero.eb[1]}</span>
            <h1 className="hero-head" data-reveal>
              {d.hero.head} <span className="acc">{d.hero.headAccent}</span> <span className="end">{d.hero.headEnd}</span>
            </h1>
            <p className="hero-sub" data-reveal>{d.hero.sub}</p>
            <div className="hero-cta" data-reveal>
              <a className="btn btn--primary btn--lg" href="#work"><Play className="i" /><span>{d.hero.cta1}</span></a>
              <a className="btn btn--soft btn--lg" href="#about">{d.hero.cta2}</a>
            </div>
            <div className="hero-proof" data-reveal>
              <div className="avatars" aria-hidden>
                {["م", "ع", "ي", "س", "خ"].map((c, i) => <span key={i} style={{ background: AV[i % AV.length] }}>{c}</span>)}
              </div>
              <div className="pmeta">
                <span className="stars" aria-hidden>{[0, 1, 2, 3, 4].map((i) => <Star key={i} />)}</span>
                <span className="ptxt">{d.hero.proof}</span>
              </div>
            </div>
            <div className="hero-stats" data-reveal>
              {d.hero.meta.map((m, i) => <div className="st" key={i}><b>{m.n}</b><span>{m.l}</span></div>)}
            </div>
          </div>

          {/* latest-episode card — the podcast/waveform motif, made functional */}
          <div className="hero-feature" data-reveal>
            <div className="hf-top">
              <span className="hf-eyebrow"><span className="live" />{d.hero.latest}</span>
              <span className="hf-num">#{ep.num}</span>
            </div>
            <h2 className="hf-title">{ep.t}</h2>
            <span className="hf-guest">{ep.g}</span>
            <div className="waveform" data-bars="30" aria-hidden />
            <div className="hf-row">
              <button className="hf-play" type="button" aria-label={d.pod.playLabel}><Play /></button>
              <span className="hf-dur">{ep.d}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Trust ---------------- */}
      <div className="trust">
        <div className="container">
          <p className="lbl">{d.trust.label}</p>
          <div className="trust-track">
            {d.trust.logos.map((t, i) => <span className="trust-item" key={i}>{t}</span>)}
          </div>
        </div>
      </div>

      {/* ---------------- Work ---------------- */}
      <section className="section" id="work">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="eyebrow">{d.work.eb}</span>
            <h2 className="h2">{d.work.title} <span className="soft">{d.work.titleSoft}</span></h2>
          </div>
          <div className="work-grid">
            {d.work.items.map((w, i) => (
              <a className={`tile tile--${w.tone}`} href="#contact" data-reveal key={i}>
                <span className="wm" aria-hidden>{w.num}</span>
                <div className="tile-body">
                  <span className="tcat">{w.cat}</span>
                  <h3>{w.t}</h3>
                  <p>{w.d}</p>
                  <div className="foot">
                    <span className="meta">{w.m}</span>
                    <span className="view">{d.work.view}<ArrowUpRight /></span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- About ---------------- */}
      <section className="section" id="about">
        <div className="container about-grid">
          <div className="about-body" data-reveal>
            <span className="eyebrow">{d.about.eb}</span>
            <h2 className="h2">{d.about.title} <span className="soft">{d.about.titleSoft}</span></h2>
            <p>{d.about.p1}</p>
            <p>{d.about.p2}</p>
            <div className="chip-row">
              {d.about.tags.map((t, i) => <span className="chip" key={i}>{t}</span>)}
            </div>
          </div>
          <div data-reveal data-reveal-order={1}>
            <div className="portrait">
              <span className="mono" aria-hidden>ص</span>
              <span className="cap">SIDDIQ MOUSA · صِدّيق موسى</span>
            </div>
            <div className="timeline">
              <p className="tl-title">{d.about.timelineTitle}</p>
              {d.about.timeline.map((t, i) => (
                <div className="tl-item" key={i}>
                  <div><div className="org">{t.org}</div><div className="rl">{t.role}</div></div>
                  <div className="pd">{t.period}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Channels ---------------- */}
      <section className="section" id="services">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="eyebrow">{d.services.eb}</span>
            <h2 className="h2">{d.services.title} <span className="soft">{d.services.titleSoft}</span></h2>
          </div>
          <div className="channels">
            {d.services.items.map((s, i) => {
              const Icon = makeIcon[s.icon];
              return (
                <a className="channel" href="#contact" data-reveal data-reveal-order={i || undefined} key={i}>
                  <span className="idx">0{i + 1}</span>
                  <span className="ico"><Icon /></span>
                  <span className="cbody">
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </span>
                  <span className="cmeta">
                    <span className="n">{s.meta}</span>
                    <ArrowUpRight />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- Stats ---------------- */}
      <section className="section--tight">
        <div className="container stats-row">
          {d.stats.map((s, i) => (
            <div className="st" data-reveal data-reveal-order={i % 3 || undefined} key={i}><b>{s.n}</b><span>{s.l}</span></div>
          ))}
        </div>
      </section>

      {/* ---------------- Podcast ---------------- */}
      <section className="section" id="podcast">
        <div className="container podcast-inner">
          <div className="podcast-art" data-reveal>
            <span className="wordmark" aria-label="صِدّيق موسى"><span className="s">صِــدّيــق</span><span className="m">مــوســى</span></span>
            <div className="waveform" data-bars="28" aria-hidden />
            <button className="play" type="button" aria-label={d.pod.playLabel}><Play /></button>
          </div>
          <div className="about-body">
            <span className="eyebrow" data-reveal>{d.pod.eb}</span>
            <h2 className="h2" data-reveal>{d.pod.title}</h2>
            <p data-reveal style={{ fontFamily: "var(--font-sans)", color: "var(--text-body)" }}>{d.pod.desc}</p>
            <ul className="episodes" data-reveal>
              {d.pod.episodes.map((e, i) => (
                <li className="episode" key={i}>
                  <span className="ep-num">{e.num}</span>
                  <div className="ep-body"><h4>{e.t}</h4><span>{e.g}</span></div>
                  <span className="ep-dur">{e.d}</span>
                </li>
              ))}
            </ul>
            <div data-reveal><a className="btn btn--primary" href="#"><span>{d.pod.listen}</span></a></div>
          </div>
        </div>
      </section>

      {/* ---------------- Testimonials (featured quote) ---------------- */}
      <section className="section" id="words">
        <div className="container">
          <div className="quote-feature" data-reveal>
            <Quote className="qmark" />
            <blockquote>{feat.quote}</blockquote>
            <div className="qby">
              <span className="nm">{feat.name}</span>
              <span className="rl">{feat.role}</span>
            </div>
            <div className="quote-avatars">
              <div className="row" aria-hidden>
                {d.testimonials.items.map((t, i) => (
                  <span key={i} style={{ background: AV[i % AV.length] }}>{t.name.trim().charAt(0)}</span>
                ))}
              </div>
              <span className="txt">{d.testimonials.proof}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Newsletter CTA ---------------- */}
      <section className="section" id="contact">
        <div className="container">
          <div className="cta-band" data-reveal>
            <div className="dots-fill" aria-hidden />
            <div className="cta-inner">
              <span className="kick">{d.cta.kicker}</span>
              <h2>{d.cta.title} <span className="soft">{d.cta.titleSoft}</span></h2>
              <form className="news" id="newsletter" noValidate>
                <input id="email" type="email" required placeholder={d.contact.ph} autoComplete="email" aria-label={d.contact.nl} />
                <button className="btn btn--light" type="submit">{d.contact.sub}</button>
              </form>
              <span className="news-note" id="formNote" role="status" aria-live="polite" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
