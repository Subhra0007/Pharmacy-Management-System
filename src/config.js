// Get API URL from environment variable
const getApiBaseUrl = () => {
  const envUrl = import.meta.env.VITE_API_URL;
  
  // If environment variable is set, use it
  if (envUrl) {
    return envUrl;
  }
  
  // In production (Vercel), throw error if not set
  if (import.meta.env.PROD) {
    console.error(
      "❌ VITE_API_URL is not set! Please set it in Vercel environment variables.\n" +
      "Go to your Vercel project → Settings → Environment Variables → Add VITE_API_URL"
    );
    // Return empty string to fail gracefully, but log the error
    return "";
  }
  
  // Development fallback
  return "http://localhost:5000";
};

export const API_BASE_URL = getApiBaseUrl();
