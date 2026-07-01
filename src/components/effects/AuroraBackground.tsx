interface AuroraBackgroundProps {
  className?: string;
}

export default function AuroraBackground({
  className = "",
}: AuroraBackgroundProps) {
  return (
    <div
      aria-hidden
      className={`absolute inset-0 -z-20 overflow-hidden ${className}`}
    >
      {/* Left Blob */}
      <div
        className="
          absolute
          left-[-10%]
          top-[-10%]
          h-[32rem]
          w-[32rem]
          rounded-full
          bg-blue-500/20
          blur-[120px]
          animate-float
        "
      />

      {/* Right Blob */}
      <div
        className="
          absolute
          right-[-10%]
          bottom-[-10%]
          h-[28rem]
          w-[28rem]
          rounded-full
          bg-cyan-400/20
          blur-[120px]
          animate-float-delayed
        "
      />
    </div>
  );
}
