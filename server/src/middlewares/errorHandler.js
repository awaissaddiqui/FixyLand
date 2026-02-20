const { errorResponse } = require("../utils/response");
const logger = require("../utils/logger");

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  logger.error(`${req.method} ${req.originalUrl} – ${err.message}`, err.stack);

  // Mongoose model validation error
  if (err.name === "ValidationError") {
    const details = Object.fromEntries(
      Object.entries(err.errors).map(([k, v]) => [k, v.message]),
    );
    return errorResponse(res, {
      statusCode: 400,
      message: "Validation failed",
      details,
    });
  }

  // Invalid Mongoose ObjectId
  if (err.name === "CastError") {
    return errorResponse(res, {
      statusCode: 400,
      message: `Invalid value for field '${err.path}': ${err.value}`,
    });
  }

  // MongoDB unique-constraint violation
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue || {}).join(", ");
    return errorResponse(res, {
      statusCode: 409,
      message: `Duplicate value for field: ${field}`,
    });
  }

  // Anything with an explicit status code attached
  const statusCode = err.statusCode || 500;
  return errorResponse(res, {
    statusCode,
    message: err.message || "Internal Server Error",
  });
};

module.exports = errorHandler;
