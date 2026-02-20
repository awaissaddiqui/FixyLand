const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    roomId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hotel",
      required: true,
    },
    checkIn: { type: Date, required: true },
    checkOut: { type: Date, required: true },
    message: { type: String, default: "" },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: false },
);

appointmentSchema.index({ roomId: 1 });

appointmentSchema.index({ email: 1, createdAt: -1 });

module.exports = mongoose.model("Appointment", appointmentSchema);
