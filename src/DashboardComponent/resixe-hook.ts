import { useEffect, useMemo, useState } from "react";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(
    window
      ? {
          width: window.innerWidth,
          height: window.innerHeight,
        }
      : {
          width: null,
          height: null,
        }
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { isMobile, isTablet, isDesktop } = useMemo(() => {
    if (!windowSize.width)
      return { isMobile: false, isTablet: false, isDesktop: false };

    const isMobile = windowSize.width < 768;
    const isTablet = windowSize.width >= 768 && windowSize.width < 1024;
    const isDesktop = windowSize.width >= 1024;

    return { isMobile, isTablet, isDesktop };
  }, [windowSize.width]);

  return { ...windowSize, isMobile, isTablet, isDesktop };
};
