"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { waLink } from "../lib/links";

const NAV = [
  { href: "#beranda", label: "Beranda" },
  { href: "#katalog", label: "Katalog" },
  { href: "#cara-pesan", label: "Cara Pesan" },
  { href: "#testimoni", label: "Testimoni" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? (doc.scrollTop / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-cream/90 backdrop-blur border-b transition-all duration-200 ${
        scrolled
          ? "border-thread shadow-[0_6px_18px_-10px_rgba(44,44,44,0.2)]"
          : "border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a
          href="#beranda"
          className="flex items-center gap-2"
          aria-label="Kumiko_Shoppu, kembali ke beranda"
        >
          <span
            aria-hidden
            className="group relative grid size-11 shrink-0 place-items-center rounded-2xl border border-rose/50 bg-rose-soft shadow-sm transition duration-200 hover:-rotate-3 hover:shadow-md"
          >
            <span className="absolute inset-1 rounded-xl border border-dashed border-rose-deep/40" />
            <span className="relative z-10 h-10 w-[23px] overflow-hidden">
              <Image
                src="/kumiko-logo-transparan.svg"
                alt=""
                width={58}
                height={40}
                className="absolute top-[-4px] left-[-2px] max-w-none object-contain transition-transform duration-200 group-hover:scale-110"
              />
            </span>
          </span>
          <span className="text-lg font-bold tracking-tight">
            Kumiko<span className="text-rose-deep">_Shoppu</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Navigasi utama">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="header-nav-link rounded-full px-4 py-2 text-sm font-semibold text-ink-soft transition-colors hover:bg-rose-soft/60 hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary hidden px-5 sm:inline-flex"
          >
            Pesan Sekarang
          </a>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-full border border-thread bg-white md:hidden"
            aria-expanded={open}
            aria-label={open ? "Tutup menu" : "Buka menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="18" height="14" viewBox="0 0 18 14" aria-hidden>
              {open ? (
                <path
                  d="M2 2 L16 12 M16 2 L2 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M1 2 H17 M1 7 H17 M1 12 H17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* garis "benang" berjalan menunjukkan posisi scroll */}
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-0.5">
        <div
          className="h-full bg-rose-deep transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {open && (
        <nav
          className="border-t border-thread bg-cream px-4 py-3 md:hidden"
          aria-label="Navigasi seluler"
        >
          <ul className="flex flex-col gap-1">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm font-semibold text-ink-soft hover:bg-rose-soft/60 hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
