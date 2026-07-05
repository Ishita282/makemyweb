interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export default function Section({
  children,
  className = "",
  ...props
}: SectionProps) {
  return (
    <section
      {...props}
      className={`py-24 lg:py-32 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
