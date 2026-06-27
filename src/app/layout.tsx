import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";

import "./globals.css";

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const headingFont = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MakeMyWeb",
    template: "%s | MakeMyWeb",
  },

  description:
    "MakeMyWeb builds premium websites, web applications, AI-powered solutions, eCommerce stores, and digital experiences for businesses worldwide.",

  keywords: [
    "Website Development",
    "Web Development",
    "Web Applications",
    "AI Integration",
    "E-commerce",
    "SEO",
    "Google Ads",
    "Meta Ads",
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
    <html lang="en">
      <body
        className={`${bodyFont.variable} ${headingFont.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
