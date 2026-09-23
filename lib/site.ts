export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://siddiqmousa.com";

export const locales = ["ar", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "ar";

export const dir = (l: Locale): "rtl" | "ltr" => (l === "ar" ? "rtl" : "ltr");
export const other = (l: Locale): Locale => (l === "ar" ? "en" : "ar");
export const ogLocale = (l: Locale): string => (l === "ar" ? "ar_SA" : "en_US");

export const SOCIALS = [
  { key: "x", label: "X", href: "https://x.com/" },
  { key: "youtube", label: "YouTube", href: "https://youtube.com/" },
  { key: "linkedin", label: "LinkedIn", href: "https://linkedin.com/" },
  { key: "instagram", label: "Instagram", href: "https://instagram.com/" },
] as const;
