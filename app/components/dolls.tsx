/* Ilustrasi boneka flanel (SVG buatan sendiri) untuk kartu katalog & hero,
   sesuai karakter koleksi Kumiko_Shoppu. */

export function DollWisuda({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 240"
      className={className}
      role="img"
      aria-label="Ilustrasi boneka flanel kustom wisuda dengan toga dan tesis"
    >
      <ellipse cx="110" cy="226" rx="58" ry="9" fill="#efe2d6" />
      {/* tubuh toga */}
      <path
        d="M110 128 C140 128 156 150 162 206 C163 216 156 222 146 222 H74 C64 222 57 216 58 206 C64 150 80 128 110 128 Z"
        fill="#c06066"
      />
      {/* jahitan hem */}
      <path
        d="M80 210 H140"
        stroke="#fff9f2"
        strokeWidth="2"
        strokeDasharray="5 5"
        strokeLinecap="round"
      />
      <path
        d="M86 132 Q110 146 134 132"
        stroke="#fff9f2"
        strokeWidth="2"
        strokeDasharray="5 5"
        strokeLinecap="round"
        fill="none"
      />
      {/* tesis */}
      <g transform="rotate(-16 168 172)">
        <rect x="146" y="167" width="46" height="11" rx="5.5" fill="#fff9f2" />
        <path d="M158 167 v11 M164 167 v11" stroke="#e4d3c8" strokeWidth="1.5" />
      </g>
      <circle cx="150" cy="174" r="7" fill="#f6e3d5" />
      {/* kepala */}
      <circle cx="110" cy="86" r="46" fill="#f6e3d5" />
      {/* rambut + ikal */}
      <path
        d="M64 90 C64 50 82 38 110 38 C138 38 156 50 156 90 C150 66 138 58 110 58 C82 58 70 66 64 90 Z"
        fill="#5b4a44"
      />
      <circle cx="56" cy="74" r="9" fill="#5b4a44" />
      <circle cx="164" cy="74" r="9" fill="#5b4a44" />
      {/* wajah */}
      <circle cx="93" cy="97" r="4" fill="#2c2c2c" />
      <circle cx="127" cy="97" r="4" fill="#2c2c2c" />
      <circle cx="80" cy="108" r="6" fill="#e8999c" opacity="0.55" />
      <circle cx="140" cy="108" r="6" fill="#e8999c" opacity="0.55" />
      <path
        d="M102 110 Q110 118 118 110"
        stroke="#2c2c2c"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* toga cap */}
      <polygon points="110,16 166,34 110,52 54,34" fill="#2c2c2c" />
      <circle cx="110" cy="34" r="3.5" fill="#e8999c" />
      <path
        d="M110 34 L154 48"
        stroke="#e8999c"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="156" cy="50" r="5" fill="#e8999c" />
    </svg>
  );
}

export function DollPolisi({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 240"
      className={className}
      role="img"
      aria-label="Ilustrasi boneka flanel kustom profesi polisi"
    >
      <ellipse cx="110" cy="226" rx="58" ry="9" fill="#efe2d6" />
      {/* tubuh seragam */}
      <path
        d="M110 126 C142 126 158 150 164 204 C165 215 157 222 146 222 H74 C63 222 55 215 56 204 C62 150 78 126 110 126 Z"
        fill="#71855f"
      />
      {/* kantong + jahitan */}
      <rect
        x="80"
        y="180"
        width="26"
        height="22"
        rx="6"
        fill="none"
        stroke="#fff9f2"
        strokeWidth="2"
        strokeDasharray="5 5"
      />
      <rect
        x="114"
        y="180"
        width="26"
        height="22"
        rx="6"
        fill="none"
        stroke="#fff9f2"
        strokeWidth="2"
        strokeDasharray="5 5"
      />
      {/* kancing logam */}
      <circle cx="110" cy="152" r="4" fill="#e8c97a" />
      <circle cx="110" cy="166" r="4" fill="#e8c97a" />
      <circle cx="64" cy="168" r="7" fill="#f6e3d5" />
      <circle cx="158" cy="168" r="7" fill="#f6e3d5" />
      {/* kepala */}
      <circle cx="110" cy="90" r="46" fill="#f6e3d5" />
      {/* poni rambut */}
      <path
        d="M68 86 C70 60 88 52 110 52 C132 52 150 60 152 86 C144 70 128 64 110 64 C92 64 76 70 68 86 Z"
        fill="#5b4a44"
      />
      <circle cx="92" cy="100" r="4" fill="#2c2c2c" />
      <circle cx="128" cy="100" r="4" fill="#2c2c2c" />
      <circle cx="80" cy="110" r="6" fill="#e8999c" opacity="0.55" />
      <circle cx="140" cy="110" r="6" fill="#e8999c" opacity="0.55" />
      <path
        d="M102 112 Q110 119 118 112"
        stroke="#2c2c2c"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* topi polisi */}
      <path
        d="M70 62 V44 C70 32 88 26 110 26 C132 26 150 32 150 44 V62 Z"
        fill="#4a5849"
      />
      <rect x="64" y="58" width="92" height="11" rx="5.5" fill="#2f3b33" />
      <path
        d="M60 66 H160 C158 80 140 86 110 86 C80 86 62 80 60 66 Z"
        fill="#3e4a3f"
      />
      {/* lencana bintang */}
      <path
        d="M110 34 l2 4.4 4.8.6 -3.5 3.3 .9 4.7 -4.2-2.3 -4.2 2.3 .9-4.7 -3.5-3.3 4.8-.6 z"
        fill="#f5dfae"
      />
    </svg>
  );
}

