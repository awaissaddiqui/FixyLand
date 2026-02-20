const { validationResult } = require("express-validator");
const { errorResponse } = require("../utils/response");

/**
 * validateRequest – factory that accepts an array of express-validator chains
 * and returns a middleware that runs them, collecting any errors.
 *
 * If validation fails, responds with 400 and a details map { field: message }.
 * Otherwise calls next() to continue to the route handler.
 *
 * Usage:
 *   router.post('/', validateRequest([
 *     body('email').isEmail().withMessage('Valid email required'),
 *   ]), myController);
 *
 * @param {import('express-validator').ValidationChain[]} validations
 * @returns {Function} Express middleware
 */
const validateRequest = (validations) => async (req, res, next) => {
  // Run every validation chain in parallel
  await Promise.all(validations.map((v) => v.run(req)));

  const errors = validationResult(req);
  if (errors.isEmpty()) return next();

  // Build a { fieldName: 'error message' } map for easy client-side use
  const details = {};
  errors.array().forEach((err) => {
    if (!details[err.path]) details[err.path] = err.msg;
  });

  return errorResponse(res, {
    statusCode: 400,
    message: "Validation failed",
    details,
  });
};

module.exports = validateRequest;
