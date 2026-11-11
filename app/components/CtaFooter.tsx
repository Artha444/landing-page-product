import { SHOPEE_URL, waLink } from "../lib/links";

export default function CtaFooter() {
  return (
    <section id="kontak" className="px-4 pb-20 sm:px-6">
      <div data-reveal className="cta-card stitch-card flannel-plaid relative mx-auto max-w-4xl overflow-hidden bg-rose-soft/50 px-6 py-14 text-center sm:px-12">
        <span aria-hidden className="cta-thread cta-thread-one" />
        <span aria-hidden className="cta-thread cta-thread-two" />
        <div className="relative z-10">
          <p aria-hidden className="font-hand text-3xl text-rose-deep">
            satu pesanan, satu cerita
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Siap membuat kado yang tak terlupakan?
          </h2>
          <p className="mx-auto mt-4 max-w-md leading-relaxed text-ink-soft">
            Bingung cari kado yang beda dan bikin dia tersenyum? Ceritakan
            ceritanya, kami bantu wujudkan dalam bentuk boneka flanel yang dibuat
            khusus.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              className="btn btn-primary"
              href={waLink(
                "Halo Kumiko Shoppu, saya ingin konsultasi desain boneka custom"
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              Konsultasi Desain via WhatsApp
            </a>
            <a
              className="btn btn-secondary"
              href={SHOPEE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Belanja via Shopee
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
