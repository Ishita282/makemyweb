import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://makemyweb.com"),

  title: {
    default: "MakeMyWeb",
    template: "%s | MakeMyWeb",
  },

  description:
    "Premium websites, web applications, AI solutions, eCommerce, SEO and digital marketing.",

  keywords: [
    "Website Development",
    "Web Applications",
    "AI Integration",
    "SEO",
    "Digital Agency",
    "MakeMyWeb",
  ],

  authors: [
    {
      name: "MakeMyWeb",
    },
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={`${inter.variable} ${manrope.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
