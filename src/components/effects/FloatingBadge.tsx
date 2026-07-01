import { ReactNode } from "react";

interface FloatingBadgeProps {
  icon: ReactNode;
  children: ReactNode;
  className?: string;
}

export default function FloatingBadge({
  icon,
  children,
  className = "",
}: FloatingBadgeProps) {
  return (
    <div
      className={`
        flex items-center gap-3
        rounded-2xl
        border border-slate-200
        bg-white/90
        px-4 py-3
        shadow-xl
        backdrop-blur-md
        ${className}
      `}
    >
      <span className="text-xl">{icon}</span>

      <span className="text-sm font-semibold text-slate-700">
        {children}
      </span>
    </div>
  );
}
