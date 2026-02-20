const Staff = require("../models/Staff");

/**
 * Return a paginated list of staff with optional full-text search and sorting.
 * @param {{ page?: number, limit?: number, q?: string, sort?: object }} opts
 */
const find = async ({
  page = 1,
  limit = 10,
  q,
  sort = { createdAt: -1 },
} = {}) => {
  const query = {};

  if (q) query.$text = { $search: q };

  const skip = (page - 1) * limit;

  const [data, total] = await Promise.all([
    Staff.find(query).sort(sort).skip(skip).limit(Number(limit)).lean(),
    Staff.countDocuments(query),
  ]);

  return { data, total };
};

const findById = async (id) => Staff.findById(id).lean();

const create = async (payload) => Staff.create(payload);

const count = async (query = {}) => Staff.countDocuments(query);

module.exports = { find, findById, create, count };
