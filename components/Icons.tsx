import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;
const base = { fill: "none", stroke: "currentColor", strokeWidth: 1.75, "aria-hidden": true } as const;

export const Play = (p: P) => (
  <svg viewBox="0 0 24 24" aria-hidden {...p}><path d="M8 5v14l11-7z" fill="currentColor" /></svg>
);
export const Arrow = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const Globe = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.6 2.5 15.4 0 18M12 3c-2.5 2.6-2.5 15.4 0 18" /></svg>
);
export const Menu = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M3 6h18M3 12h18M3 18h18" /></svg>
);
export const Sun = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19" /></svg>
);
export const Moon = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.5 6.5 0 0 0 9.8 9.8z" /></svg>
);
export const Video = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><rect x="2" y="4" width="20" height="16" rx="3" /><path d="M10 9l5 3-5 3z" fill="currentColor" stroke="none" /></svg>
);
export const Mic = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M6 11a6 6 0 0 0 12 0M12 17v4" /></svg>
);
export const Pen = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M4 20h16M6 16l9-9 3 3-9 9H6z" /></svg>
);

export const makeIcon = { video: Video, mic: Mic, pen: Pen } as const;

export const Close = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M6 6l12 12M18 6L6 18" /></svg>
);
export const ArrowUpRight = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M7 17L17 7M8 7h9v9" /></svg>
);
export const Quote = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}><path d="M10 7H5.5A2.5 2.5 0 0 0 3 9.5V13a2 2 0 0 0 2 2h2v-2H5V9.5a.5.5 0 0 1 .5-.5H10V7zm11 0h-4.5A2.5 2.5 0 0 0 14 9.5V13a2 2 0 0 0 2 2h2v-2h-2V9.5a.5.5 0 0 1 .5-.5H21V7z" /></svg>
);
export const Plus = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M12 5v14M5 12h14" /></svg>
);
export const Star = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}><path d="M12 2l2.9 6.3 6.6.7-4.9 4.5 1.3 6.5L12 17.8 6.1 20.5l1.3-6.5L2.5 9l6.6-.7L12 2z" /></svg>
);

/* --- Social brand glyphs --- */
export const XLogo = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}><path d="M17.5 3h3l-7 8 8.2 10h-6.4l-5-6.1L8 21H5l7.4-8.5L4.5 3H11l4.5 5.6L17.5 3zm-1.1 16h1.7L8.1 4.8H6.3l10.1 14.2z" /></svg>
);
export const YouTube = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}><path d="M23 12s0-3.2-.4-4.7a2.5 2.5 0 0 0-1.8-1.8C19.3 5 12 5 12 5s-7.3 0-8.8.5A2.5 2.5 0 0 0 1.4 7.3C1 8.8 1 12 1 12s0 3.2.4 4.7a2.5 2.5 0 0 0 1.8 1.8C4.7 19 12 19 12 19s7.3 0 8.8-.5a2.5 2.5 0 0 0 1.8-1.8C23 15.2 23 12 23 12zM9.8 15.3V8.7l5.7 3.3-5.7 3.3z" /></svg>
);
export const LinkedIn = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}><path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM.5 8h4V24h-4V8zm7 0h3.8v2.2h.1c.5-1 1.8-2.2 3.8-2.2 4 0 4.8 2.6 4.8 6.1V24h-4v-7c0-1.7 0-3.8-2.3-3.8s-2.7 1.8-2.7 3.7V24h-4V8z" /></svg>
);
export const Instagram = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
);
export const socialIcon = { x: XLogo, youtube: YouTube, linkedin: LinkedIn, instagram: Instagram } as const;
