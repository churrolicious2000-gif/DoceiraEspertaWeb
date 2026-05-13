import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Doceira Esperta | Achadinhos para Confeitaria",
  description: "Entre no grupo de achadinhos para doceiras e acompanhe ofertas de embalagens, potinhos, moldes e utensílios para confeitaria.",
  openGraph: {
    title: "Doceira Esperta | Achadinhos para Confeitaria",
    description: "Economize na sua confeitaria com os melhores achadinhos de embalagens e utensílios.",
    type: "website",
    locale: "pt_BR",
    url: "https://doceiraesperta.com.br",
    siteName: "Doceira Esperta",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Doceira Esperta",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${outfit.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
