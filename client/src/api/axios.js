import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api",
  headers: { "Content-Type": "application/json" },
  timeout: 10000,
});

// ── Request interceptor ─────────────────────────────────────────────────────
instance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
);

// ── Response interceptor ────────────────────────────────────────────────────
instance.interceptors.response.use(
  (response) => {
    const raw = response.data;
    // Already shaped correctly
    if (raw && typeof raw === "object" && "success" in raw) {
      return raw;
    }
    // Wrap plain data into standard shape
    return { success: true, data: raw, meta: null, message: "" };
  },
  (error) => {
    const status = error.response?.status ?? 0;
    const serverMsg =
      error.response?.data?.message ||
      error.response?.data?.error ||
      error.message;
    const details = error.response?.data?.details ?? null;

    const friendly =
      status === 404
        ? "Resource not found."
        : status === 422 || status === 400
          ? "Invalid request data."
          : status >= 500
            ? "Server error. Please try again later."
            : serverMsg || "An unexpected error occurred.";

    return Promise.reject({ status, message: friendly, details });
  },
);

export default instance;
