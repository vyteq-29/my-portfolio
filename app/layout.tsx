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
  title: "Vyteq Technology Solutions | AI Agents, Web Development & Automation",
  description:
    "Vyteq Technology Solutions provides AI Agents, Web Development, Software Development, RAG Systems, Automation and Enterprise Solutions.",

  keywords: [
    "AI Agents",
    "Web Development",
    "Software Development",
    "Next.js Development",
    "React Development",
    "RAG AI",
    "Automation",
    "Vyteq",
  ],

  authors: [{ name: "Vyteq Technology Solutions" }],

  openGraph: {
    title:
      "Vyteq Technology Solutions | AI Agents, Web Development & Automation",
    description:
      "Custom Web Applications, Enterprise Software and AI Agent Solutions.",
    url: "https://www.vyteq.in",
    siteName: "Vyteq Technology Solutions",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Vyteq Technology Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Vyteq Technology Solutions | AI Agents, Web Development & Automation",
    description:
      "Custom Web Applications, Enterprise Software and AI Agent Solutions.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "https://www.vyteq.in",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
