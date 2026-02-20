import { Link } from "react-router-dom";
import Container from "../../components/layout/Container";
import Button from "../../components/ui/Button";

export default function HomePage() {
  return (
    <main>
      {/* ── Hero ───────────────────────────────────────────────── */}
      <section
        className="relative bg-cover bg-center text-white flex items-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1600&auto=format&fit=crop')",
          minHeight: "90vh",
        }}
      >
        <Container className="flex flex-col gap-6 py-20">
          <span className="inline-block bg-[var(--color-primary)] text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-[var(--radius-full)] w-fit">
            Premium Resort
          </span>
          <h1
            className="font-heading font-bold leading-tight max-w-2xl"
            style={{ fontSize: "clamp(2.5rem, 6vw, var(--text-5xl))" }}
          >
            Welcome to{" "}
            <span className="text-[var(--color-primary)]">FixyLand</span>
            <br />
            Your Paradise Awaits
          </h1>
          <p
            className="text-gray-200 max-w-lg leading-relaxed"
            style={{ fontSize: "var(--text-lg)" }}
          >
            Experience world-class luxury, breathtaking ocean views, and
            hospitality that feels like home.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link to="/booking">
              <Button size="lg">Book Your Stay</Button>
            </Link>
            <Link to="/about">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[var(--color-primary)]"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* ── Quick features ─────────────────────────────────────── */}
      <section style={{ padding: "var(--spacing-section) 0" }}>
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              {
                icon: "🏖️",
                title: "Private Beaches",
                desc: "3 exclusive beaches reserved for our guests.",
              },
              {
                icon: "🍽️",
                title: "Fine Dining",
                desc: "Award-winning restaurants with ocean views.",
              },
              {
                icon: "💆",
                title: "Spa & Wellness",
                desc: "Full-service spa and fitness facilities.",
              },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="flex flex-col items-center gap-3 p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-soft)]"
              >
                <span className="text-4xl">{icon}</span>
                <h3 className="font-heading font-semibold text-xl text-[var(--color-text-primary)]">
                  {title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA Banner ─────────────────────────────────────────── */}
      <section
        className="bg-[var(--color-primary)]"
        style={{ padding: "4rem 0" }}
      >
        <Container className="text-center flex flex-col items-center gap-4 text-white">
          <h2
            className="font-heading font-bold"
            style={{ fontSize: "var(--text-3xl)" }}
          >
            Ready for an Unforgettable Stay?
          </h2>
          <p className="text-white/80 max-w-md">
            Book directly through our website for the best rates and exclusive
            perks.
          </p>
          <Link to="/booking">
            <Button variant="accent" size="lg">
              Reserve Now
            </Button>
          </Link>
        </Container>
      </section>
    </main>
  );
}
