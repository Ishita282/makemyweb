import type { Metadata } from "next";
import "./globals.css";

import { Navbar, Footer } from "@/src/components/layout";

export const metadata: Metadata = {
  title: "MakeMyWeb",
  description: "Premium Digital Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>

        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
