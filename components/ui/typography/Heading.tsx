import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingVariants = cva(
  "font-heading tracking-tight text-slate-900",
  {
    variants: {
      size: {
        h1: "text-5xl md:text-6xl lg:text-7xl font-extrabold",
        h2: "text-4xl md:text-5xl font-bold",
        h3: "text-3xl font-bold",
        h4: "text-2xl font-semibold",
        h5: "text-xl font-semibold",
        h6: "text-lg font-semibold",
      },
    },

    defaultVariants: {
      size: "h2",
    },
  }
);

interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: keyof JSX.IntrinsicElements;
}

export function Heading({
  as: Component = "h2",
  size,
  className,
  ...props
}: HeadingProps) {
  return (
    <Component
      className={cn(
        headingVariants({ size }),
        className
      )}
      {...props}
    />
  );
}
