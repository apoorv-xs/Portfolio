// Simple allowlist-based external URL sanitizer.
// Returns a safe http(s) URL or undefined if the input is invalid.
export function sanitizeExternalUrl(input?: string): string | undefined {
  if (!input) return undefined;
  try {
    // Disallow whitespace/control chars
    const trimmed = input.trim();
    if (!trimmed) return undefined;
    // Reject any whitespace anywhere
    if (/\s/.test(trimmed)) return undefined;
    // Reject ASCII control characters without using a control-char regex (ESLint-safe)
    for (let i = 0; i < trimmed.length; i++) {
      const code = trimmed.charCodeAt(i);
      if (code <= 0x1f || code === 0x7f) return undefined;
    }

    const url = new URL(trimmed, window.location.origin);
    const protocol = url.protocol.toLowerCase();
    if (protocol === "http:" || protocol === "https:") {
      return url.href;
    }
  } catch {
    // fall through
  }
  return undefined;
}
