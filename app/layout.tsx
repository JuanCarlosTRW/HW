import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Precision Remodels — Kitchen & Bath Renovation in Ridgeview",
  description:
    "Most contractors design your kitchen in their head before you finish your sentence. I sit at your kitchen table for an hour first. Then I tell you every day what's happening in your home until the last tile is set.",
  openGraph: {
    title: "Precision Remodels — Ridgeview",
    description:
      "Kitchen and bath renovation done right. Listening first. Daily updates. No surprises.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
