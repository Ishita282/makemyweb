interface ProjectProgressProps {
  step: number;
  totalSteps: number;
}

export default function ProjectProgress({
  step,
  totalSteps,
}: ProjectProgressProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-slate-600">
          Step {step} of {totalSteps}
        </span>

        <span className="text-blue-600">
          {Math.round((step / totalSteps) * 100)}%
        </span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-500"
          style={{
            width: `${(step / totalSteps) * 100}%`,
          }}
        />
      </div>
    </div>
  );
}
