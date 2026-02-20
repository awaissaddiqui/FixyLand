require("dotenv").config({
  path: require("path").resolve(__dirname, "../../.env"),
});

const mongoose = require("mongoose");
const { MONGO_URI } = require("../config/env");
const Staff = require("../models/Staff");
const Hotel = require("../models/Hotel");
const logger = require("../utils/logger");

// ─── Sample staff data ────────────────────────────────────────────────────────
const staffData = [
  {
    name: "Alice Johnson",
    title: "Head Concierge",
    bio: "Alice brings 12 years of luxury hospitality experience and a passion for personalised guest service.",
    photoUrl: "https://i.pravatar.cc/150?img=1",
    role: "concierge",
    featured: true,
  },
  {
    name: "Bob Martinez",
    title: "Executive Chef",
    bio: "Award-winning chef specialising in Mediterranean fusion cuisine with a focus on locally-sourced ingredients.",
    photoUrl: "https://i.pravatar.cc/150?img=2",
    role: "chef",
    featured: true,
  },
  {
    name: "Clara Lee",
    title: "Spa & Wellness Manager",
    bio: "Certified holistic therapist dedicated to creating a tranquil, restorative experience for every guest.",
    photoUrl: "https://i.pravatar.cc/150?img=3",
    role: "spa",
    featured: true,
  },
  {
    name: "David Kim",
    title: "Events Coordinator",
    bio: "David has orchestrated over 300 events – from intimate weddings to large corporate conferences.",
    photoUrl: "https://i.pravatar.cc/150?img=4",
    role: "events",
    featured: false,
  },
  {
    name: "Sophie Müller",
    title: "Front Office Manager",
    bio: "Trilingual hospitality professional ensuring seamless check-in experiences across all our properties.",
    photoUrl: "https://i.pravatar.cc/150?img=5",
    role: "front-office",
    featured: false,
  },
];

// ─── Sample hotel data ────────────────────────────────────────────────────────
const hotelData = [
  {
    title: "The Grand Palace",
    description:
      "A magnificent 5-star property nestled in the heart of Paris, offering unrivalled views of the Eiffel Tower.",
    pricePerNight: 450,
    city: "Paris",
    amenities: [
      "Free Wi-Fi",
      "Rooftop Pool",
      "Full-Service Spa",
      "Fine-Dining Restaurant",
      "Gym",
    ],
    images: ["https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800"],
    rooms: 120,
    rating: 4.8,
  },
  {
    title: "Ocean Breeze Resort",
    description:
      "A sun-drenched beachfront resort in Barcelona where the Mediterranean is your backyard.",
    pricePerNight: 280,
    city: "Barcelona",
    amenities: [
      "Free Wi-Fi",
      "Private Beach",
      "Swim-Up Bar",
      "Water Sports",
      "Parking",
    ],
    images: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
    ],
    rooms: 85,
    rating: 4.5,
  },
  {
    title: "Mountain Retreat Inn",
    description:
      "A cosy alpine lodge in Innsbruck – the perfect base for skiing, hiking, and mountain biking.",
    pricePerNight: 190,
    city: "Innsbruck",
    amenities: [
      "Free Wi-Fi",
      "Stone Fireplace",
      "Ski Storage",
      "Breakfast Included",
      "Sauna",
    ],
    images: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
    ],
    rooms: 40,
    rating: 4.6,
  },
  {
    title: "City Lights Boutique Hotel",
    description:
      "A stylish boutique property moments from iconic London landmarks, perfect for business and leisure alike.",
    pricePerNight: 320,
    city: "London",
    amenities: [
      "Free Wi-Fi",
      "Rooftop Bar",
      "24-hr Concierge",
      "Business Centre",
      "Pet-Friendly",
    ],
    images: [
      "https://images.unsplash.com/photo-1488747279002-c8523379faaa?w=800",
    ],
    rooms: 60,
    rating: 4.3,
  },
  {
    title: "Desert Oasis Hotel",
    description:
      "An exotic 5-star retreat surrounded by golden dunes on the outskirts of Dubai, blending Arabian heritage with modern luxury.",
    pricePerNight: 520,
    city: "Dubai",
    amenities: [
      "Free Wi-Fi",
      "Private Pool",
      "Desert Safari Tours",
      "Full-Service Spa",
      "Gym",
      "Butler Service",
    ],
    images: [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800",
    ],
    rooms: 200,
    rating: 4.9,
  },
  {
    title: "Harbour View Suites",
    description:
      "Contemporary suites overlooking Sydney Harbour with direct access to ferry terminals and the opera district.",
    pricePerNight: 360,
    city: "Sydney",
    amenities: [
      "Free Wi-Fi",
      "Harbour-View Terrace",
      "Infinity Pool",
      "Breakfast Buffet",
      "Parking",
    ],
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
    ],
    rooms: 75,
    rating: 4.7,
  },
];

// ─── Seed runner ──────────────────────────────────────────────────────────────
const seed = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    logger.info("Connected to MongoDB – starting seed...");

    // Drop existing data (only Staff and Hotel; leave Appointments intact)
    await Staff.deleteMany({});
    await Hotel.deleteMany({});
    logger.info("Cleared existing Staff and Hotel collections.");

    // Insert fresh data
    const insertedStaff = await Staff.insertMany(staffData);
    const insertedHotels = await Hotel.insertMany(hotelData);

    logger.info(`Seeded ${insertedStaff.length} staff members.`);
    logger.info(`Seeded ${insertedHotels.length} hotels.`);
    logger.info("Seed complete.");
  } catch (err) {
    logger.error("Seed failed:", err.message);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
    logger.info("Disconnected from MongoDB.");
  }
};

seed();
