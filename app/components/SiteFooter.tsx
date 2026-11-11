import { SHOPEE_URL, waLink } from "../lib/links";

const NAV = [
  { href: "#beranda", label: "Beranda" },
  { href: "#katalog", label: "Katalog" },
  { href: "#cara-pesan", label: "Cara Pesan" },
  { href: "#testimoni", label: "Testimoni" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t-2 border-dashed border-thread bg-card px-4 pb-10 pt-12 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-3">
        <div data-reveal>
          <p className="text-lg font-bold tracking-tight">
            Kumiko<span className="text-rose-deep">_Shoppu</span>
          </p>
          <p className="mt-2 font-hand text-2xl text-sage-deep">
            dibuat dengan teliti dan cinta
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-soft">
            Boneka flanel handmade kustom. Setiap kado unik dan tidak ada
            duanya di dunia.
          </p>
        </div>

        <nav data-reveal aria-label="Navigasi footer">
          <h2 className="text-sm font-bold text-ink">Jelajahi</h2>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="footer-link hover:text-ink hover:underline">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div data-reveal>
          <h2 className="text-sm font-bold text-ink">Hubungi kami</h2>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft">
            <li>
              <a
                className="footer-link flex items-center gap-2 hover:text-ink hover:underline"
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.6 14c-.2.7-1.3 1.3-1.9 1.3-.5.1-1.1.2-3.4-.7-2.9-1.2-4.7-4.1-4.9-4.3-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.4.7-.4h.5c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .6l-.4.6-.5.5c-.1.2-.3.3-.1.7.2.4.9 1.5 2 2.4 1.4 1.2 2.5 1.6 2.9 1.7.4.2.6.1.8-.1l1.2-1.4c.2-.3.5-.2.7-.1l2.1 1c.4.2.6.3.7.5.1.1.1.7-.1 1.4Z" />
                </svg>
                Custom order via WhatsApp
              </a>
            </li>
            <li>
              <a
                className="footer-link flex items-center gap-2 hover:text-ink hover:underline"
                href={SHOPEE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M6.5 6V5a5.5 5.5 0 1 1 11 0v1h3a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-17a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Zm2-1V5a3.5 3.5 0 1 0 7 0V5a3.5 3.5 0 1 0-7 0Zm-5 2v11h15V7Z" />
                </svg>
                shopee.co.id/kumiko_shoppu
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-dashed border-thread pt-6 text-xs text-ink-soft sm:flex-row">
        {/* Tahun statis agar halaman tetap bisa di-prerender; perbarui saat ganti tahun. */}
        <p>© 2026 Kumiko_Shoppu. Semua hak dilindungi.</p>
        <p>Boneka flanel handmade asal Indonesia</p>
      </div>
    </footer>
  );
}
