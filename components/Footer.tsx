import type { Dict } from "@/lib/content";
import { type Locale, SOCIALS } from "@/lib/site";
import { ArrowUpRight, socialIcon } from "./Icons";

export function Footer({ locale, dict }: { locale: Locale; dict: Dict }) {
  const links: [string, string][] = [
    ["#about", dict.nav.about],
    ["#work", dict.nav.work],
    ["#services", dict.nav.services],
    ["#podcast", dict.nav.podcast],
    ["#faq", dict.nav.faq],
    ["#contact", dict.nav.contact],
  ];
  return (
    <footer className="site-footer">
      <div className="container">
        <h2 className="footer-big">{dict.footer.big}</h2>
        <div className="footer-cols">
          <nav className="footer-nav" aria-label={dict.menuTitle}>
            {links.map(([href, label]) => (
              <a href={href} key={href}>{label}</a>
            ))}
          </nav>
          <div className="footer-side">
            <a className="footer-mail" href={`mailto:${dict.footer.email}`}>{dict.footer.email}</a>
            <div className="socials">
              {SOCIALS.map((s) => {
                const Icon = socialIcon[s.key];
                return (
                  <a className="social" href={s.href} key={s.key} aria-label={s.label} target="_blank" rel="noopener noreferrer">
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="footer-legal">
          <span>{dict.footer.legal}</span>
          <a className="back-top" href="#top">
            <ArrowUpRight style={{ inlineSize: 16, blockSize: 16 }} />
            <span>{dict.footer.backToTop}</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
