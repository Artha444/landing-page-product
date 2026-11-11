import SectionHeader from "./SectionHeader";
import { DollPasangan, DollPolisi, DollWisuda } from "./dolls";
import { SHOPEE_URL, waLink } from "../lib/links";

const KOLEKSI = [
  {
    name: "Koleksi Wisuda",
    handLabel: "selamat wisuda, sarjana!",
    desc: "Toga, topi wisuda, dan tesis di tangan. Bisa dibuatkan wajah dan gaya rambut sesuai mahasiswanya.",
    doll: <DollWisuda className="w-36 sm:w-40" />,
    tint: "bg-rose-soft/50",
    waMsg:
      "Halo Kumiko Shoppu, saya ingin pesan boneka custom koleksi wisuda. Berikut detailnya:",
  },
  {
    name: "Koleksi Profesi TNI/Polri",
    handLabel: "siap komando!",
    desc: "Seragam Polisi, Brimob, atau Dokter lengkap dengan topi dan lencana. Cocok untuk kaderisasi, promosi, atau hadiah resmi.",
    doll: <DollPolisi className="w-36 sm:w-40" />,
    tint: "bg-sage-soft/60",
    waMsg:
      "Halo Kumiko Shoppu, saya ingin pesan boneka custom profesi (Polisi/Brimob/Dokter). Berikut detailnya:",
  },
  {
    name: "Koleksi Pasangan/Anniversary",
    handLabel: "jarak bukan halangan",
    desc: "Sepasang boneka mini kembar — satu untukmu, satu untuk dia. Favorit untuk anniversary dan long distance.",
    doll: <DollPasangan className="w-36 sm:w-40" />,
    tint: "bg-card",
    waMsg:
      "Halo Kumiko Shoppu, saya ingin pesan boneka custom pasangan/anniversary. Berikut detailnya:",
  },
];

const SPEK = [
  "Tinggi 15–20 cm",
  "Flanel premium + akrilik / kotak mika",
  "Pre-order 2–4 hari kerja",
];

export default function Katalog() {
  return (
    <section id="katalog" className="px-4 py-16 sm:px-6 md:py-20">
      <SectionHeader
        eyebrow="koleksi favorit"
        title="Pilih karakter yang paling pas"
        sub="Semua koleksi bisa dikustomisasi penuh: profesi, gaya rambut, warna seragam, sampai pesan di kartu ucapannya."
      />

      <ul
        data-reveal
        data-reveal-stagger
        className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-3"
      >
        {KOLEKSI.map((item) => (
          <li
            key={item.name}
            className="catalog-card stitch-card group flex flex-col transition duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_22px_36px_-20px_rgba(44,44,44,0.3)] focus-within:-translate-y-1"
          >
            <div
              className={`relative flex h-52 items-center justify-center rounded-t-3xl ${item.tint}`}
            >
              <div className="catalog-doll transition-transform duration-300 ease-out group-hover:-translate-y-2 group-hover:-rotate-3 group-hover:scale-105">
                {item.doll}
              </div>
              <p className="catalog-caption absolute bottom-3 right-4 font-hand text-xl text-rose-deep">
                {item.handLabel}
              </p>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-lg font-bold">{item.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.desc}</p>
              <ul className="mt-4 space-y-1.5 border-t border-dashed border-thread pt-4 text-sm text-ink-soft">
                {SPEK.map((s) => (
                  <li key={s} className="flex items-start gap-2">
                    <span aria-hidden className="mt-1.5 size-1.5 shrink-0 rounded-full bg-rose" />
                    {s}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-col gap-2.5 border-t border-dashed border-thread pt-5">
                <a
                  className="btn btn-primary catalog-buy w-full"
                  href={SHOPEE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Beli di Shopee
                </a>
                <a
                  className="catalog-custom-link text-center text-sm font-semibold text-sage-deep underline decoration-dashed decoration-2 underline-offset-4 hover:decoration-solid"
                  href={waLink(item.waMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  atau custom via WhatsApp
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
