import cn from "classnames";

export default function Textarea({
  label,
  error,
  className,
  id,
  required,
  ...props
}) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label
          htmlFor={id}
          className="text-sm font-medium text-[var(--color-text-primary)]"
        >
          {label}
          {required && (
            <span className="text-[var(--color-error)] ml-1">*</span>
          )}
        </label>
      )}
      <textarea
        id={id}
        className={cn(
          "w-full px-4 py-3 rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] transition focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent resize-none",
          error &&
            "border-[var(--color-error)] focus:ring-[var(--color-error)]",
          className,
        )}
        {...props}
      />
      {error && <p className="text-xs text-[var(--color-error)]">{error}</p>}
    </div>
  );
}
