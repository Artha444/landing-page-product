"use client";

import { useEffect } from "react";

/**
 * Pengamat scroll-reveal global.
 * Cukup dipasang sekali di halaman; semua elemen ber-atribut
 * [data-reveal] (bisa lewat server component) muncul halus saat
 * masuk viewport. Tambahkan [data-reveal-stagger] agar anak-anaknya
 * muncul berurutan.
 */
export default function RevealObserver() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
