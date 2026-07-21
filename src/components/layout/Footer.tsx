import Link from "next/link";

import Image from "next/image";

import Container from "./Container";

const services = [
  "Web Development",
  "E-commerce",
  "AI Solutions",
  "UI/UX Design",
];

const company = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <Container>
        <div className="grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
           <Link href="/" className="flex flex-col items-center">
            <Image
              src="/images/logo.webp"
              alt="MakeMyWeb Logo"
              width={56}
              height={56}
              priority
              className="h-14 w-14 object-contain bg-white rounded m-2"
            />

            <span className="-mt-2 text-base font-bold leading-none tracking-tight">
              <span className="text-blue-600">Make</span>
              <span className="text-white-900">MyWeb</span>
            </span>
          </Link>

            <p className="mt-5 leading-7 text-slate-400">
              Premium websites, AI solutions, mobile apps,
              and digital products crafted for businesses
              worldwide.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-5 font-semibold">
              Company
            </h4>

            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-400 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-5 font-semibold">
              Services
            </h4>

            <ul className="space-y-3">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-slate-400"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 font-semibold">
              Contact
            </h4>

            <div className="space-y-3 text-slate-400">
              <p>Worldwide Remote</p>
              <p>makemyweb2026@gmail.com</p>
              <p>Mon &ndash; Sat</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 py-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} MakeMyWeb. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
