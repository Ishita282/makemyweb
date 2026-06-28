import { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
  className?: string;
}

export default function Text({
  children,
  className = "",
}: TextProps) {
  return (
    <p
      className={`leading-7 text-slate-600 ${className}`}
    >
      {children}
    </p>
  );
}
