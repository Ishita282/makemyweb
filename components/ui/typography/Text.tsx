import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const textVariants = cva("", {
  variants: {
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
    },

    tone: {
      default: "text-slate-700",
      muted: "text-slate-500",
      white: "text-white",
    },
  },

  defaultVariants: {
    size: "md",
    tone: "default",
  },
});

interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {}

export function Text({
  className,
  size,
  tone,
  ...props
}: TextProps) {
  return (
    <p
      className={cn(
        textVariants({
          size,
          tone,
        }),
        className
      )}
      {...props}
    />
  );
}
