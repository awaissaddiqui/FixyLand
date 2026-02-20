const staffService = require("../services/staff.service");
const asyncHandler = require("../middlewares/asyncHandler");
const { successResponse } = require("../utils/response");

const getStaff = asyncHandler(async (req, res) => {
  const { page = 1, limit = 10, q, sort } = req.query;

  // Parse an optional sort object; fall back to newest-first
  const sortObj = sort ? JSON.parse(sort) : { createdAt: -1 };

  const { data, total } = await staffService.find({
    page: Number(page),
    limit: Number(limit),
    q,
    sort: sortObj,
  });

  return successResponse(res, {
    data,
    meta: { total, page: Number(page), limit: Number(limit) },
  });
});

module.exports = { getStaff };
