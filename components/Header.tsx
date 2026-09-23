import type { Dict } from "@/lib/content";
import { type Locale, other } from "@/lib/site";
import { Globe, Sun, Moon, Menu, Close } from "./Icons";

export function Header({ locale, dict }: { locale: Locale; dict: Dict }) {
  const o = other(locale);
  const themeLabel = locale === "ar" ? "تبديل السمة" : "Toggle theme";
  const langLabel = locale === "ar" ? "Switch to English" : "التبديل إلى العربية";

  const links: [string, string][] = [
    ["#work", dict.nav.work],
    ["#about", dict.nav.about],
    ["#services", dict.nav.services],
    ["#podcast", dict.nav.podcast],
    ["#words", dict.nav.words],
  ];

  return (
    <header className="site-header">
      <div className="hdr">
        <a className="hdr-brand" href="#top" aria-label="صِدّيق موسى">
          <span className="mark" aria-hidden>
            <span className="l1">صِــدّيــق</span>
            <span className="l2">مــوســى</span>
          </span>
        </a>

        <nav className="hdr-nav" id="hdrNav" aria-label={dict.menuTitle}>
          {links.map(([href, label]) => (
            <a className="hdr-link" href={href} key={href} data-menu-link>{label}</a>
          ))}
          <a className="hdr-link hdr-link--cta" href="#contact" data-menu-link>{dict.nav.contact}</a>
        </nav>

        <div className="hdr-ctl">
          <button id="themeToggle" className="fab theme-fab" type="button" aria-label={themeLabel}>
            <Sun className="i sun" />
            <Moon className="i moon" />
          </button>
          <a className="fab lang-fab" href={`/${o}`} hrefLang={o} aria-label={langLabel}>
            <Globe className="globe" />
            <span>{dict.otherLangName}</span>
          </a>
          <button id="menuBtn" className="fab hdr-burger" type="button" aria-label={dict.menu} aria-expanded={false} aria-controls="hdrNav">
            <Menu className="i menu-open" />
            <Close className="i menu-shut" />
          </button>
        </div>
      </div>
    </header>
  );
}
