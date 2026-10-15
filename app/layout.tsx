import type { Metadata } from "next";
import { IBM_Plex_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-mono-primary",
  display: "swap",
});

const ibmMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono-secondary",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vo Nguyen Phu Qui — Fullstack Developer",
  description:
    "Fullstack developer in Ho Chi Minh City. React, Next.js, Node.js, PostgreSQL, Redis, RabbitMQ, GCP.",
  icons: {
    icon: "/dinasaur.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetbrains.variable} ${ibmMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
