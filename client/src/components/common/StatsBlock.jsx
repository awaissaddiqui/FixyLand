const stats = [
  { value: "305", label: "Luxury Rooms" },
  { value: "650", label: "Regular Guests" },
  { value: "80", label: "Team Member" },
  { value: "75", label: "Beaches" },
];

export default function StatsBlock() {
  return (
    <section className="relative bg-[var(--color-primary)] overflow-hidden">
      {/* Background Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{ 
          backgroundImage: `repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)`,
          backgroundSize: '10px 10px'
        }}
      />

      <div 
        className="relative mx-auto grid grid-cols-2 md:grid-cols-4 gap-0 py-16 px-6"
        style={{ maxWidth: "var(--max-width-container)" }}
      >
        {stats.map(({ value, label }, i) => (
          <div
            key={label}
            className={`flex flex-col items-center text-center px-4 
              ${i !== stats.length - 1 ? 'md:border-r border-dashed border-white/40' : ''}
              ${i % 2 === 0 ? 'border-r border-dashed border-white/40 md:border-r-0' : ''} 
              /* The logic above handles dotted lines for mobile (2 columns) and desktop (4 columns) */
            `}
          >
            <div className="flex items-baseline gap-1">
              <span
                className="font-heading font-bold leading-none text-transparent"
                style={{ 
                  fontSize: "clamp(3rem, 6vw, 4.5rem)",
                  WebkitTextStroke: "1px rgba(255, 255, 255, 0.8)", // Creates the outline look
                }}
              >
                {value}
              </span>
              <span 
                className="font-heading font-bold text-white"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
              >
                +
              </span>
            </div>
            <span className="text-white font-medium tracking-wide text-sm md:text-base mt-4">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}