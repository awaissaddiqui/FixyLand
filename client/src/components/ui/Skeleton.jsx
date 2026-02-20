import cn from "classnames";

export default function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn(
        "bg-gray-200 animate-pulse rounded-[var(--radius-sm)]",
        className,
      )}
      {...props}
    />
  );
}

export function SkeletonCard() {
  return (
    <div className="bg-white rounded-[var(--radius-card)] shadow-[var(--shadow-soft)] overflow-hidden">
      <Skeleton className="h-52 w-full rounded-none" />
      <div className="p-5 flex flex-col gap-3">
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-10 w-1/2 mt-2" />
      </div>
    </div>
  );
}

export function SkeletonStaffCard() {
  return (
    <div className="bg-white rounded-[var(--radius-card)] shadow-[var(--shadow-soft)] p-6 flex flex-col items-center gap-3">
      <Skeleton className="h-24 w-24 rounded-full" />
      <Skeleton className="h-5 w-32" />
      <Skeleton className="h-4 w-24" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-4/5" />
    </div>
  );
}
