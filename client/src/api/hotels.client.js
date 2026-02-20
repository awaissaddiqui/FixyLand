import api from "./axios";

export const getHotels = (params = {}) => api.get("/hotels", { params });
export const getHotelById = (id) => api.get(`/hotels/${id}`);
