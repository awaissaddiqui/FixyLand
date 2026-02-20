import api from "./axios";

export const createAppointment = (payload) =>
  api.post("/appointments", payload);
