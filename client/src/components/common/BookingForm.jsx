import { useForm } from "react-hook-form";
import Input from "../ui/Input";
import Select from "../ui/Select";
import Textarea from "../ui/Textarea";
import ErrorBox from "../ui/ErrorBox";

const SERVICE_TYPES = [
  { value: "hotel", label: "Hotel Room" },
  { value: "villa", label: "Private Villa" },
  { value: "suite", label: "Luxury Suite" },
  { value: "bungalow", label: "Beach Bungalow" },
];

export default function BookingForm({
  rooms = [],
  onSubmit,
  loading,
  submitError,
  submitSuccess,
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: { roomId: "" } });

  const roomOptions = rooms.map((r) => ({ value: r.id, label: r.title }));

  const handleFormSubmit = async (data) => {
    await onSubmit(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      noValidate
      className="bg-[var(--color-surface)] rounded-[var(--radius-card)] shadow-[var(--shadow-card)] p-6 md:p-8 flex flex-col gap-5"
    >
      {/* Name row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          id="firstName"
          label="First Name"
          placeholder="Ex. first name"
          required
          error={errors.firstName?.message}
          {...register("firstName", {
            required: "First name is required",
            minLength: { value: 2, message: "Min 2 chars" },
          })}
        />
        <Input
          id="lastName"
          label="Last Name"
          placeholder="Ex. last name"
          required
          error={errors.lastName?.message}
          {...register("lastName", {
            required: "Last name is required",
            minLength: { value: 2, message: "Min 2 chars" },
          })}
        />
      </div>

      {/* Contact row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          id="email"
          type="email"
          label="Email"
          placeholder="Ex. info@domain.com"
          required
          error={errors.email?.message}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email",
            },
          })}
        />
        <Input
          id="phone"
          type="tel"
          label="Phone Number"
          placeholder="Ex. (+1) 987 654 3210"
          required
          error={errors.phone?.message}
          {...register("phone", {
            required: "Phone is required",
            pattern: { value: /^[+\d\s\-()]{7,15}$/, message: "Invalid phone" },
          })}
        />
      </div>

      {/* Type & Room */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Select
          id="selectType"
          label="Select Type"
          placeholder="Select Type"
          options={SERVICE_TYPES}
          required
          error={errors.selectType?.message}
          {...register("selectType", { required: "Please select a type" })}
        />
        <Select
          id="roomId"
          label="Select Room"
          placeholder="Select Room"
          options={
            roomOptions.length
              ? roomOptions
              : [{ value: "", label: "No rooms available" }]
          }
          error={errors.roomId?.message}
          {...register("roomId", { required: "Please select a room" })}
        />
      </div>

      {/* Dates */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          id="checkIn"
          type="date"
          label="Check In"
          required
          error={errors.checkIn?.message}
          {...register("checkIn", { required: "Check-in date required" })}
        />
        <Input
          id="checkOut"
          type="date"
          label="Check Out"
          required
          error={errors.checkOut?.message}
          {...register("checkOut", { required: "Check-out date required" })}
        />
      </div>

      {/* Message */}
      <Textarea
        id="message"
        label="Message"
        placeholder="Ex. type message"
        rows={5}
        error={errors.message?.message}
        {...register("message", {
          maxLength: { value: 500, message: "Max 500 chars" },
        })}
      />

      {submitError && <ErrorBox message={submitError} />}
      {submitSuccess && (
        <div className="p-4 rounded-[var(--radius-sm)] bg-[var(--color-success-light)] border border-[var(--color-success)] text-[var(--color-success)] text-sm font-medium">
          ✓ {submitSuccess}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="flex items-center gap-2 bg-[var(--color-primary)] text-white font-semibold px-7 py-3.5 rounded-sm  hover:bg-[var(--color-primary-dark)] transition-colors disabled:opacity-60 disabled:cursor-not-allowed w-fit mt-1"
      >
        {loading && (
          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
        )}
        Book Appointment
        {!loading && (
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
        )}
      </button>
    </form>
  );
}