export function DollPasangan({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 240"
      className={className}
      role="img"
      aria-label="Ilustrasi sepasang boneka flanel kustom untuk momen anniversary"
    >
      <ellipse cx="110" cy="228" rx="66" ry="9" fill="#efe2d6" />
      {/* boneka 1 (kiri) */}
      <path
        d="M74 150 C90 150 98 162 100 200 C100 210 94 214 86 214 H58 C50 214 44 210 44 200 C46 162 58 150 74 150 Z"
        fill="#c06066"
      />
      <path
        d="M54 206 H92"
        stroke="#fff9f2"
        strokeWidth="2"
        strokeDasharray="4 4"
        strokeLinecap="round"
      />
      <circle cx="74" cy="104" r="36" fill="#f6e3d5" />
      {/* pita di kepala */}
      <path
        d="M104 82 c8 -10 16 -6 14 2 c-2 7 -10 8 -14 6 z"
        fill="#e8999c"
      />
      <path
        d="M62 96 C62 66 84 60 74 60 C96 58 104 70 86 68 C74 68 66 78 62 96 Z"
        fill="#5b4a44"
      />
      <circle cx="64" cy="108" r="3.2" fill="#2c2c2c" />
      <circle cx="88" cy="108" r="3.2" fill="#2c2c2c" />
      <circle cx="56" cy="116" r="4.6" fill="#e8999c" opacity="0.55" />
      <circle cx="96" cy="116" r="4.6" fill="#e8999c" opacity="0.55" />
      <path
        d="M68 120 Q76 126 84 120"
        stroke="#2c2c2c"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />

      {/* boneka 2 (kanan) */}
      <path
        d="M148 150 C164 150 172 162 174 200 C174 210 168 214 160 214 H132 C124 214 118 210 118 200 C120 162 132 150 148 150 Z"
        fill="#71855f"
      />
      <path
        d="M128 206 H166"
        stroke="#fff9f2"
        strokeWidth="2"
        strokeDasharray="4 4"
        strokeLinecap="round"
      />
      <circle cx="148" cy="104" r="36" fill="#f6e3d5" />
      <path
        d="M114 94 C114 62 136 52 148 52 C160 52 182 62 182 94 C172 72 162 66 148 66 C134 66 124 72 114 94 Z"
        fill="#5b4a44"
      />
      <circle cx="138" cy="108" r="3.2" fill="#2c2c2c" />
      <circle cx="162" cy="108" r="3.2" fill="#2c2c2c" />
      <circle cx="130" cy="116" r="4.6" fill="#e8999c" opacity="0.55" />
      <circle cx="170" cy="116" r="4.6" fill="#e8999c" opacity="0.55" />
      <path
        d="M142 120 Q150 126 158 120"
        stroke="#2c2c2c"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />

      {/* tangan menyambung + hati */}
      <path
        d="M92 188 Q110 196 126 188"
        stroke="#fff9f2"
        strokeWidth="2"
        strokeDasharray="4 4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M110 88 c-7 -7 -16 -5 -16 3.5 c0 7 9 10.5 16 16 c7 -5.5 16 -9 16 -16 c0 -8.5 -9 -10.5 -16 -3.5 z"
        fill="#e8999c"
      />
    </svg>
  );
}
