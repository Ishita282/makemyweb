import {
  InputHTMLAttributes,
  ReactNode,
} from "react";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
}

export default function Input({
  icon,
  className = "",
  ...props
}: InputProps) {
  return (
    <div className="relative">
      {icon && (
        <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
          {icon}
        </div>
      )}

      <input
        {...props}
        className={`w-full rounded-xl border border-slate-300 py-3 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100 ${
          icon ? "pl-11 pr-4" : "px-4"
        } ${className}`}
      />
    </div>
  );
}
