import { memo } from "react";
import { Link } from "react-router-dom";

const RoomCard = memo(function RoomCard({ hotel }) {
  return (
    <div className="bg-white rounded-[20px] overflow-hidden shadow-lg group hover:-translate-y-2 transition-transform duration-300">
      {/* Image Container */}
      <div className="relative h-[250px] overflow-hidden">
        <img
          src={hotel.imageUrl}
          alt={hotel.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-[var(--color-primary)] text-white text-xs font-bold px-4 py-2 rounded-sm shadow-md">
          ${hotel.price} / Night
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-4">
        <h3 className="font-heading font-bold text-2xl text-[#111827]">
          {hotel.title}
        </h3>

        {/* Amenities */}
        <div className="flex items-center gap-6 text-[#6B7280] text-sm font-medium border-b border-gray-100 pb-4">
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
            </svg>
            2 Guests
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
              <path fillRule="evenodd" d="M1 14a1 1 0 011-1h16a1 1 0 110 2H2a1 1 0 01-1-1zM3 10h14v2H3v-2z" clipRule="evenodd" />
            </svg>
            {hotel.beds || 2} Beds
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 20 20">
               <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
            </svg>
            1 Bath
          </span>
        </div>

        <p className="text-[#6B7280] text-[15px] leading-relaxed line-clamp-2">
          {hotel.description || "There are many variations of passages of Lorem Ipsum available, but the majority have suffered."}
        </p>

        <Link
          to="/booking"
          className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-white text-sm font-bold px-6 py-3 rounded-md hover:bg-[var(--color-primary-dark)] transition-all transform hover:-translate-y-1 w-fit mt-2 shadow-lg"
        >
          Read More
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
});

export default RoomCard;
