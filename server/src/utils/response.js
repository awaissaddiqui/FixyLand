/**
 * Send a standardised success response.
 * @param {import('express').Response} res
 * @param {{ statusCode?: number, data?: any, meta?: object, message?: string }} options
 */
const successResponse = (
  res,
  { statusCode = 200, data, meta, message } = {},
) => {
  const payload = { success: true };
  if (message !== undefined) payload.message = message;
  if (data !== undefined) payload.data = data;
  if (meta !== undefined) payload.meta = meta;
  return res.status(statusCode).json(payload);
};

/**
 * Send a standardised error response.
 * @param {import('express').Response} res
 * @param {{ statusCode?: number, message?: string, details?: object }} options
 */
const errorResponse = (
  res,
  { statusCode = 500, message = "Internal Server Error", details } = {},
) => {
  const payload = { success: false, error: message };
  if (details !== undefined) payload.details = details;
  return res.status(statusCode).json(payload);
};

module.exports = { successResponse, errorResponse };
