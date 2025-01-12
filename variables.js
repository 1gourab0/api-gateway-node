require("dotenv").config();
// port
const PORT = parseInt(process.env.PORT, 10);
// rate limit variables
const RATE_LIMIT_WINDOW_MS = parseInt(process.env.RATE_LIMIT_WINDOW_MS, 10);
const RATE_LIMIT_MAX = parseInt(process.env.RATE_LIMIT_MAX, 10);

// speed limit variables.
const SLOW_DOWN_WINDOW_MS = parseInt(process.env.SLOW_DOWN_WINDOW_MS, 10);
const SLOW_DOWN_DELAY_AFTER = parseInt(process.env.SLOW_DOWN_DELAY_AFTER, 10);
const SLOW_DOWN_DELAY_MS = parseInt(process.env.SLOW_DOWN_DELAY_MS, 10);
const MS = process.env.MS;

module.exports = {
  PORT,
  RATE_LIMIT_WINDOW_MS,
  RATE_LIMIT_MAX,
  SLOW_DOWN_WINDOW_MS,
  SLOW_DOWN_DELAY_AFTER,
  SLOW_DOWN_DELAY_MS,
  MS,
};
