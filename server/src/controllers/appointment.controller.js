const appointmentService = require("../services/appointment.service");
const asyncHandler = require("../middlewares/asyncHandler");
const { successResponse } = require("../utils/response");

const createAppointment = asyncHandler(async (req, res) => {
  const appointment = await appointmentService.create(req.body);

  return successResponse(res, {
    statusCode: 201,
    data: { appointment },
    message: "Appointment created",
  });
});

module.exports = { createAppointment };
