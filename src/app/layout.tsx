import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bhavana's Portfolio",
  description: "Created by Bhavana",
};

const nav1 = ['Home', 'Works', 'About',]
const nav2 = ['Resume', 'Linkedin']

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const setTheme = () => {
                document.documentElement.classList.add("dark");
                document.documentElement.dataset.theme = "dark";
              };
              setTheme();
            `,
          }}
        />
      </head>
      <body className="font-serif flex">
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
        <nav className="flex justify-center items-end h-screen w-[3%]">
          <div className="-rotate-90 text-stone-700 font-bold whitespace-nowrap -translate-y-[500%] fixed">
            {nav1.map((n) =>
              <Link key={n} href={`/#${n.toLowerCase()}`}
                className="relative inline-block mx-4 text-red-600 hover:text-reg-900 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-red-500 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-red-500 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
                <span>{n}.</span>
              </Link>
            )}
          </div>
        </nav>
        <div className="w-[94%] p-2 mx-2">
          {children}
          <Footer />
        </div>
        <nav className="flex justify-center items-end h-screen w-[3%]">
          <div className="rotate-90 text-stone-700 font-bold whitespace-nowrap -translate-y-[400%] fixed">
            {nav2.map((n) =>
              <Link key={n} href={n == 'Linkedin' ? 'https://www.linkedin.com/in/bhavana-manaswini-p-819103206/' : 'https://drive.google.com/file/d/1DcnVEPkF2kjcXGkUdyGesNqoHdZ2JHul/view?usp=drivesdk'} target="_blank"
                className="relative inline-block mx-4 text-red-600 hover:text-reg-900 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-red-500 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-red-500 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
                <span>{n}.</span>
              </Link>
            )}
          </div>
        </nav>
      </body>
    </html>
  );
}
