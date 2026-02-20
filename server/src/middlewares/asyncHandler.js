/**
 * asyncHandler – wraps an async route handler so any rejected promise is
 * forwarded to Express's next(err) rather than crashing the process.
 *
 * Usage:  router.get('/', asyncHandler(async (req, res) => { ... }))
 *
 * @param {Function} fn – async Express handler
 * @returns {Function} Express middleware
 */
const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

module.exports = asyncHandler;
