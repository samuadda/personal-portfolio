"use client";

import { useEffect } from "react";

const THEME_KEY = "sm-theme";

export function Interactions({ ok, err }: { ok: string; err: string }) {
  useEffect(() => {
    const $ = <T extends Element = Element>(s: string) => document.querySelector<T>(s);
    const $$ = <T extends Element = Element>(s: string) => Array.from(document.querySelectorAll<T>(s));
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups: Array<() => void> = [];

    /* ---- waveform bars ---- */
    $$<HTMLElement>(".waveform").forEach((wf) => {
      if (wf.childElementCount) return;
      const n = parseInt(wf.dataset.bars || "28", 10);
      const frag = document.createDocumentFragment();
      for (let i = 0; i < n; i++) {
        const s = document.createElement("span");
        s.style.height = 8 + Math.round((Math.sin(i * 1.7) * 0.5 + 0.5) * 24) + "px";
        s.style.animationDelay = ((i * 55) % 900) + "ms";
        s.style.animationDuration = 1100 + (i % 5) * 130 + "ms";
        frag.appendChild(s);
      }
      wf.appendChild(frag);
    });

    /* ---- reveal on scroll ---- */
    const items = $$<HTMLElement>("[data-reveal]");
    items.forEach((el) => { const o = el.dataset.revealOrder; if (o) el.classList.add("d" + o); });
    if (reduced || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("in"));
    } else {
      const io = new IntersectionObserver(
        (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
      );
      items.forEach((el) => io.observe(el));
      cleanups.push(() => io.disconnect());
    }

    /* ---- theme toggle ---- */
    const themeBtn = $<HTMLButtonElement>("#themeToggle");
    const onTheme = () => {
      const cur = document.documentElement.getAttribute("data-theme") || "light";
      const next = cur === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem(THEME_KEY, next); } catch {}
    };
    themeBtn?.addEventListener("click", onTheme);
    cleanups.push(() => themeBtn?.removeEventListener("click", onTheme));

    /* ---- header nav drawer (mobile) ---- */
    const menuBtn = $<HTMLButtonElement>("#menuBtn");
    const nav = $<HTMLElement>("#hdrNav");
    const setMenu = (open: boolean) => {
      nav?.classList.toggle("open", open);
      menuBtn?.setAttribute("aria-expanded", String(open));
    };
    const toggleMenu = () => setMenu(!nav?.classList.contains("open"));
    const closeMenu = () => setMenu(false);
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeMenu(); };
    menuBtn?.addEventListener("click", toggleMenu);
    $$("[data-menu-link]").forEach((a) => a.addEventListener("click", closeMenu));
    document.addEventListener("keydown", onKey);
    cleanups.push(() => {
      menuBtn?.removeEventListener("click", toggleMenu);
      $$("[data-menu-link]").forEach((a) => a.removeEventListener("click", closeMenu));
      document.removeEventListener("keydown", onKey);
    });

    /* ---- newsletter ---- */
    const form = $<HTMLFormElement>("#newsletter");
    const onSubmit = (e: Event) => {
      e.preventDefault();
      const input = form?.querySelector<HTMLInputElement>("#email");
      const note = $<HTMLElement>("#formNote");
      if (!input || !note) return;
      const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim());
      note.textContent = valid ? ok : err;
      note.style.color = valid ? "var(--emerald-200)" : "var(--gold-300)";
      if (valid) input.value = "";
    };
    form?.addEventListener("submit", onSubmit);
    cleanups.push(() => form?.removeEventListener("submit", onSubmit));

    return () => cleanups.forEach((fn) => fn());
  }, [ok, err]);

  return null;
}
