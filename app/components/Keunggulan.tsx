import SectionHeader from "./SectionHeader";

const KEUNGGULAN = [
  {
    title: "100% Handcrafted",
    desc: "Dikerjakan dengan detail jahitan rapi dan bahan flanel premium, tanpa mesin — hanya tangan yang teliti.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M20 4 9 15m0 0-3 5 5-3m-2-2c-2-1-3.5-2.5-5-5l7-7c1.5 2 3 3.5 5 5m2.2 1.2L11 4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Bebas Kustomisasi",
    desc: "Bebas pilih profesi (Polisi, Brimob, Dokter, Wisuda), gaya rambut, hingga warna seragam sesuai sosoknya.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M4 21v-7m0-4V3m8 18v-9m0-4V3m8 18v-5m0-4V3M1 14h6m2-4h6m2-3h6M1 21h6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Free Personalized Card",
    desc: "Gratis kartu ucapan dengan pesan kustom, ditulis rapi untuk penerima kado.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect
          x="2.5"
          y="5"
          width="19"
          height="14"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path d="m3 7 9 6 9-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Proses Cepat & Aman",
    desc: "Pengemasan berlapis dengan bubble wrap dan kotak mika, agar boneka tiba dalam kondisi sempurna.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="m12 2 9 5v10l-9 5-9-5V7Zm0 5.5L21 7M12 7.5 3 7M12 7.5V22M7.5 4.5 16.5 9.4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function Keunggulan() {
  return (
    <section id="keunggulan" className="px-4 py-16 sm:px-6 md:py-20">
      <SectionHeader
        eyebrow="kenapa kumiko?"
        title="Kado yang dibuat khusus untuk orang tersayang"
        sub="Setiap pesanan dikerjakan manual oleh tangan kami — jadi jahitannya rapi, karakternya mirip, dan kesannya awet bertahun-tahun."
      />
      <ul
        data-reveal
        data-reveal-stagger
        className="mx-auto mt-12 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {KEUNGGULAN.map((item) => (
          <li
            key={item.title}
            className="feature-card stitch-card group p-6 transition duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_18px_30px_-18px_rgba(44,44,44,0.25)] focus-within:-translate-y-1"
          >
            <span className="feature-icon grid size-11 place-items-center rounded-full bg-rose-soft text-rose-deep transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110">
              {item.icon}
            </span>
            <h3 className="mt-4 font-bold text-ink">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
