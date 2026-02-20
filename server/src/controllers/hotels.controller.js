const hotelsService = require("../services/hotels.service");
const asyncHandler = require("../middlewares/asyncHandler");
const { successResponse } = require("../utils/response");

const getHotels = asyncHandler(async (req, res) => {
  const { page = 1, limit = 10, q, city, priceMin, priceMax, sort } = req.query;

  let sortObj = { createdAt: -1 };
  if (sort) {
    try {
      sortObj = JSON.parse(sort);
    } catch {
      sortObj = sort;
    }
  }

  const { data, total } = await hotelsService.find({
    page: Number(page),
    limit: Number(limit),
    q,
    city,
    priceMin,
    priceMax,
    sort: sortObj,
  });

  return successResponse(res, {
    data,
    meta: { total, page: Number(page), limit: Number(limit) },
  });
});

module.exports = { getHotels };
