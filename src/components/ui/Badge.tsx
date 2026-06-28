import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
}

export default function Badge({
  children,
}: BadgeProps) {
  return (
    <span className="inline-flex rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700">
      {children}
    </span>
  );
}
