export default function ContactCard() {
  return (
    <div className="bg-[var(--color-surface)] rounded-[var(--radius-card)] shadow-[var(--shadow-card)] overflow-hidden">
      {/* Room image */}
      <div className="h-44 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&auto=format&fit=crop"
          alt="Hotel room"
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info */}
      <div className="p-6 flex flex-col items-center text-center gap-3 bg-[var(--color-primary)]">
        <a
          href="tel:+19876543210"
          className="font-heading font-bold text-2xl text-white hover:opacity-90 transition-opacity"
        >
          (+1) 987 654 3210
        </a>
        <div className="text-sm text-white/80 flex flex-col gap-0.5">
          <span>Mon-Fri: 7.00 am – 9.00 pm</span>
          <span>24/7 Service Available</span>
        </div>
        <a
          href="tel:+19876543210"
          className="flex items-center gap-2 bg-[var(--color-accent)] text-white text-sm font-semibold px-6 py-2.5 rounded-sm hover:opacity-90 transition-opacity mt-1"
        >
          Call Us Now
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
