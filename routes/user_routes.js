const express = require("express");
const router = express.Router();
const { createProxyMiddleware } = require("http-proxy-middleware");
const cacheMiddleware = require("../middleware/cache");
const variables = require("../variables");

const serviceAProxy = createProxyMiddleware({
  target: variables.MS,
  changeOrigin: true,
  logger: console,
  pathRewrite: {
    "^users": "",
  },
  onProxyRes: (proxyRes, req, res) => {
    let body = [];
    proxyRes.on("data", (chunk) => {
      body.push(chunk);
    });
    proxyRes.on("end", () => {
      body = Buffer.concat(body).toString();
      console.log(`Received response for ${req.originalUrl}:`, body);
      try {
        const parsedBody = JSON.parse(body);
        cache.set(req.originalUrl, parsedBody);
        console.log(`Caching response for ${req.originalUrl}`);
      } catch (e) {
        console.error(`Error caching response for ${req.originalUrl}:`, e);
      }
    });
  },
});

router.use("/", serviceAProxy);

module.exports = router;
