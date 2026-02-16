// Simple in-memory rate limiter for contact form
// Tracks submissions by IP address

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();

// Clean up old entries every 10 minutes
setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of rateLimitStore.entries()) {
    if (now > entry.resetTime) {
      rateLimitStore.delete(ip);
    }
  }
}, 10 * 60 * 1000);

export interface RateLimitConfig {
  maxAttempts: number;
  windowMs: number;
}

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  resetTime: number;
}

export function checkRateLimit(
  ip: string,
  config: RateLimitConfig = { maxAttempts: 3, windowMs: 60 * 60 * 1000 } // 3 per hour default
): RateLimitResult {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);

  // No previous attempts or window expired
  if (!entry || now > entry.resetTime) {
    const resetTime = now + config.windowMs;
    rateLimitStore.set(ip, { count: 1, resetTime });
    return {
      allowed: true,
      remaining: config.maxAttempts - 1,
      resetTime,
    };
  }

  // Within rate limit window
  if (entry.count < config.maxAttempts) {
    entry.count++;
    return {
      allowed: true,
      remaining: config.maxAttempts - entry.count,
      resetTime: entry.resetTime,
    };
  }

  // Rate limit exceeded
  return {
    allowed: false,
    remaining: 0,
    resetTime: entry.resetTime,
  };
}

// Get time remaining until rate limit resets (in minutes)
export function getResetTimeMinutes(resetTime: number): number {
  const now = Date.now();
  const diff = resetTime - now;
  return Math.ceil(diff / (60 * 1000));
}
