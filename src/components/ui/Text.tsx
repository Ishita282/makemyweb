interface TextProps {
  children: React.ReactNode;
  className?: string;
}

export default function Text({
  children,
  className = "",
}: TextProps) {
  return (
    <p
      className={`text-base leading-7 text-slate-600 ${className}`}
    >
      {children}
    </p>
  );
}
