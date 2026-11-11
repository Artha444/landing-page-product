import type { Metadata } from "next";
import { Caveat, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Kumiko_Shoppu — Boneka Flanel Custom Handmade",
    template: "%s | Kumiko_Shoppu",
  },
  description:
    "Kado boneka flanel handmade kustom untuk wisuda, ulang tahun, perpisahan, hingga anniversary. 100% handcrafted, bebas kustomisasi, gratis kartu ucapan. Pesan via WhatsApp atau Shopee.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${jakarta.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
