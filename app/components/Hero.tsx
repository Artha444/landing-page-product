import { waLink, WA_DEFAULT_MSG, SHOPEE_URL } from "../lib/links";
import ChefKumiko from "./ChefKumiko";

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative isolate flex min-h-[calc(100svh-4rem)] w-full items-center overflow-hidden bg-rose-soft/60"
    >
      <div
        aria-hidden
        className="absolute inset-y-0 right-0 -z-10 w-[55%] bg-[radial-gradient(ellipse_at_68%_48%,rgba(232,153,156,0.42),transparent_68%)]"
      />
      <div
        aria-hidden
        className="absolute -bottom-52 -left-32 -z-10 size-[30rem] rounded-full bg-sage-soft/80 blur-3xl"
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-8 px-5 py-12 sm:px-8 md:grid-cols-[1.05fr_.95fr] md:gap-4 md:py-10 lg:px-12">
        <div className="fade-up z-10">
          <p className="font-hand text-2xl text-sage-deep sm:text-3xl">
            dibuat tangan, satu per satu
          </p>
          <h1 className="mt-2 max-w-2xl text-4xl leading-[1.12] font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Abadikan{" "}
            <span className="stitch-underline text-rose-deep">Momen Spesial</span>{" "}
            Lewat Boneka Flanel Custom Handcrafted
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-soft">
            Kado unik, rapi, dan penuh kesan untuk wisuda, ulang tahun,
            perpisahan, hingga momen anniversary.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              className="btn btn-primary group"
              href={waLink(WA_DEFAULT_MSG)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="transition-transform duration-200 group-hover:-rotate-12"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.6 14c-.2.7-1.3 1.3-1.9 1.3-.5.1-1.1.2-3.4-.7-2.9-1.2-4.7-4.1-4.9-4.3-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.4.7-.4h.5c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .6l-.4.6-.5.5c-.1.2-.3.3-.1.7.2.4.9 1.5 2 2.4 1.4 1.2 2.5 1.6 2.9 1.7.4.2.6.1.8-.1l1.2-1.4c.2-.3.5-.2.7-.1l2.1 1c.4.2.6.3.7.5.1.1.1.7-.1 1.4Z" />
              </svg>
              Bikin Boneka Custom Sekarang
            </a>
            <a
              className="btn btn-secondary group"
              href={SHOPEE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Lihat Katalog di Shopee
              <svg
                className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M7 17 17 7M9 7h8v8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold text-ink-soft">
            <li className="flex items-center gap-1.5">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="#eab41e" aria-hidden>
                <path d="m12 2 2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.2l-6.1 3.4 1.4-6.8L2.2 9.1l6.9-.8Z" />
              </svg>
              4,9 rating di Shopee
            </li>
            <li>100% handcrafted</li>
            <li>Gratis kartu ucapan</li>
          </ul>
        </div>

        <div className="fade-up relative mx-auto flex w-full max-w-[34rem] items-center justify-center [animation-delay:150ms]">
          <div
            aria-hidden
            className="absolute inset-x-[8%] top-[12%] aspect-square rounded-full border border-white/80 bg-white/35 shadow-[0_35px_90px_-50px_rgba(192,96,102,0.6)]"
          />
          <div
            aria-hidden
            className="absolute right-[5%] top-[17%] size-5 rounded-full bg-sage"
          />
          <div
            aria-hidden
            className="absolute bottom-[19%] left-[5%] size-3 rounded-full bg-rose-deep/60"
          />
          <ChefKumiko />
        </div>
      </div>
    </section>
  );
}
