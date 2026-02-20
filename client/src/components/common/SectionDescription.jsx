import cn from "classnames";

export default function SectionDescription({
  children,
  className,
  as: Component = "p",
  ...props
}) {
  return (
    <Component
      className={cn(
        "text-[15px] text-[#6B7280] leading-relaxed",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
