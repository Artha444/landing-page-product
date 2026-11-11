import Header from "./components/Header";
import Hero from "./components/Hero";
import ThreadMarquee from "./components/ThreadMarquee";
import Keunggulan from "./components/Keunggulan";
import Katalog from "./components/Katalog";
import CaraPesan from "./components/CaraPesan";
import Testimoni from "./components/Testimoni";
import CtaFooter from "./components/CtaFooter";
import SiteFooter from "./components/SiteFooter";
import RevealObserver from "./components/RevealObserver";

export default function Home() {
  return (
    <>
      <a
        href="#beranda"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-100 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Langsung ke konten
      </a>
      <RevealObserver />
      <Header />
      <main className="flex-1">
        <Hero />
        <ThreadMarquee />
        <Keunggulan />
        <hr aria-hidden className="mx-auto max-w-3xl border-t-2 border-dashed border-thread" />
        <Katalog />
        <CaraPesan />
        <Testimoni />
        <CtaFooter />
      </main>
      <SiteFooter />
    </>
  );
}
