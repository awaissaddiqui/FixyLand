import Container from "../../components/layout/Container";
import PageHero from "../../components/common/PageHero";
import StaffCard from "../../components/common/StaffCard";
import StatsBlock from "../../components/common/StatsBlock";
import { SkeletonStaffCard } from "../../components/ui/Skeleton";
import ErrorBox from "../../components/ui/ErrorBox";
import { useFetch } from "../../hooks/useFetch";
import { fetchStaff } from "../../services/staff.service";
import SectionHeading from "../../components/common/SectionHeading";
import SectionDescription from "../../components/common/SectionDescription";
import Badge from "../../components/common/Badge";
import Button from "../../components/ui/Button";

const staffCall = (p) => fetchStaff(p);

const skills = [
  { label: "Services", pct: 98 },
  { label: "Chef Master", pct: 89 },
  { label: "Design", pct: 92 },
  { label: "It Solution", pct: 99 },
];

const clientLogos = [
  "https://upload.wikimedia.org/wikipedia/commons/b/be/Booking.com_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/02/TripAdvisor_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/b/be/Booking.com_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/02/TripAdvisor_Logo.svg",
  ];

export default function AboutPage() {
  const {
    data: staff,
    loading,
    error,
    refetch,
  } = useFetch(staffCall, [], { limit: 8 });

  return (
    <main>
      <PageHero title="About Us" breadcrumb="About Us" />

      {/* ── Outdoor Activities ──────────────────────────────── */}
      <section
        className="bg-[#F9FAFB] py-20 overflow-hidden"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="flex flex-col gap-6 relative z-10">
              <Badge>Luxury Hotel</Badge>
              <SectionHeading>
                We Provide Outdoor Activities To All Visitors
              </SectionHeading>
              <SectionDescription>
                There are many variations of passages of Lorem ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even.
              </SectionDescription>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-2 py-2">
                 <div className="flex items-center gap-3">
                    <div className="w-12 h-12 flex-shrink-0">
                       <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
                         <path d="M12 42C12 42 18 36 26 36C34 36 38 42 46 42C54 42 58 36 58 36" stroke="#374151" strokeWidth="2" strokeLinecap="round"/>
                         <path d="M12 50C12 50 18 44 26 44C34 44 38 50 46 50C54 50 58 44 58 44" stroke="#374151" strokeWidth="2" strokeLinecap="round"/>
                         <circle cx="20" cy="20" r="5" stroke="#374151" strokeWidth="2"/>
                         <path d="M20 25L28 32L38 28" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                       </svg>
                    </div>
                    <span className="text-[#111827] font-bold text-lg leading-tight w-32">The Best Swiming Pool</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="w-12 h-12 flex-shrink-0">
                       <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
                          <circle cx="16" cy="44" r="7" stroke="#374151" strokeWidth="2"/>
                          <circle cx="48" cy="44" r="7" stroke="#374151" strokeWidth="2"/>
                          <path d="M23 44H41" stroke="#374151" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M32 44L28 24H20" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M28 24L42 16" stroke="#374151" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M48 28V36" stroke="#374151" strokeWidth="2" strokeLinecap="round"/>
                       </svg>
                    </div>
                    <span className="text-[#111827] font-bold text-lg leading-tight w-32">The Best Stationary Bike</span>
                 </div>
              </div>

              {/* Bullet list */}
              <ul className="flex flex-col gap-3 mt-2">
                {[
                  "It is a long fact that a reader will be distracted by the readable",
                  "Lorem Ipsum is simply dummy of the printing and industry",
                  "There are many variations of Lorem Ipsum majority",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-[15px] text-[#6B7280]"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#D1FAE5] flex items-center justify-center flex-shrink-0">
                       <svg
                         className="w-3 h-3 text-[var(--color-primary)]"
                         fill="none"
                         viewBox="0 0 24 24"
                         stroke="currentColor"
                         strokeWidth={3}
                       >
                         <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                       </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <Button to="/about" className="w-fit mt-4">
                Discover More
                <svg
                  className="w-4 h-4 ml-1"
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
              </Button>
            </div>

            {/* Right – Image Collage */}
            <div className="relative h-[600px] w-full hidden md:block">
              {/* Top Right Image - Fireplace/Indoor */}
              <div className="absolute top-0 right-0 w-[65%] h-[320px] rounded-[30px] overflow-hidden shadow-2xl z-10">
                <img
                  src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop"
                  alt="Cozy interior"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom Left Image - Pool/Resort */}
              <div className="absolute bottom-[40px] left-0 w-[55%] h-[300px] rounded-[30px] overflow-hidden shadow-2xl z-20 border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&auto=format&fit=crop"
                  alt="Outdoor pool"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Restaurants Card */}
              <div className="absolute bottom-[90px] left-[45%] w-[180px] bg-[#111827] rounded-[20px] p-6 flex flex-col items-center justify-center text-center z-30 shadow-2xl">
                 <div className="mb-3 relative w-12 h-12 flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                       <path d="M3 6C3 6 4.5 4 8 4C11.5 4 13 6 13 6V20M3 6V20" strokeLinecap="round"/>
                       <path d="M17 4V20M21 4V20M17 10H21" strokeLinecap="round"/>
                    </svg>
                 </div>
                 <h3 className="text-white font-bold text-lg mb-1 mt-2">Restaurants</h3>
                 <p className="text-[10px] text-gray-400 leading-tight">
                   Donec in quis the asd pellentesque velit.
                 </p>
              </div>
            </div>
            
            {/* Mobile Image Fallback */}
            <div className="md:hidden space-y-4">
                 <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop" className="rounded-2xl w-full h-64 object-cover" alt="Interior" />
                 <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&auto=format&fit=crop" className="rounded-2xl w-full h-64 object-cover" alt="Pool" />
            </div>
          </div>
        </Container>
      </section>

      {/* ── Stats (green) ────────────────────────────────────── */}
      <section className="bg-[var(--color-primary)]">
        <Container>
          <StatsBlock />
        </Container>
      </section>

      {/* ── Why Choose Us ────────────────────────────────────── */}
      <section style={{ padding: "var(--spacing-section) 0" }}>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            {/* Left */}
            <div className="flex flex-col gap-5">
              <Badge className="bg-transparent text-[var(--color-primary)] px-0 py-0 text-xs shadow-none tracking-widest border-none">
                Our Skills
              </Badge>
              <SectionHeading>Why Choose us?</SectionHeading>
              <SectionDescription>
                There are many variations of passages of Lorem ipsum available,
                but the majority have suffered alteration in some form by
                injected humour, or randomised words which don't look even.
              </SectionDescription>
              <div className="flex flex-col gap-4 mt-2">
                {skills.map(({ label, pct }) => (
                  <div key={label} className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-[var(--color-text-primary)]">
                        {label}
                      </span>
                      <span className="text-[var(--color-primary)] font-semibold">
                        {pct}%
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-[var(--color-primary)] transition-all duration-700"
                        style={{ width: pct + "%" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right – overlapping images */}
            <div className="relative h-80">
              <div className="absolute top-0 right-0 w-4/5 h-56 rounded-[var(--radius-card)] overflow-hidden shadow-[var(--shadow-card)]">
                <img
                  src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600&auto=format&fit=crop"
                  alt="Beach resort"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-3/5 h-44 rounded-[var(--radius-card)] overflow-hidden shadow-[var(--shadow-card)] border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&auto=format&fit=crop"
                  alt="Pool area"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Video CTA (green) ────────────────────────────────── */}
      <section
        className="relative bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(14,159,110,0.88), rgba(14,159,110,0.88)), url('https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1400&auto=format&fit=crop')",
          padding: "var(--spacing-section) 0",
        }}
      >
        <Container className="flex flex-col items-center text-center gap-6 text-white">
          <Badge className="bg-transparent text-white border-white/40">
            Amazing Experience
          </Badge>
          <SectionHeading className="max-w-xl text-white">
            Relax And Enjoy With Our Hotel &amp; Resort
          </SectionHeading>
          <button className="w-16 h-16 rounded-full bg-white/20 border-2 border-white flex items-center justify-center hover:bg-white/30 transition-colors mt-2">
            <svg
              className="w-7 h-7 text-white ml-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </Container>
      </section>

      {/* ── Staff ────────────────────────────────────────────── */}
      {/* ── Staff ────────────────────────────────────────────── */}
<section className="bg-white py-24 md:py-32">
  <Container className="flex flex-col gap-12">
    <div className="text-center flex flex-col gap-3">
      <Badge className="mx-auto border-[var(--color-primary)] shadow-none">
        Fixyland Staff
      </Badge>
      <SectionHeading>Expert Staff Persons</SectionHeading>
    </div>

    {error && <ErrorBox message={error.message} onRetry={refetch} />}

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {loading
        ? Array.from({ length: 4 }).map((_, i) => <SkeletonStaffCard key={i} />)
        : (staff || []).map((member) => (
            <StaffCard key={member.id} member={member} />
          ))}
    </div>
  </Container>
</section>

      {/* ── Clients (light gray) ─────────────────────────────── */}
      {/* ── Our Clients ────────────────────────────────────────── */}
<section 
  className="bg-[#eef5f3] py-24 md:py-32" 
  style={{ backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, transparent 70%)' }}
>
  <Container className="flex flex-col gap-12">
    {/* Heading Group */}
    <div className="text-center flex flex-col gap-4">
      <SectionHeading>Our Clients</SectionHeading>  
      <SectionDescription>We Have More Than 150+ Global Clients</SectionDescription>
    </div>

    {/* Logos Grid */}
    <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
      {clientLogos.map((src, i) => (
        <div
          key={i}
          className="w-24 md:w-32 flex items-center justify-center group"
        >
          <img
            src={src}
            alt={`Client ${i + 1}`}
            loading="lazy"
            className="max-h-16 w-auto object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 cursor-pointer"
          />
        </div>
      ))}
    </div>
  </Container>
</section>
    </main>
  );
}
