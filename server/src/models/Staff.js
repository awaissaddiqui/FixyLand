const mongoose = require("mongoose");

const staffSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    title: { type: String, required: true, trim: true },
    bio: { type: String, default: "" },
    photoUrl: { type: String, default: "" },
    role: { type: String, required: true, trim: true },
    featured: { type: Boolean, default: false },
  },
  { timestamps: true },
);

staffSchema.index({ role: 1 });

staffSchema.index({ name: "text", bio: "text" });

module.exports = mongoose.model("Staff", staffSchema);
