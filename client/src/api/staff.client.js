import api from "./axios";

export const getStaff = (params = {}) => api.get("/staff", { params });
export const getStaffById = (id) => api.get(`/staff/${id}`);
