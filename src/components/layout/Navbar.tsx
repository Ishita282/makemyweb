import Link from "next/link";
import Container from "./Container";

const navLinks = [
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <Container>
        <nav className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold"
          >
            MakeMyWeb
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-slate-700 transition hover:text-blue-600"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
