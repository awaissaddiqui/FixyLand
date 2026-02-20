const { Router } = require("express");

const staffRoutes = require("./staff.routes");
const hotelsRoutes = require("./hotels.routes");
const appointmentRoutes = require("./appointment.routes");

const router = Router();

router.use("/staff", staffRoutes);
router.use("/hotels", hotelsRoutes);
router.use("/appointments", appointmentRoutes);

module.exports = router;
