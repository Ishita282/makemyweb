"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import Image from "next/image";

import Container from "./Container";
import { Button } from "@/src/components/ui";
import { Magnetic } from "@/src/components/effects";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-xl">
      <Container>
        <nav className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-center">
            <Image
              src="/images/logo.webp"
              alt="MakeMyWeb Logo"
              width={56}
              height={56}
              priority
              className="h-14 w-14 object-contain"
            />

            <span className="-mt-2 text-base font-bold leading-none tracking-tight">
              <span className="text-blue-600">Make</span>
              <span className="text-slate-900">MyWeb</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-medium text-slate-600 transition hover:text-blue-600"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <Magnetic>
              <Button href="/contact">Start Project</Button>
            </Magnetic>
          </div>

          {/* Mobile Button */}
          <Magnetic>
            <button
              className="rounded-xl border border-slate-200 p-2 lg:hidden"
              aria-label="Open navigation menu"
            >
              <Menu size={22} />
            </button>
          </Magnetic>
        </nav>
      </Container>
    </header>
  );
}
