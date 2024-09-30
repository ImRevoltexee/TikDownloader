import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TikTokDownloader",
  description: "Created by Revolt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="w-screen h-screen overflow-hidden text-[#201E43]">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
