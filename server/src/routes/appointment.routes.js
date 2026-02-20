const { Router } = require("express");
const { body } = require("express-validator");
const { createAppointment } = require("../controllers/appointment.controller");
const validateRequest = require("../middlewares/validateRequest");

// ─── Validation rules ─────────────────────────────────────────────────────────
const appointmentValidations = [
  body("firstName").trim().notEmpty().withMessage("First name is required"),

  body("lastName").trim().notEmpty().withMessage("Last name is required"),

  body("email")
    .isEmail()
    .normalizeEmail()
    .withMessage("A valid email address is required"),

  body("phone").trim().notEmpty().withMessage("Phone number is required"),

  body("roomId")
    .notEmpty()
    .isMongoId()
    .withMessage("A valid hotel/room ID is required"),

  body("checkIn")
    .isISO8601()
    .toDate()
    .withMessage("Check-in must be a valid date (ISO 8601)"),

  body("checkOut")
    .isISO8601()
    .toDate()
    .withMessage("Check-out must be a valid date (ISO 8601)"),

  body("message").optional().trim(),
];

const router = Router();

router.post("/", validateRequest(appointmentValidations), createAppointment);

module.exports = router;
