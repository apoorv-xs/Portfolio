import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type NavState = { skipScrollTop?: boolean } | null;

const ScrollToTop = () => {
  const location = useLocation() as ReturnType<typeof useLocation> & {
    state: NavState;
  };

  useEffect(() => {
    // Skip if explicitly asked (e.g., Contact navigates then scrolls to footer)
    if (location.state && location.state.skipScrollTop) return;
    // Instant jump to top to avoid showing previous scroll position
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return null;
};

export default ScrollToTop;
