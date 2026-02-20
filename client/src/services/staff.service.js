import * as staffClient from "../api/staff.client";

/**
 * Fetch staff list with optional filters.
 * Returns { data: Staff[], meta: Meta }
 */
export const fetchStaff = async (filters = {}) => {
  const res = await staffClient.getStaff(filters);
  const staff = (res.data || []).map(normalizeStaff);
  return { data: staff, meta: res.meta || {} };
};

function normalizeStaff(member) {
  return {
    id: member._id || member.id,
    name: member.name || "Unknown",
    title: member.title || member.role || "Staff",
    bio: member.bio || "",
    photoUrl:
      member.photoUrl ||
      member.photo ||
      member.avatar ||
      `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name || "Staff")}&background=0e9f6e&color=fff`,
    role: member.role || "",
  };
}
