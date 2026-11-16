import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Green Delta Insurance Company (GDIC) — Product Portfolio",
  description:
    "Standardized product portfolio for Green Delta Insurance Company Limited. Explore 45 non-life insurance products categorized by Market Segment and Risk Category.",
  keywords: [
    "Green Delta Insurance",
    "GDIC",
    "Insurance Bangladesh",
    "Corporate Insurance",
    "SME Insurance",
    "Retail Insurance",
    "Engineering Insurance",
    "Fire Insurance",
    "Marine Cargo",
  ],
  authors: [{ name: "Green Delta Insurance Company Limited" }],
  icons: {
    icon: "/logos/logo-green.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-slate-50 text-slate-900 selection:bg-emerald-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
