import { useCallback } from "react";
import Container from "../../components/layout/Container";
import PageHero from "../../components/common/PageHero";
import BookingForm from "../../components/common/BookingForm";
import ContactCard from "../../components/common/ContactCard";
import RoomCard from "../../components/common/RoomCard";
import { SkeletonCard } from "../../components/ui/Skeleton";
import ErrorBox from "../../components/ui/ErrorBox";
import { useFetch } from "../../hooks/useFetch";
import { useFormSubmit } from "../../hooks/useFormSubmit";
import { fetchHotels } from "../../services/hotels.service";
import { createAppointment } from "../../services/appointment.service";
import SectionHeading from "../../components/common/SectionHeading";
import Badge from "../../components/common/Badge";

const hotelsCall = (p) => fetchHotels(p);
const hotelsParams = { limit: 3, sort: "-rating" };

export default function BookingPage() {
  const {
    data: hotels,
    loading: hotelsLoading,
    error: hotelsError,
    refetch,
  } = useFetch(hotelsCall, [], hotelsParams);

  const handleSubmit = useCallback((payload) => createAppointment(payload), []);
  const {
    submit,
    loading: submitLoading,
    error: submitError,
    success: submitSuccess,
  } = useFormSubmit(handleSubmit);

  return (
    <main>
      <PageHero title="Booking" breadcrumb="Booking" />

      {/* ── Make an Appointment ─────────────────────────────── */}
      <section
        className="bg-[var(--color-surface-soft)]"
        style={{ padding: "var(--spacing-section) 0" }}
      >
        <Container className="flex flex-col gap-8">
          <div className="text-center flex flex-col gap-2">
            <Badge className="mx-auto">Stay With Us</Badge> 
            <SectionHeading>Make An Appointment</SectionHeading>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <BookingForm
                rooms={hotels || []}
                onSubmit={submit}
                loading={submitLoading}
                submitError={submitError}
                submitSuccess={submitSuccess}
              />
            </div>
            <div className="sticky top-24">
              <ContactCard />
            </div>
          </div>
        </Container>
      </section>

      {/* ── Our Best Rooms (green bg) ───────────────────────── */}
      <section
        className="bg-[var(--color-primary)]"
        style={{ padding: "var(--spacing-section) 0" }}
      >
        <Container className="flex flex-col gap-10">
          <div className="text-center flex flex-col gap-2">
            <Badge className="mx-auto">Our Best Rooms</Badge>
            <SectionHeading className="text-white">Luxury Rooms and Resort</SectionHeading>
          </div>

          {hotelsError && (
            <div className="bg-white/10 rounded-[var(--radius-card)] p-4">
              <ErrorBox message={hotelsError.message} onRetry={refetch} />
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotelsLoading
              ? Array.from({ length: 3 }).map((_, i) => (
                  <SkeletonCard key={i} />
                ))
              : (hotels || []).map((hotel) => (
                  <RoomCard key={hotel.id} hotel={hotel} />
                ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
