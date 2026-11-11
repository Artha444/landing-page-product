// Link & kontak Kumiko_Shoppu.
// Ganti WA_NUMBER dengan nomor WhatsApp asli (format internasional, tanpa tanda "+").
export const WA_NUMBER = "6281545585448";

export const SHOPEE_URL = "https://shopee.co.id/kumiko_shoppu";

export const WA_DEFAULT_MSG = "Halo Kak, saya ingin pesan boneka flanel, bisa dibantu?";

export function waLink(message: string = WA_DEFAULT_MSG): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}
