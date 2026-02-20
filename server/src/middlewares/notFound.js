const { errorResponse } = require("../utils/response");

const notFound = (req, res) =>
  errorResponse(res, {
    statusCode: 404,
    message: `Route not found: ${req.method} ${req.originalUrl}`,
  });

module.exports = notFound;
