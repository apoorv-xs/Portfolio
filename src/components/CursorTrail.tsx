import { useEffect, useMemo, useRef } from "react";

// Low-latency cursor trail using requestAnimationFrame and direct DOM updates.
// Avoids React state per-move and alloc churn for smoother response.

const DOTS = 14; // number of dots in the trail
const STICKY_LEAD = true; // make the first dot stick to the cursor
const LERP_LEAD = 0.5; // used if STICKY_LEAD=false
const LERP_TAIL = 0.38; // trailing dots follow speed (higher = closer)

// Fun effects (kept lightweight and GPU-friendly)
const ENABLE_HUE_SHIFT = true; // cycle colors along the trail
const HUE_SPEED = 0.06; // hue degrees per ms (scaled down inside loop)
const HUE_PER_DOT = 12; // hue offset per dot index

const ENABLE_TWINKLE = true; // subtle opacity shimmer
const TWINKLE_SPEED = 0.004; // radians per ms
const TWINKLE_AMPLITUDE = 0.22; // max additional opacity

const ENABLE_COMET = true; // stretch and rotate dots along motion
const COMET_STRENGTH = 0.015; // scale factor from speed
const COMET_MAX_SCALE_X = 1.35; // cap for horizontal stretch
const COMET_MIN_SCALE_Y = 0.85; // cap for vertical compression

function supportsReducedMotion() {
  if (typeof window === "undefined" || typeof window.matchMedia === "undefined") return false;
  try {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch {
    return false;
  }
}

const CursorTrail = () => {
  const dotsRef = useRef<HTMLDivElement[]>([]);
  const rafRef = useRef<number | null>(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const pointsRef = useRef(Array.from({ length: DOTS }, () => ({ x: 0, y: 0 })));
  const isMountedRef = useRef(false);

  const sizes = useMemo(() => {
    // Slight size falloff along the trail
    const base = 10;
    const min = 3;
    return Array.from({ length: DOTS }, (_, i) => Math.max(min, Math.round(base - (i * (base - min)) / (DOTS - 1))));
  }, []);

  useEffect(() => {
    if (supportsReducedMotion()) return; // Respect reduced motion
    isMountedRef.current = true;

    // Initialize positions at center to avoid jump on first frame
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    targetRef.current = { x: cx, y: cy };
    pointsRef.current = pointsRef.current.map(() => ({ x: cx, y: cy }));

    const onPointerMove = (e: PointerEvent) => {
      targetRef.current.x = e.clientX;
      targetRef.current.y = e.clientY;
    };

    // Passive listener to avoid main-thread blocking
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    const step = () => {
      const now = performance.now();
      const pts = pointsRef.current;
      const target = targetRef.current;

      // Lead dot follows cursor immediately (or fast if disabled)
      if (STICKY_LEAD) {
        pts[0].x = target.x;
        pts[0].y = target.y;
      } else {
        pts[0].x += (target.x - pts[0].x) * LERP_LEAD;
        pts[0].y += (target.y - pts[0].y) * LERP_LEAD;
      }
      // Each subsequent dot follows the previous
      for (let i = 1; i < pts.length; i++) {
        pts[i].x += (pts[i - 1].x - pts[i].x) * LERP_TAIL;
        pts[i].y += (pts[i - 1].y - pts[i].y) * LERP_TAIL;
      }

      // Apply transforms directly to DOM
      const els = dotsRef.current;
      for (let i = 0; i < els.length; i++) {
        const el = els[i];
        if (!el) continue;
        const p = pts[i];
        // Direction and speed approx using previous dot to create comet effect
        let angle = 0;
        let scaleX = 1;
        let scaleY = 1;
        if (ENABLE_COMET && i > 0) {
          const dx = pts[i - 1].x - p.x;
          const dy = pts[i - 1].y - p.y;
          const speed = Math.hypot(dx, dy);
          angle = Math.atan2(dy, dx) * (180 / Math.PI);
          const stretch = Math.min(COMET_MAX_SCALE_X - 1, speed * COMET_STRENGTH);
          scaleX = 1 + stretch;
          scaleY = Math.max(COMET_MIN_SCALE_Y, 1 - stretch * 0.6);
        }

        el.style.transform = `translate3d(${p.x - sizes[i] / 2}px, ${p.y - sizes[i] / 2}px, 0) rotate(${angle}deg) scale(${scaleX}, ${scaleY})`;

        if (ENABLE_HUE_SHIFT) {
          const hue = (now * HUE_SPEED + i * HUE_PER_DOT) % 360;
          // base alpha falls off along trail
          const baseAlpha = Math.max(0.15, 1 - i / DOTS);
          const twinkle = ENABLE_TWINKLE ? (Math.sin(now * TWINKLE_SPEED + i) * 0.5 + 0.5) * TWINKLE_AMPLITUDE : 0;
          const alpha = Math.min(0.9, Math.max(0.05, baseAlpha + twinkle));
          el.style.background = `hsla(${hue}, 90%, 60%, ${alpha})`;
          if (i === 0) {
            // Soft glow for the lead dot
            el.style.boxShadow = `0 0 16px hsla(${hue}, 90%, 60%, ${Math.min(0.65, alpha)})`;
          } else if (el.style.boxShadow) {
            el.style.boxShadow = "";
          }
        }
      }

      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);

    const onVisibility = () => {
      if (document.hidden && rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      } else if (!document.hidden && rafRef.current == null) {
        rafRef.current = requestAnimationFrame(step);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      isMountedRef.current = false;
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("visibilitychange", onVisibility);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [sizes]);

  if (supportsReducedMotion()) return null;

  return (
    <>
      {Array.from({ length: DOTS }).map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) dotsRef.current[i] = el;
          }}
          className="cursor-dot"
          style={{
            width: sizes[i],
            height: sizes[i],
            position: "fixed",
            left: 0,
            top: 0,
            borderRadius: 9999,
            background: "hsl(var(--primary) / 0.35)",
            opacity: Math.max(0.15, 1 - i / DOTS),
            pointerEvents: "none",
            zIndex: 50,
            willChange: "transform, opacity",
            contain: "layout style paint",
            backfaceVisibility: "hidden",
            mixBlendMode: "plus-lighter",
            transform: "translate3d(-9999px, -9999px, 0)",
          } as React.CSSProperties}
        />
      ))}
    </>
  );
};

export default CursorTrail;
