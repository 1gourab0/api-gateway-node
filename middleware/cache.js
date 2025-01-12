const node_cache = require("node-cache");
const cache = new node_cache({ stdTTL: 600 }); // Cache TTL (time-to-live) in seconds

// TODO: Explore more and properly set it
const cacheMiddleware = (req, res, next) => {
  const key = req.originalUrl;
  const cachedResponse = cache.get(key);

  if (cachedResponse) {
    console.log(`Cache hit for ${key}`);
    return res.json(cachedResponse);
  } else {
    console.log(`Cache miss for ${key}`);
    // Intercept the response from the proxy middleware
    const originalSend = res.send;
    res.send = (body) => {
      console.log(`Received response for ${key}:`, body);
      try {
        const parsedBody = JSON.parse(body);
        cache.set(key, parsedBody);
        console.log(`Caching response for ${key}`);
      } catch (e) {
        console.error(`Error caching response for ${key}:`, e);
      }
      originalSend.call(res, body);
    };
    next();
  }
};

module.exports = cacheMiddleware;
