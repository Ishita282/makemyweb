import Link from "next/link";
import { ReactNode } from "react";

interface ButtonLinkProps {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function ButtonLink({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
}: ButtonLinkProps) {
  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700",
    secondary:
      "bg-emerald-600 text-white hover:bg-emerald-700",
    outline:
      "border border-slate-300 bg-white text-slate-900 hover:bg-slate-100",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </Link>
  );
}
