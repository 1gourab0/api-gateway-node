const variables = require("../../variables");
const rate_limit = require("express-rate-limit");

const rate_limiter = rate_limit({
  windowMs: variables.RATE_LIMIT_WINDOW_MS, // 15 minutes in ms
  max: variables.RATE_LIMIT_MAX, // max limit after which req will be blocked for windowms duration
  keyGenerator: (req) => {
    return req.ip; // Use IP address as the key for rate limiting
  },
  handler: (req, res) => {
    res.status(429).json({
      message: "Too many requests, please try again later.",
    });
  },
  validate: {
    ip: true, // Enable IP address validation
    trustProxy: true, // Ensure trust proxy setting is not set to trues
    xForwardedForHeader: true, // Ensure trust proxy setting is set if X-Forwarded-For header is present
    positiveHits: true, // Ensure totalHits value from store is a positive integer
    unsharedStore: true, // Ensure a single store instance is not used with multiple express-rate-limit instances
    singleCount: true, // Ensure a given key is incremented only once per request
  },
});

module.exports = rate_limiter;
