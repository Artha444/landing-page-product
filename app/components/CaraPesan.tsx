import SectionHeader from "./SectionHeader";
import { waLink } from "../lib/links";

const LANGKAH = [
  {
    title: "Ceritakan idemu",
    desc: "Pilih profesi, gaya rambut, dan warna seragam lewat WhatsApp. Kirim foto referensi kalau ada.",
  },
  {
    title: "Kami buatkan",
    desc: "Boneka dikerjakan manual selama 2–4 hari kerja, setiap jahitan dicek satu per satu.",
  },
  {
    title: "Dikemas berlapis",
    desc: "Bubble wrap, kurungan kertas, dan kotak mika — sampai kartu ucapannya ikut rapi.",
  },
  {
    title: "Tiba dengan sempurna",
    desc: "Kado siap diberikan langsung saat momen spesialnya tiba.",
  },
];

export default function CaraPesan() {
  return (
    <section id="cara-pesan" className="bg-sage-soft/40 px-4 py-16 sm:px-6 md:py-20">
      <SectionHeader
        eyebrow="cara pesan"
        title="Dari ide jadi kado, cuma 4 langkah"
        sub="Begini saja — tanpa perlu risau soal detail teknisnya."
      />

      <ol
        data-reveal
        data-reveal-stagger
        className="relative mx-auto mt-14 grid max-w-6xl gap-10 md:grid-cols-4 md:gap-6"
      >
        {/* garis jahitan penghubung antar langkah */}
        <div
          aria-hidden
          className="step-flow-line absolute top-0 right-[14%] left-[14%] hidden border-t-[3px] border-dashed border-sage/60 md:block"
        />
        {LANGKAH.map((langkah, i) => (
          <li key={langkah.title} className="step-card group relative text-center md:text-left">
            <span className="step-number relative z-10 grid size-11 place-items-center rounded-full border-2 border-sage-deep bg-cream font-hand text-2xl font-bold text-sage-deep transition duration-300 group-hover:-translate-y-1 group-hover:rotate-6 group-hover:bg-sage-deep group-hover:text-white group-focus-within:-translate-y-1">
              {i + 1}
            </span>
            <h3 className="mt-4 font-bold">{langkah.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{langkah.desc}</p>
          </li>
        ))}
      </ol>

      <div data-reveal className="mt-14 text-center">
        <a
          className="btn btn-sage"
          href={waLink("Halo Kumiko Shoppu, saya mau mulai konsultasi desain boneka custom")}
          target="_blank"
          rel="noopener noreferrer"
        >
          Mulai Langkah 1 — Chat WhatsApp
        </a>
      </div>
    </section>
  );
}
