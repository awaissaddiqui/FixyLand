export default function PageHero({ title, breadcrumb }) {
  return (
    <section
      className="relative bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1600&auto=format&fit=crop')",
        padding: "5rem 0 3.5rem",
      }}
    >
      <div className="mx-auto px-6" style={{ maxWidth: "var(--max-width-container)" }}>
        <h1 className="font-heading font-bold text-4xl md:text-5xl mb-3">{title}</h1>
        <p className="text-sm text-gray-300">
          <span className="text-[var(--color-primary)]">Home</span>
          <span className="mx-2 opacity-60">&rsaquo;</span>
          {breadcrumb}
        </p>
      </div>
    </section>
  );
}
