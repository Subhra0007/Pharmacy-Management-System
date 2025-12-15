// Vercel serverless function wrapper for Express app
// Using serverless-http for better compatibility
const serverless = require("serverless-http");
const app = require("../server/index.js");

// Export serverless-wrapped Express app
module.exports = serverless(app);
