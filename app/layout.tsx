import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "oze | one-zero-eight",
  description: "project by maacro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jetBrainsMono.variable} ${inter.variable} scroll-smooth`}
    >
      <body
        className={`flex min-h-screen justify-center antialiased font-mono`}
      >
        <main className="max-w-[16000px] mt-16 py-16 px-8">{children}</main>
      </body>
    </html>
  );
}
