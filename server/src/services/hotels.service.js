const Hotel = require("../models/Hotel");

/**
 * Return a paginated, filtered list of hotels.
 * @param {{
 *   page?: number, limit?: number, q?: string,
 *   city?: string, priceMin?: string|number, priceMax?: string|number,
 *   sort?: object
 * }} opts
 */
const find = async ({
  page = 1,
  limit = 10,
  q,
  city,
  priceMin,
  priceMax,
  sort = { createdAt: -1 },
} = {}) => {
  const query = {};

  // Full-text search
  if (q) query.$text = { $search: q };

  // Case-insensitive city filter
  if (city) query.city = { $regex: new RegExp(city, "i") };

  // Price range filter
  if (priceMin !== undefined || priceMax !== undefined) {
    query.pricePerNight = {};
    if (priceMin !== undefined) query.pricePerNight.$gte = Number(priceMin);
    if (priceMax !== undefined) query.pricePerNight.$lte = Number(priceMax);
  }

  const skip = (page - 1) * limit;

  const [data, total] = await Promise.all([
    Hotel.find(query).sort(sort).skip(skip).limit(Number(limit)).lean(),
    Hotel.countDocuments(query),
  ]);

  return { data, total };
};

const findById = async (id) => Hotel.findById(id).lean();

const create = async (payload) => Hotel.create(payload);

const count = async (query = {}) => Hotel.countDocuments(query);

module.exports = { find, findById, create, count };
