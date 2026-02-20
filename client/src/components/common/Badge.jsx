import cn from "classnames";

export default function Badge({
  children,
  className,
  as: Component = "span",
  ...props
}) {
  return (
    <Component
      className={cn(
        "bg-white text-[var(--color-primary)] text-[11px] font-extrabold uppercase tracking-[0.2em] px-3 py-2 rounded-sm w-fit shadow-sm border border-transparent",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
