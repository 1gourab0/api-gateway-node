require("dotenv").config();
// port
const PORT = parseInt(process.env.PORT, 10) || 3000; // Default to 3000 if not set
// rate limit variables
const RATE_LIMIT_WINDOW_MS = parseInt(process.env.RATE_LIMIT_WINDOW_MS, 10) || 60000; // Default to 1 minute (60000 ms)
const RATE_LIMIT_MAX = parseInt(process.env.RATE_LIMIT_MAX, 10) || 100; // Default to 100 requests

// speed limit variables.
const SLOW_DOWN_WINDOW_MS = parseInt(process.env.SLOW_DOWN_WINDOW_MS, 10) || 60000; // Default to 1 minute (60000 ms)
const SLOW_DOWN_DELAY_AFTER = parseInt(process.env.SLOW_DOWN_DELAY_AFTER, 10) || 50; // Default to 50 requests
const SLOW_DOWN_DELAY_MS = parseInt(process.env.SLOW_DOWN_DELAY_MS, 10) || 500; // Default to 500 ms delay
const MS = process.env.MS || 'http://localhost:3000'; // Set a default value for MS (e.g., 'default_value')


module.exports = {
  PORT,
  RATE_LIMIT_WINDOW_MS,
  RATE_LIMIT_MAX,
  SLOW_DOWN_WINDOW_MS,
  SLOW_DOWN_DELAY_AFTER,
  SLOW_DOWN_DELAY_MS,
  MS,
};
