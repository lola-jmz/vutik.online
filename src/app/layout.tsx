import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "vutik — Desarrollo frontend de alto nivel",
  description:
    "Construimos estructuras digitales sólidas y fluidas, diseñadas para evolucionar al ritmo de las marcas más exigentes.",
  openGraph: {
    title: "vutik — Desarrollo frontend de alto nivel",
    description: "Interfaces que convierten. Código que escala.",
    url: "https://vutik.online",
    siteName: "vutik",
    locale: "es_MX",
    type: "website",
  },
  metadataBase: new URL("https://vutik.online"),
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
