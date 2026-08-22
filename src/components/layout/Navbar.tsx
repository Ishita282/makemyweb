"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  User,
  LogOut,
  LayoutDashboard,
  Heart,
  ShoppingCart,
} from "lucide-react";
import { signOut, useSession } from "next-auth/react";

import Container from "./Container";
import { Button } from "@/src/components/ui";
import { Magnetic } from "@/src/components/effects";
import { StartProjectModal } from "@/src/components/sections";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pathname = usePathname();

  const { status } = useSession();

  const isLoggedIn = status === "authenticated";

  useEffect(() => {
    window.history.scrollRestoration = "manual";

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  function handleHeroClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (pathname === "/") {
      e.preventDefault();

      document.getElementById("hero")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  async function handleLogout() {
    await signOut({
      callbackUrl: "/",
    });
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-xl">
      <Container>
        <nav className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            onClick={handleHeroClick}
            className="flex flex-col items-center"
          >
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
            {links.map((link) =>
              link.label === "Home" ? (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleHeroClick}
                  className="font-medium text-slate-600 transition hover:text-blue-600"
                >
                  {link.label}
                </Link>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-medium text-slate-600 transition hover:text-blue-600"
                >
                  {link.label}
                </Link>
              ),
            )}
          </div>

          {/* Right Side */}
          <div className="hidden items-center gap-3 lg:flex">
            {!isLoggedIn && status !== "loading" && (
              <>
                <Link
                  href="/login"
                  className="rounded-xl px-4 py-2.5 font-semibold text-slate-700 transition hover:bg-slate-100"
                >
                  Login
                </Link>

                <Link
                  href="/signup"
                  className="rounded-xl border border-slate-200 px-4 py-2.5 font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Sign Up
                </Link>
              </>
            )}

            {isLoggedIn && (
              <div className="group relative">
                {/* Main dropdown button */}
                <button
                  type="button"
                  className="flex items-center gap-2 rounded-xl px-4 py-2.5 font-semibold text-slate-700 transition hover:bg-slate-100"
                >
                  <User className="h-4 w-4" />
                  Account
                  <span className="text-xs transition-transform duration-200 group-hover:rotate-180">
                    ▼
                  </span>
                </button>

                {/* Dropdown */}
                <div className="invisible absolute right-0 top-full mt-2 w-52 translate-y-2 rounded-2xl border border-slate-200 bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <Link
                    href="/saved-services"
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
                  >
                    <Heart className="h-4 w-4" />
                    Saved Services
                  </Link>

                  <Link
                    href="/cart"
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    Cart
                  </Link>

                  <Link
                    href="/dashboard"
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
                  >
                    <LayoutDashboard className="h-4 w-4" />
                    Dashboard
                  </Link>

                  <div className="my-2 h-px bg-slate-200" />

                  <button
                    type="button"
                    onClick={handleLogout}
                    className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left font-medium text-red-600 transition hover:bg-red-50"
                  >
                    <LogOut className="h-4 w-4" />
                    Logout
                  </button>
                </div>
              </div>
            )}

            <Button onClick={() => setOpen(true)}>Start Project</Button>
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-2 lg:hidden">
            <Magnetic>
              <button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="rounded-xl border border-slate-200 p-2"
                aria-label="Open navigation menu"
              >
                <Menu size={22} />
              </button>
            </Magnetic>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t border-slate-200 py-5 lg:hidden">
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-xl px-4 py-3 font-medium text-slate-700 transition hover:bg-slate-100"
                >
                  {link.label}
                </Link>
              ))}

              <div className="my-2 h-px bg-slate-200" />

              {!isLoggedIn && status !== "loading" && (
                <>
                  <Link
                    href="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 rounded-xl px-4 py-3 font-semibold text-slate-700 hover:bg-slate-100"
                  >
                    <User className="h-4 w-4" />
                    Login
                  </Link>

                  <Link
                    href="/signup"
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-xl px-4 py-3 font-semibold text-blue-600 hover:bg-blue-50"
                  >
                    Sign Up
                  </Link>
                </>
              )}

              {isLoggedIn && (
                <>
                  <Link
                    href="/dashboard"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 rounded-xl px-4 py-3 font-semibold text-slate-700 hover:bg-slate-100"
                  >
                    <LayoutDashboard className="h-4 w-4" />
                    Dashboard
                  </Link>

                  <button
                    type="button"
                    onClick={handleLogout}
                    className="flex items-center gap-2 rounded-xl px-4 py-3 text-left font-semibold text-red-600 hover:bg-red-50"
                  >
                    <LogOut className="h-4 w-4" />
                    Logout
                  </button>
                </>
              )}

              <Button
                onClick={() => {
                  setOpen(true);
                  setMobileMenuOpen(false);
                }}
              >
                Start Project
              </Button>
            </div>
          </div>
        )}
      </Container>

      <StartProjectModal open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
