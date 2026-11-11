"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const SAPAAN = [
  "Halo, selamat datang di Kumiko Shoppu! Ada yang bisa aku bantu?",
  "Aku disini sebagai pajangan boneka flanel, lho! Tapi aku juga bisa menyapa kamu.",
  "Kalau mau pesan boneka, klik tombol di pingir ya!",
  "Aku bisa menyapa kamu dengan berbagai sapaan lucu.",
  "Mau pesan boneka? 👋",
  "Pemesanan bisa lewat link WhatsApp atau Shopee, lho! Klik tombol di pinggir ya!",
];

export default function ChefKumiko() {
  const [sapaanIndex, setSapaanIndex] = useState(-1);
  const [pesan, setPesan] = useState("");
  const [bubbleKey, setBubbleKey] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const jumpRef = useRef<SVGGElement>(null);
  const jumpAnimationRef = useRef<Animation | null>(null);
  const hasInteractedRef = useRef(false);

  const tampilkanSapaan = useCallback((index: number, duration = 2800) => {
    setSapaanIndex(index);
    setPesan(SAPAAN[index]);
    setBubbleKey((key) => key + 1);
    jumpAnimationRef.current?.cancel();
    jumpAnimationRef.current =
      jumpRef.current?.animate(
        [
          { transform: "translateY(0) scale(1, 1)", offset: 0 },
          { transform: "translateY(-30px) scale(0.99, 1.02)", offset: 0.38 },
          { transform: "translateY(-30px) scale(1, 1)", offset: 0.55 },
          { transform: "translateY(0) scale(1.03, 0.97)", offset: 0.78 },
          { transform: "translateY(0) scale(0.995, 1.005)", offset: 0.9 },
          { transform: "translateY(0) scale(1, 1)", offset: 1 },
        ],
        { duration: 1200, easing: "cubic-bezier(0.22, 0.61, 0.36, 1)" },
      ) ?? null;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setPesan(""), duration);
  }, []);

  const sapa = useCallback(() => {
    hasInteractedRef.current = true;
    tampilkanSapaan((sapaanIndex + 1) % SAPAAN.length);
  }, [sapaanIndex, tampilkanSapaan]);

  useEffect(() => {
    const greetingTimeout = setTimeout(() => {
      if (!hasInteractedRef.current) tampilkanSapaan(0, 4500);
    }, 800);

    return () => {
      clearTimeout(greetingTimeout);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      jumpAnimationRef.current?.cancel();
    };
  }, [tampilkanSapaan]);

  return (
    <div className="chef-kumiko-stage">
      <button
        type="button"
        className="chef-kumiko-button"
        aria-label="Sapa Chef Kumiko"
        onClick={sapa}
      >
        <svg
          className="chef-kumiko"
          viewBox="0 0 400 600"
          aria-hidden="true"
          focusable="false"
        >
          <defs>
            <linearGradient id="chef-uniform" x1="0" x2="1">
              <stop offset="0" stopColor="#fff" />
              <stop offset=".6" stopColor="#f8f8fa" />
              <stop offset="1" stopColor="#e2e2e9" />
            </linearGradient>
            <radialGradient id="chef-skin" cx=".4" cy=".35" r=".8">
              <stop offset="0" stopColor="#fde6cb" />
              <stop offset="1" stopColor="#f1c097" />
            </radialGradient>
          </defs>

          <ellipse cx="200" cy="574" rx="172" ry="22" fill="#f4c6ca" />
          <ellipse
            cx="200"
            cy="567"
            rx="152"
            ry="16"
            fill="#fbe3e4"
            stroke="#fff"
            strokeWidth="3"
            strokeDasharray="6 6"
          />
          <ellipse cx="200" cy="560" rx="96" ry="11" fill="#000" opacity=".14" />

          <g ref={jumpRef} className="chef-jump">
            <g className="chef-body">
        <g fill="#1f1f23">
          <rect x="146" y="372" width="52" height="170" rx="24" />
          <rect x="202" y="372" width="52" height="170" rx="24" />
          <ellipse cx="154" cy="546" rx="35" ry="15" />
          <ellipse cx="246" cy="546" rx="35" ry="15" />
        </g>
        <path
          d="M172 404v112M228 404v112"
          stroke="#4a4a52"
          strokeWidth="2"
          strokeDasharray="5 5"
        />

        <g className="chef-rest-arm">
          <path
            d="M252 312L270 372"
            stroke="#fbfbfd"
            strokeWidth="30"
            strokeLinecap="round"
          />
          <path
            d="M262 316L278 368"
            stroke="#e1e1e9"
            strokeWidth="6"
            strokeLinecap="round"
            opacity=".7"
          />
          <circle cx="272" cy="388" r="15" fill="url(#chef-skin)" />
        </g>

        <g className="chef-wave-arm">
          <path
            d="M152 306V364"
            stroke="#fbfbfd"
            strokeWidth="30"
            strokeLinecap="round"
          />
          <path
            d="M163 310V358"
            stroke="#e1e1e9"
            strokeWidth="5"
            strokeLinecap="round"
            opacity=".7"
          />
          <g className="chef-wave-forearm">
            <path
              d="M152 364V412"
              stroke="#fbfbfd"
              strokeWidth="28"
              strokeLinecap="round"
            />
            <path
              d="M162 368V408"
              stroke="#e1e1e9"
              strokeWidth="5"
              strokeLinecap="round"
              opacity=".7"
            />
            <g className="chef-wave-hand">
              <ellipse
                cx="134"
                cy="424"
                rx="6"
                ry="10"
                fill="url(#chef-skin)"
                transform="rotate(25 134 424)"
              />
              <circle cx="152" cy="426" r="15" fill="url(#chef-skin)" />
              <path
                d="M146 430q6 4 12 0"
                stroke="#e3a37f"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />
            </g>
          </g>
        </g>

        <g
          className="chef-wave-lines"
          fill="none"
          stroke="#b4545a"
          strokeWidth="3.5"
          strokeLinecap="round"
        >
          <path d="M44 206q-12 14-2 32" />
          <path d="M28 198q-18 22-4 48" />
        </g>

        <rect x="184" y="260" width="32" height="40" fill="#f1c097" />
        <path
          d="M146 296Q138 332 140 374Q142 410 176 412H224Q258 410 260 374Q262 332 254 296Q200 282 146 296Z"
          fill="url(#chef-uniform)"
        />
        <path
          d="M238 304Q258 334 253 382"
          stroke="#dcdce4"
          strokeWidth="8"
          strokeLinecap="round"
          opacity=".6"
          fill="none"
        />
        <path
          d="M150 394Q200 410 250 394"
          stroke="#c4c4cd"
          strokeWidth="2"
          strokeDasharray="5 5"
          fill="none"
        />
        <path
          d="M190 306Q177 332 184 406"
          stroke="#1d1d20"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
        <g fill="#26262a">
          <circle cx="210" cy="326" r="4" />
          <circle cx="234" cy="326" r="4" />
          <circle cx="210" cy="346" r="4" />
          <circle cx="234" cy="346" r="4" />
          <circle cx="210" cy="366" r="4" />
          <circle cx="234" cy="366" r="4" />
          <circle cx="210" cy="386" r="4" />
          <circle cx="234" cy="386" r="4" />
        </g>
        <g fill="#fff" opacity=".8">
          <circle cx="209" cy="325" r="1.2" />
          <circle cx="233" cy="325" r="1.2" />
          <circle cx="209" cy="345" r="1.2" />
          <circle cx="233" cy="345" r="1.2" />
          <circle cx="209" cy="365" r="1.2" />
          <circle cx="233" cy="365" r="1.2" />
          <circle cx="209" cy="385" r="1.2" />
          <circle cx="233" cy="385" r="1.2" />
        </g>
        <path
          d="M166 290Q200 312 234 290L238 301Q200 326 162 301Z"
          fill="#1d1d20"
        />

        <g className="chef-head">
          <circle cx="125" cy="220" r="14" fill="url(#chef-skin)" />
          <circle cx="275" cy="220" r="14" fill="url(#chef-skin)" />
          <circle cx="125" cy="220" r="6" fill="#efae8a" />
          <circle cx="275" cy="220" r="6" fill="#efae8a" />
          <path
            d="M128 170Q112 198 124 228Q136 216 140 188Z"
            fill="#1d1d20"
          />
          <path
            d="M272 170Q288 198 276 228Q264 216 260 188Z"
            fill="#1d1d20"
          />
          <ellipse cx="200" cy="210" rx="76" ry="70" fill="url(#chef-skin)" />
          <path
            d="M128 186Q122 150 156 140H244Q278 150 272 186Q258 166 236 164Q216 176 194 166Q170 160 156 170Q138 174 128 186Z"
            fill="#1d1d20"
          />
          <g className="chef-eyes">
            <circle cx="166" cy="218" r="8.5" fill="#1b1b1e" />
            <circle cx="234" cy="218" r="8.5" fill="#1b1b1e" />
            <circle cx="169.5" cy="214.5" r="3.2" fill="#fff" />
            <circle cx="237.5" cy="214.5" r="3.2" fill="#fff" />
            <circle cx="162.5" cy="221.5" r="1.4" fill="#fff" />
            <circle cx="230.5" cy="221.5" r="1.4" fill="#fff" />
          </g>
          <ellipse cx="146" cy="240" rx="17" ry="11" fill="#f4a08c" opacity=".8" />
          <ellipse cx="254" cy="240" rx="17" ry="11" fill="#f4a08c" opacity=".8" />
          <path
            d="M197 232q3 3 6 0"
            stroke="#e39a7a"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M188 247Q200 259 212 247"
            stroke="#d9695f"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />
          <g className="chef-hat">
            <path
              d="M120 166Q118 144 148 136Q178 110 190 68Q198 38 214 14Q220 12 220 20Q224 54 236 86Q252 122 268 138Q284 148 280 166Q200 182 120 166Z"
              fill="url(#chef-uniform)"
            />
            <path
              d="M214 26Q206 82 180 128"
              stroke="#d2d2db"
              strokeWidth="2.5"
              strokeDasharray="5 5"
              fill="none"
            />
            <path
              d="M124 162Q200 180 276 162"
              stroke="#d2d2db"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M130 156Q200 172 270 156"
              stroke="#c4c4cd"
              strokeWidth="2"
              strokeDasharray="5 5"
              fill="none"
            />
          </g>
        </g>
            </g>
          </g>
        </svg>
      </button>
      <div
        key={bubbleKey}
        className={`chef-speech-bubble${pesan ? " is-visible" : ""}`}
        role="status"
        aria-live="polite"
      >
        {pesan}
      </div>
    </div>
  );
}
