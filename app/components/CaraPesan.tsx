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
        className="relative mx-auto mt-20 grid max-w-6xl grid-cols-1 gap-x-5 gap-y-12 sm:grid-cols-2 md:mt-16 md:grid-cols-4 md:gap-5"
      >
        <div
          aria-hidden
          className="step-flow-line absolute top-0 right-[12%] left-[12%] z-0 hidden border-t-2 border-dashed border-sage/60 md:block"
        />
        {LANGKAH.map((langkah, index) => (
          <li
            key={langkah.title}
            className="step-card stitch-card group relative px-5 pb-6 pt-8 text-center"
          >
            <span
              className={`step-number absolute -top-6 left-1/2 z-10 grid size-12 -translate-x-1/2 place-items-center rounded-full border-2 font-hand text-3xl font-bold shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:rotate-6 ${
                index % 2 === 0
                  ? "border-sage-deep bg-sage-soft text-sage-deep group-hover:bg-sage-deep group-hover:text-white"
                  : "border-rose-deep bg-rose-soft text-rose-deep group-hover:bg-rose-deep group-hover:text-white"
              }`}
            >
              {index + 1}
            </span>
            <h3 className="mt-1 text-base font-bold text-ink">{langkah.title}</h3>
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
