import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale } from "@/lib/site";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const hasLocale = locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
  if (hasLocale) return;

  // Pick a locale from Accept-Language, defaulting to Arabic-first.
  const al = (req.headers.get("accept-language") || "").toLowerCase();
  const preferred = al.startsWith("en") ? "en" : defaultLocale;

  const url = req.nextUrl.clone();
  url.pathname = `/${preferred}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next internals, and any path with a file extension (static assets).
  matcher: ["/((?!_next|.*\\..*).*)"],
};
