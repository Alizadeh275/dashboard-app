// Environment configuration for Vite
const config = {
  api: {
    baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:3001",
    timeout: 10000,
  },
};

// Validation
if (!import.meta.env.VITE_API_BASE_URL) {
  console.warn(
    "⚠️ VITE_API_BASE_URL is not set. Using default: http://localhost:3001"
  );
}

export default config;
