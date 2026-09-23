import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { sans, display, text } from "../fonts";
import "../globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Interactions } from "@/components/Interactions";
import { getDict } from "@/lib/content";
import { SITE_URL, locales, defaultLocale, dir, other, ogLocale, type Locale } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l = (locales.includes(locale as Locale) ? locale : defaultLocale) as Locale;
  const d = getDict(l);
  const o = other(l);

  return {
    metadataBase: new URL(SITE_URL),
    title: { default: d.meta.title, template: `%s — ${l === "ar" ? "صِدّيق موسى" : "Siddiq Mousa"}` },
    description: d.meta.desc,
    keywords: d.meta.keywords,
    authors: [{ name: "Siddiq Mousa" }],
    creator: "Siddiq Mousa",
    alternates: {
      canonical: `/${l}`,
      languages: { ar: "/ar", en: "/en", "x-default": `/${defaultLocale}` },
    },
    openGraph: {
      type: "website",
      url: `/${l}`,
      siteName: d.meta.title,
      title: d.meta.title,
      description: d.meta.desc,
      locale: ogLocale(l),
      alternateLocale: ogLocale(o),
      images: [{ url: "/og.png", width: 1200, height: 630, alt: d.meta.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: d.meta.title,
      description: d.meta.desc,
      images: ["/og.png"],
    },
  };
}

const themeScript = `(function(){try{var t=localStorage.getItem('sm-theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';}document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`;

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  const l = locale as Locale;
  const d = getDict(l);

  return (
    <html
      lang={l}
      dir={dir(l)}
      className={`${sans.variable} ${display.variable} ${text.variable}`}
      suppressHydrationWarning
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <div className="guides" aria-hidden />
        <Header locale={l} dict={d} />
        {children}
        <Footer locale={l} dict={d} />
        <Interactions ok={d.contact.ok} err={d.contact.err} />
      </body>
    </html>
  );
}
