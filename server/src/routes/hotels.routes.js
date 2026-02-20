const { Router } = require("express");
const { getHotels } = require("../controllers/hotels.controller");

const router = Router();

// GET /api/hotels
router.get("/", getHotels);

module.exports = router;
