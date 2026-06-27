import { cn } from "@/lib/utils";

interface DisplayProps {
  children: React.ReactNode;
  className?: string;
}

export function Display({
  children,
  className,
}: DisplayProps) {
  return (
    <h1
      className={cn(
        "font-heading text-6xl md:text-8xl font-black tracking-tight",
        className
      )}
    >
      {children}
    </h1>
  );
}
