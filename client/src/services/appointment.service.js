import * as appointmentClient from "../api/appointment.client";

/**
 * Create a new appointment booking.
 * @param {object} payload - form data
 * Returns { data: Appointment, message: string }
 */
export const createAppointment = async (payload) => {
  const res = await appointmentClient.createAppointment(payload);
  return { data: res.data, message: res.message || "Appointment created!" };
};
