import localFont from "next/font/local";

// Thmanyah Sans — UI, body, the "none" logo
export const sans = localFont({
  variable: "--font-sans",
  display: "swap",
  fallback: ["system-ui", "Segoe UI", "sans-serif"],
  src: [
    { path: "../assets/fonts/thmanyahsans-Light.woff2", weight: "300", style: "normal" },
    { path: "../assets/fonts/thmanyahsans-Regular.woff2", weight: "400", style: "normal" },
    { path: "../assets/fonts/thmanyahsans-Medium.woff2", weight: "500", style: "normal" },
    { path: "../assets/fonts/thmanyahsans-Bold.woff2", weight: "700", style: "normal" },
  ],
});

// Thmanyah Serif Display — headlines, hero numbers, the logo (Black 900)
export const display = localFont({
  variable: "--font-display",
  display: "swap",
  fallback: ["Georgia", "serif"],
  src: [
    { path: "../assets/fonts/thmanyahserifdisplay-Regular.woff2", weight: "400", style: "normal" },
    { path: "../assets/fonts/thmanyahserifdisplay-Medium.woff2", weight: "500", style: "normal" },
    { path: "../assets/fonts/thmanyahserifdisplay-Black.woff2", weight: "900", style: "normal" },
  ],
});

// Thmanyah Serif Text — long-form reading
export const text = localFont({
  variable: "--font-text",
  display: "swap",
  fallback: ["Georgia", "serif"],
  src: [
    { path: "../assets/fonts/thmanyahseriftext-Regular.woff2", weight: "400", style: "normal" },
  ],
});
