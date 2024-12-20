import { Azeret_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Provider from "./Provider";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FilmHive | Feel Free to watch you favorite movie or TV show",
  description: "FilmHive is a movies website. Feel free to watch your favorite movie.",
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
