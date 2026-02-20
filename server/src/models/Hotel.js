const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, default: "" },
    pricePerNight: { type: Number, required: true, min: 0 },
    city: { type: String, required: true, trim: true },
    amenities: [{ type: String }],
    images: [{ type: String }],
    rooms: { type: Number, default: 0 },
    rating: { type: Number, default: 0, min: 0, max: 5 },
  },
  { timestamps: true },
);

hotelSchema.index({ city: 1 });
hotelSchema.index({ pricePerNight: 1 });

hotelSchema.index({ title: "text", description: "text" });

module.exports = mongoose.model("Hotel", hotelSchema);
