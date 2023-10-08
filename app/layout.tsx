import Navbar from "@/components/navbar/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

export const metadata: Metadata = {
  title: "Ali Raza",
  description: "Portfolio site for Ali Raza",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.className} font-sans`}>
      <body className="bg-primary-background ">
        <main className={` max-w-[1100px] mx-auto`}>
          <Navbar />

          {children}
        </main>
      </body>
    </html>
  );
}
