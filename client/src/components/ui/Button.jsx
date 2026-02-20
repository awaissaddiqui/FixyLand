import { Link } from "react-router-dom";
import cn from "classnames";

const variants = {
  primary:
    "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] shadow-sm hover:shadow-lg transform hover:-translate-y-0.5 focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2 transition-all duration-300",
  outline:
    "border-2 border-[var(--color-primary)] text-[var(--color-primary)] bg-transparent hover:bg-[var(--color-primary)] hover:text-white focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2 hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-300",
  ghost:
    "text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary-light)] transition-colors duration-200",
  accent:
    "bg-[var(--color-accent)] text-[#111827] font-bold hover:bg-white hover:text-[#111827] shadow-lg transform hover:-translate-y-0.5 focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 transition-all duration-300",
};

const sizes = {
  sm: "px-4 py-2 text-xs",
  md: "px-8 py-4 text-sm font-bold",
  lg: "px-10 py-5 text-base font-bold",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  disabled,
  loading,
  type = "button",
  to,
  href,
  ...props
}) {
  const commonClasses = cn(
    "inline-flex items-center justify-center gap-2 rounded-md cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none flex-shrink-0",
    variants[variant],
    sizes[size],
    className
  );

  const content = (
    <>
      {loading && (
        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      )}
      {children}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={commonClasses} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={commonClasses} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={commonClasses}
      {...props}
    >
      {content}
    </button>
  );
}
