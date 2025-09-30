import ratelimiter from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    const { success } = await ratelimiter.limit("global"); // Global rate limit
    // Can also use per-IP rate limiting: ratelimiter.limit(req.ip);
    if (!success) {
      return res.status(429).json({ error: 'Too Many Requests' });
    }
    next();
  } catch (error) {
    console.error('Rate Limit Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
    next(error);
  }
};

export default rateLimiter;