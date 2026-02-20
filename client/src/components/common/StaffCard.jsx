import { memo } from "react";

const StaffCard = memo(function StaffCard({ member }) {
  return (
    <div className="group bg-white rounded-[2rem] p-4 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-50">
      {/* Image Container with specific rounding */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
        <img
          src={member.photoUrl}
          alt={member.name}
          loading="lazy"
          className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
        />
        
        {/* Floating Action Button - Square with Rounded Corners */}
        <div className="absolute bottom-4 right-4 w-10 h-10 bg-[var(--color-primary)] rounded-lg flex items-center justify-center cursor-pointer shadow-lg hover:bg-black transition-colors duration-300">
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </div>
      </div>

      {/* Text Content */}
      <div className="pt-6 pb-4 px-2">
        <h3 className="font-heading font-bold text-xl text-[#111827]">
          {member.name}
        </h3>
        <div className="flex items-center gap-3 mt-2">
          {/* Accent Line */}
          <span className="w-8 h-[2px] bg-[var(--color-primary)] inline-block rounded-full" />
          <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
            {member.title}
          </span>
        </div>
      </div>
    </div>
  );
});

export default StaffCard;
