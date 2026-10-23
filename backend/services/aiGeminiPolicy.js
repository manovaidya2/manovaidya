export const chatModelConfig = () => ({
  model: process.env.GEMINI_CHAT_MODEL || 'gemini-3.5-flash-lite',
  fallbackModel: process.env.GEMINI_CHAT_FALLBACK_MODEL || 'gemini-3.1-flash-lite'
});

export const generationOptions = (model) => model.replace(/^models\//, '').startsWith('gemini-2.5-')
  ? { temperature: 0.2, thinkingConfig: { thinkingBudget: 0 } }
  : {};

// Share provider backoff across requests, but never share visitor questions/answers.
export function createModelCooldown({ now = Date.now } = {}) {
  const blocked = new Map();
  return {
    remaining(model) { return Math.max(0, (blocked.get(model) || 0) - now()); },
    record(model, error) {
      const status = Number(error.status || error.code);
      if (![429, 500, 502, 503, 504].includes(status)) return;
      let payload;
      try { payload = JSON.parse(error.message); } catch { /* SDK/network errors may have no JSON body. */ }
      const details = payload?.error?.details || [];
      const retry = details.find((detail) => detail['@type']?.endsWith('/google.rpc.RetryInfo'));
      const seconds = /^\d+(?:\.\d+)?s$/.test(retry?.retryDelay || '') ? Number.parseFloat(retry.retryDelay) : 0;
      const daily = details.some((detail) => detail.violations?.some((violation) => /PerDay/i.test(violation.quotaId || '')));
      const duration = seconds > 0 ? seconds * 1000 : daily ? 24 * 3600000 : status === 429 ? 60000 : 10000;
      blocked.set(model, now() + Math.min(duration, 24 * 3600000));
    }
  };
}

export const chatCooldowns = createModelCooldown();
