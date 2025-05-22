import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
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
    <html lang="en" className={`${jetBrainsMono.variable}`}>
      <body className={`flex min-h-screen justify-center antialiased`}>
        <main className="w-[780px] mt-16 py-16 px-6 md:px-0">{children}</main>
      </body>
    </html>
  );
}
