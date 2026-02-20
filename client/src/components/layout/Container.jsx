import cn from "classnames";

export default function Container({ children, className, ...props }) {
  return (
    <div
      className={cn("mx-auto w-full px-4 sm:px-6 lg:px-8", className)}
      style={{ maxWidth: "var(--max-width-container)" }}
      {...props}
    >
      {children}
    </div>
  );
}
