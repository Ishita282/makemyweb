import React from 'react';

interface HeadingProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4;
  className?: string;
}

export default function Heading({
  children,
  level = 2,
  className = "",
}: HeadingProps) {
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;

  const styles = {
    1: "text-5xl md:text-6xl lg:text-7xl font-extrabold",
    2: "text-4xl md:text-5xl font-bold",
    3: "text-2xl font-semibold",
    4: "text-xl font-semibold",
  };

  return (
    <Tag className={`${styles[level]} text-slate-900 ${className}`}>
      {children}
    </Tag>
  );
}
