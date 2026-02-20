import cn from "classnames";

export default function SectionHeading({
  children,
  className,
  as: Component = "h2",
  ...props
}) {
  return (
    <Component
      className={cn(
        "font-heading font-extrabold text-3xl md:text-4xl lg:text-[42px] text-[#111827] leading-[1.2]",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
