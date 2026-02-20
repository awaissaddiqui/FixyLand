import * as hotelsClient from "../api/hotels.client";

/**
 * Fetch hotels with optional filters.
 * Returns { data: Hotel[], meta: Meta }
 */
export const fetchHotels = async (filters = {}) => {
  const res = await hotelsClient.getHotels(filters);
  const hotels = (res.data || []).map(normalizeHotel);
  return { data: hotels, meta: res.meta || {} };
};

export const fetchHotelById = async (id) => {
  const res = await hotelsClient.getHotelById(id);
  return normalizeHotel(res.data || res);
};

function normalizeHotel(hotel) {
  return {
    id: hotel._id || hotel.id,
    title: hotel.name || hotel.title || "Unnamed Room",
    description: hotel.description || "",
    price: hotel.price ?? hotel.pricePerNight ?? 0,
    imageUrl:
      hotel.imageUrl ||
      hotel.image ||
      hotel.photo ||
      "https://placehold.co/600x400?text=Room",
    amenities: hotel.amenities || [],
    rating: hotel.rating ?? null,
    featured: hotel.featured ?? false,
    type: hotel.type || hotel.roomType || "Standard",
  };
}
