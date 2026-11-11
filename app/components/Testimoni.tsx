import SectionHeader from "./SectionHeader";
import { SHOPEE_URL } from "../lib/links";

function Bintang() {
  return (
    <div className="review-stars flex gap-0.5" aria-label="Rating 5 dari 5 bintang">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg className="review-star" key={i} width="15" height="15" viewBox="0 0 24 24" fill="#eab41e" aria-hidden>
          <path d="m12 2 2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.2l-6.1 3.4 1.4-6.8L2.2 9.1l6.9-.8Z" />
        </svg>
      ))}
    </div>
  );
}

const ULASAN = [
  {
    nama: "Dinta R.",
    momen: "Wisuda S1",
    teks: "Bonekanya mirip banget sama gaya rambut dan toga yang saya minta. Jahitannya rapi, packingnya juga aman berlapis. Teman yang terima langsung tersenyum.",
  },
  {
    nama: "Farhan",
    momen: "Kado anniversary",
    teks: "Bingung cari kado yang beda, untung nemu Kumiko. Sepasang bonekanya lucu, plus kartu ucapannya bisa pesan sendiri teksnya. Dia simpan sampai sekarang.",
  },
  {
    nama: "Putri A.",
    momen: "Hadiah wisata Polri",
    teks: "Quality buatan tangan-nya kerasa. Detail seragam dan lencananya dikerjakan teliti. Pengerjaan sesuai estetika, 3 hari selesai.",
  },
];

export default function Testimoni() {
  return (
    <section id="testimoni" className="px-4 py-16 sm:px-6 md:py-20">
      <SectionHeader
        eyebrow="kata pembeli"
        title="Mereka sudah mencoba, ini ceritanya"
        sub="Rating 4,9 dari ulasan pembeli di Shopee — foto dari mereka, bukan foto stok."
      />

      <ul
        data-reveal
        data-reveal-stagger
        className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-3"
      >
        {ULASAN.map((u) => (
          <li
            key={u.nama}
            className="testimonial-card stitch-card group flex flex-col p-6 transition duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_18px_30px_-18px_rgba(44,44,44,0.25)]"
          >
            <Bintang />
            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink">
              “{u.teks}”
            </blockquote>
            <footer className="mt-5 flex items-center gap-3 border-t border-dashed border-thread pt-4">
              <span
                aria-hidden
                className="review-avatar grid size-10 shrink-0 place-items-center rounded-full bg-sage-soft font-hand text-xl font-bold text-sage-deep transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"
              >
                {u.nama.charAt(0)}
              </span>
              <div>
                <p className="text-sm font-bold">{u.nama}</p>
                <p className="text-xs font-semibold text-ink-soft">{u.momen}</p>
              </div>
              <a
                className="ml-auto text-xs font-semibold text-rose-deep underline decoration-dotted underline-offset-4"
                href={SHOPEE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                lihat di Shopee
              </a>
            </footer>
          </li>
        ))}
      </ul>

      <p className="mx-auto mt-8 max-w-6xl text-xs text-ink-soft/80">
        *Ulasan di atas adalah contoh tampilan; ganti dengan tangkapan layar ulasan
        asli dari toko Shopee Anda.
      </p>
    </section>
  );
}
