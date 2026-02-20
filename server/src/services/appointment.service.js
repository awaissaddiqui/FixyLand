const Appointment = require("../models/Appointment");

/**
 * Create and persist a new appointment.
 * @param {object} payload – validated body from the request
 */
const create = async (payload) => Appointment.create(payload);

/**
 * Return appointments matching a query, with the referenced hotel populated.
 * @param {object} query – Mongoose filter
 */
const find = async (query = {}) =>
  Appointment.find(query).populate("roomId").lean();

/**
 * Find a single appointment by _id with hotel populated.
 * @param {string} id
 */
const findById = async (id) =>
  Appointment.findById(id).populate("roomId").lean();

/** Count documents matching an optional query. */
const count = async (query = {}) => Appointment.countDocuments(query);

module.exports = { create, find, findById, count };
