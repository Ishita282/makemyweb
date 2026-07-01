interface GridBackgroundProps {
  className?: string;
}

export default function GridBackground({
  className = "",
}: GridBackgroundProps) {
  return (
    <div
      aria-hidden
      className={`
        absolute inset-0
        -z-10
        opacity-40
        ${className}
      `}
    >
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)]
          bg-[size:48px_48px]
        "
      />
    </div>
  );
}
