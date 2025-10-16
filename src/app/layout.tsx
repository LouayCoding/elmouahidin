import type { Metadata } from "next";
import { Lexend, Poppins, Marcellus } from "next/font/google";
import "./globals.css";
import { PrayerTimesProvider } from "@/contexts/PrayerTimesContext";
import { defaultMetadata } from "@/lib/metadata";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

const marcellus = Marcellus({
  variable: "--font-marcellus",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body
        className={`${lexend.variable} ${poppins.variable} ${marcellus.variable} antialiased`}
      >
        <a href="#main-content" className="skip-link">
          Spring naar hoofdinhoud
        </a>
        <PrayerTimesProvider>
          {children}
        </PrayerTimesProvider>
      </body>
    </html>
  );
}
