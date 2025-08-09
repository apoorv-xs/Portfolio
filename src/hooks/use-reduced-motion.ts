import { useEffect, useMemo, useState } from "react";
import { useReducedMotion as useFramerReducedMotion } from "framer-motion";

export function useReducedMotion(): boolean {
  const framerPref = useFramerReducedMotion();
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    const handler = () => setIsSmall(mq.matches);
    handler();
    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, []);

  return framerPref || isSmall;
}

export function useCanHover(): boolean {
  return useMemo(() => {
    if (typeof window === "undefined") return false;
    try {
      return window.matchMedia("(hover: hover)").matches;
    } catch {
      return false;
    }
  }, []);
}
