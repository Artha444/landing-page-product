const KATA = [
  "wisuda",
  "ulang tahun",
  "anniversary",
  "perpisahan",
  "wisata Polri",
  "kado untuk dokter",
  "long distance",
  "promosi jabatan",
];

function SetengahPita() {
  return (
    <ul className="flex items-center gap-10 pr-10">
      {KATA.map((kata) => (
        <li
          key={kata}
          className="flex items-center gap-10 text-sm font-semibold tracking-widest text-cream/95 uppercase"
        >
          {kata}
          <span aria-hidden className="text-rose-soft/80">
            ✂
          </span>
        </li>
      ))}
    </ul>
  );
}

/** Pita momen berjalan terus; berhenti saat disentuh kursor. */
export default function ThreadMarquee() {
  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden
        className="marquee relative -mx-[1%] w-[102%] -rotate-1 border-y-2 border-dashed border-white/40 bg-rose-deep py-3"
      >
        <div className="marquee-track flex w-max">
          <SetengahPita />
          <SetengahPita />
        </div>
      </div>
    </div>
  );
}
