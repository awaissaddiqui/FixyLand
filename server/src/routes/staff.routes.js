const { Router } = require("express");
const { getStaff } = require("../controllers/staff.controller");

const router = Router();

// GET /api/staff
router.get("/", getStaff);

module.exports = router;
