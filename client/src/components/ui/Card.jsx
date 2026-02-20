import cn from "classnames";

export default function Card({ children, className, hover = true, ...props }) {
  return (
    <div
      className={cn(
        "bg-[var(--color-surface)] rounded-[var(--radius-card)] shadow-[var(--shadow-soft)] overflow-hidden",
        hover &&
          "transition-all duration-300 hover:shadow-[var(--shadow-hover)] hover:-translate-y-1",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
