
import { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Text({
  children,
  size = "md",
  className = "",
}: TextProps) {
  const sizes = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  return (
    <p
      className={`leading-8 text-slate-600 ${sizes[size]} ${className}`}
    >
      {children}
    </p>
  );
}
