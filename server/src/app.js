const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const mongoSanitize = require("express-mongo-sanitize");
const rateLimit = require("express-rate-limit");

const routes = require("./routes");
const errorHandler = require("./middlewares/errorHandler");
const notFound = require("./middlewares/notFound");
const { FRONTEND_URL } = require("./config/env");

const app = express();

// ─── Security ────────────────────────────────────────────────────────────────
app.use(helmet());

// ─── CORS ─────────────────────────────────────────────────────────────────────
app.use(
  cors({
    origin: FRONTEND_URL || "*",
    credentials: true,
  }),
);

// ─── Rate limiting ────────────────────────────────────────────────────────────
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    error: "Too many requests – please try again later.",
  },
});
app.use("/api", limiter);

// ─── Request logging ──────────────────────────────────────────────────────────
app.use(morgan("dev"));

// ─── Body parsing ─────────────────────────────────────────────────────────────
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ─── Input sanitisation (prevent NoSQL injection) ─────────────────────────────
app.use(mongoSanitize());

// ─── API routes ───────────────────────────────────────────────────────────────
app.use("/api", routes);

// ─── 404 catch-all ────────────────────────────────────────────────────────────
app.use(notFound);

// ─── Global error handler ─────────────────────────────────────────────────────
app.use(errorHandler);

module.exports = app;
