type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>

export default function Textarea({
  className = "",
  ...props
}: TextareaProps) {
  return (
    <textarea
      {...props}
      className={`w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-200 ${className}`}
    />
  );
}
