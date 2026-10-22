import { timingSafeEqual } from 'node:crypto';

export function createChatRateLimit({ limit = 20, windowMs = 60000 } = {}) {
  const visitors = new Map();
  return (req, res, next) => {
    const now = Date.now();
    for (const [key, entry] of visitors) if (entry.until <= now) visitors.delete(key);
    const key = req.ip || req.socket.remoteAddress || 'unknown';
    let entry = visitors.get(key);
    if (!entry) {
      if (visitors.size >= 10000) return res.status(429).json({ success: false, code: 'RATE_LIMITED', message: 'Please try again shortly.' });
      entry = { until: now + windowMs, count: 0 }; visitors.set(key, entry);
    }
    if (++entry.count > limit) {
      res.set('Retry-After', String(Math.ceil((entry.until - now) / 1000)));
      return res.status(429).json({ success: false, code: 'RATE_LIMITED', message: 'Too many messages. Please wait a moment and retry.' });
    }
    next();
  };
}

export function requireKnowledgeAdmin(req, res, next) {
  const expected = process.env.AI_KNOWLEDGE_ADMIN_TOKEN;
  if (!expected) return res.status(503).json({ success: false, message: 'Knowledge administration is not configured.' });
  const supplied = String(req.get('x-knowledge-admin-token') || '');
  const a = Buffer.from(supplied); const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return res.status(401).json({ success: false, message: 'Unauthorized.' });
  next();
}
