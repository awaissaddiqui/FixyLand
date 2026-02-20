export default function ErrorBox({ message, onRetry }) {
  return (
    <div
      className="flex flex-col items-center gap-3 p-6 rounded-[var(--radius-card)] bg-[var(--color-error-light)] border border-[var(--color-error)] text-[var(--color-error)] text-center"
      role="alert"
    >
      <svg
        className="w-8 h-8 flex-shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
        />
      </svg>
      <p className="font-medium">{message || "Something went wrong."}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="text-sm underline hover:no-underline cursor-pointer"
        >
          Try again
        </button>
      )}
    </div>
  );
}
