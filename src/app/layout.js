import { Azeret_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Provider from "./Provider";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FilmHive — Stream Movies & TV Shows in One Place",
  description:
    "Watch trending movies, top-rated TV shows, and anime for free on FilmHive. Smooth streaming, smart search, and an easy-to-use interface all in one place.",
  metadataBase: new URL("https://filmhive.vercel.app"),
  openGraph: {
    title: "FilmHive — Stream Movies & TV Shows in One Place",
    description:
      "Watch trending movies, top-rated TV shows, and anime for free on FilmHive. Smooth streaming, smart search, and an easy-to-use interface all in one place.",
    url: "https://filmhive.vercel.app",
    siteName: "FilmHive",
    images: [
      {
        url: "/og-image.jpg", // make sure this image exists in /public
        width: 1200,
        height: 630,
        alt: "FilmHive - Watch Movies & TV Shows",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FilmHive — Stream Movies & TV Shows in One Place",
    description:
      "Watch trending movies, top-rated TV shows, and anime for free on FilmHive. Smooth streaming, smart search, and an easy-to-use interface all in one place.",
    images: ["/og-image.jpg"], // same as above
    site: "@filmhive",
    creator: "@filmhive",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Header />
          <Analytics />
          {children}
        </Provider>
      </body>
    </html>
  );
}
