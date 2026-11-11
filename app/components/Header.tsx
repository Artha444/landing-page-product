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

function BrandMark({ desktop = false }: { desktop?: boolean }) {
  return (
    <a
      href="#beranda"
      aria-label="Kumiko_Shoppu, kembali ke beranda"
      className={`group flex items-center ${
        desktop ? "flex-col gap-1.5" : "gap-2"
      }`}
    >
      <span
        aria-hidden
        className={`relative grid shrink-0 place-items-center border border-rose/50 bg-rose-soft shadow-[0_3px_10px_-5px_rgba(192,96,102,0.65)] transition duration-200 group-hover:-rotate-3 group-hover:shadow-md ${
          desktop ? "size-12 rounded-[1.15rem]" : "size-11 rounded-2xl"
        }`}
      >
        <span
          className="absolute inset-1 rounded-xl border border-dashed border-rose-deep/40"
        />
        <span
          className={`relative z-10 overflow-hidden ${
            desktop ? "h-12 w-7" : "h-10 w-[23px]"
          }`}
        >
          <Image
            src="/kumiko-logo-transparan.svg"
            alt=""
            width={desktop ? 70 : 58}
            height={desktop ? 48 : 40}
            className={`absolute max-w-none object-contain transition-transform duration-200 group-hover:scale-110 ${
              desktop ? "top-[-5px] left-[-2px]" : "top-[-4px] left-[-2px]"
            }`}
          />
        </span>
      </span>
      <span
        className={`font-hand font-bold tracking-normal ${
          desktop ? "text-3xl" : "text-2xl"
        }`}
      >
        Kumiko<span className="text-rose-deep">_Shoppu</span>
      </span>
    </a>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="header-nav-link whitespace-nowrap px-2.5 py-3 text-sm font-semibold text-ink-soft transition-colors hover:text-rose-deep focus-visible:text-rose-deep xl:px-3.5"
    >
      {label}
    </a>
  );
}

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
      className={`sticky top-0 z-50 border-b bg-cream/40 backdrop-blur-xl transition-all duration-200 ${
        scrolled
          ? "border-thread shadow-[0_6px_18px_-10px_rgba(44,44,44,0.2)]"
          : "border-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between py-3 lg:hidden">
          <BrandMark />
          <button
            type="button"
            className="grid size-10 place-items-center rounded-2xl border border-thread bg-white transition-colors hover:border-rose hover:bg-rose-soft/50 focus-visible:outline-rose-deep"
            aria-expanded={open}
            aria-label={open ? "Tutup menu" : "Buka menu"}
            onClick={() => setOpen((value) => !value)}
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

        <div className="hidden grid-cols-[1fr_240px_1fr] items-center gap-5 py-2 lg:grid">
          <nav
            className="flex items-center justify-end gap-1 border-y border-thread py-1"
            aria-label="Navigasi utama kiri"
          >
            {NAV.slice(0, 2).map((item) => (
              <NavLink key={item.href} {...item} />
            ))}
          </nav>

          <div className="flex justify-center">
            <BrandMark desktop />
          </div>

          <nav
            className="flex items-center justify-start gap-1 border-y border-thread py-1"
            aria-label="Navigasi utama kanan"
          >
            {NAV.slice(2).map((item) => (
              <NavLink key={item.href} {...item} />
            ))}
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto inline-flex items-center gap-1 whitespace-nowrap rounded-full bg-rose-deep px-4 py-2.5 text-xs font-bold text-white shadow-[0_5px_12px_-7px_rgba(192,96,102,0.9)] transition duration-200 hover:-translate-y-0.5 hover:bg-ink focus-visible:outline-white xl:px-5 xl:text-sm"
            >
              Pesan <span aria-hidden>↗</span>
            </a>
          </nav>
        </div>
      </div>

      <div aria-hidden className="absolute inset-x-0 bottom-0 h-0.5">
        <div
          className="h-full bg-rose-deep transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {open && (
        <nav
          className="border-t border-thread bg-cream px-4 py-3 shadow-[0_12px_18px_-18px_rgba(44,44,44,0.5)] lg:hidden"
          aria-label="Navigasi seluler"
        >
          <ul className="flex flex-col divide-y divide-thread/70">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3.5 text-sm font-semibold text-ink-soft transition-colors hover:pl-5 hover:text-rose-deep"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block rounded-full bg-rose-deep px-5 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-ink"
              >
                Pesan Sekarang <span aria-hidden>↗</span>
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
