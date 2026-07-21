import type { Metadata } from "next";
import "./globals.css";

import { Navbar, Footer } from "@/src/components/layout";
import Webby from "@/src/components/webby/Webby";

export const metadata: Metadata = {
  title: "MakeMyWeb",
  description: "Premium Digital Agency",

  icons: {
    icon: [
      {
        url: "/favicon_io/favicon.ico",
      },
      {
        url: "/favicon_io/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon_io/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: "/favicon_io/apple-touch-icon.png",
  },

  manifest: "/favicon_io/site.webmanifest",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">

      <body suppressHydrationWarning>

        <Webby />

        <Navbar />

        <main>
          {children}
        </main>

        <Footer />

      </body>

    </html>
  );
}
