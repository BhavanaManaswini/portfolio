import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Bhavana's Portfolio",
  description: "Created by Bhavana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-serif p-2 px-4">
        <svg width="0" height="0" style={{ position: 'absolute' }}>
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="10"
              numOctaves="1"
              stitchTiles="stitch"
            />
          </filter>
        </svg>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
