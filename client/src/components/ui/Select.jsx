import cn from "classnames";
import { forwardRef } from "react";

const Select = forwardRef(function Select(
  {
    label,
    error,
    className,
    id,
    required,
    options = [],
    placeholder,
    ...props
  },
  ref,
) {
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
      <select
        id={id}
        ref={ref}
        className={cn(
          "w-full px-4 py-3 rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-primary)] transition focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent appearance-none cursor-pointer",
          error &&
            "border-[var(--color-error)] focus:ring-[var(--color-error)]",
          className,
        )}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="text-xs text-[var(--color-error)]">{error}</p>}
    </div>
  );
});

export default Select;
