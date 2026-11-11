"use client";

import { useState } from "react";
import { DollPasangan, DollPolisi, DollWisuda } from "./dolls";

const VARIAN = [
  {
    id: "wisuda",
    label: "Wisuda",
    tag: "selamat wisuda, sarjana!",
    doll: <DollWisuda className="mx-auto w-44 sm:w-56" />,
  },
  {
    id: "profesi",
    label: "Profesi TNI/Polri",
    tag: "siap bertugas, disiplin!",
    doll: <DollPolisi className="mx-auto w-44 sm:w-56" />,
  },
  {
    id: "pasangan",
    label: "Pasangan",
    tag: "bonus buat dia juga, ya",
    doll: <DollPasangan className="mx-auto w-44 sm:w-56" />,
  },
] as const;

export default function DollStage() {
  const [aktif, setAktif] = useState(0);
  const varian = VARIAN[aktif];

  return (
    <div>
      <div
        role="group"
        aria-label="Contoh varian boneka"
        className="mb-4 flex flex-wrap justify-center gap-2"
      >
        {VARIAN.map((pilihan, i) => (
          <button
            key={pilihan.id}
            type="button"
            onClick={() => setAktif(i)}
            aria-pressed={aktif === i}
            className={aktif === i ? "chip chip-aktif" : "chip chip-idle"}
          >
            {pilihan.label}
          </button>
        ))}
      </div>

      <div className="stitch-card flannel-plaid relative overflow-hidden p-6 [transform:rotate(1deg)] md:p-8">
        {/* titik imaji melayang di sekeliling panggung */}
        <span
          aria-hidden
          className="float-slow absolute left-5 top-6 size-3 rounded-full bg-rose"
        />
        <span
          aria-hidden
          className="float-slow absolute right-7 top-14 size-2 rounded-full bg-sage [animation-delay:1.2s]"
        />
        <span
          aria-hidden
          className="float-slow absolute bottom-10 left-9 size-2.5 rounded-full bg-rose/70 [animation-delay:2.1s]"
        />
        <span
          aria-hidden
          className="float-slow absolute right-10 bottom-16 size-3.5 rounded-full bg-sage/60 [animation-delay:0.6s]"
        />

        {/* key: remount saat varian berganti → animasi pop-in */}
        <div key={varian.id} className="pop-in relative">
          {varian.doll}
          <p className="mt-2 text-center font-hand text-3xl text-rose-deep [transform:rotate(-2deg)]">
            {varian.tag}
          </p>
        </div>
      </div>
    </div>
  );
}
