const variables = require("../../variables");
const slow_down = require("express-slow-down");

const speed_imiter = slow_down({
  windowMs: variables.SLOW_DOWN_WINDOW_MS,
  delayAfter: variables.SLOW_DOWN_DELAY_AFTER,
  delayMs: () => variables.SLOW_DOWN_DELAY_MS,
});

module.exports = speed_imiter;
