import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Claudio Ribeiro Imóveis — Alto Padrão em Itajaí e Praia Brava",
    template: "%s | Claudio Ribeiro Imóveis",
  },
  description:
    "Imóveis de alto padrão em Itajaí e Praia Brava. Experiência premium na compra, venda e locação de apartamentos, casas, coberturas e penthouse. Fale com Claudio Ribeiro.",
  keywords: [
    "imóveis itajaí",
    "praia brava imóveis",
    "apartamento alto padrão itajaí",
    "corretor itajaí",
    "imóveis luxo santa catarina",
    "claudio ribeiro corretor",
    "penthouse praia brava",
    "cobertura itajaí",
  ],
  authors: [{ name: "Claudio Ribeiro" }],
  creator: "Claudio Ribeiro Imóveis",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://claudioribeiroimoveis.com.br",
    siteName: "Claudio Ribeiro Imóveis",
    title: "Claudio Ribeiro Imóveis — Alto Padrão em Itajaí e Praia Brava",
    description:
      "Imóveis de alto padrão em Itajaí e Praia Brava. Experiência premium na compra, venda e locação.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Claudio Ribeiro Imóveis",
    description: "Imóveis de alto padrão em Itajaí e Praia Brava.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} scroll-smooth`}>
      <body className="bg-[#0A0A0A] text-white antialiased overflow-x-hidden">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
