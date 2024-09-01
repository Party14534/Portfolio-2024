import type { Metadata } from "next";
import Navigation from '../components/navigation/navbar'
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio Website",
  description: "Zachariah Dellimore Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " h-[100%] overflow-hidden"}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
