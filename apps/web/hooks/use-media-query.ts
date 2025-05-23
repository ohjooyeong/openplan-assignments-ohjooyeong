import { useState, useEffect } from "react";

type MediaQueryType = "mobile" | "tablet" | "desktop";

export const useMediaQuery = (): MediaQueryType => {
  const [mediaType, setMediaType] = useState<MediaQueryType>("mobile");

  useEffect(() => {
    const checkMediaType = () => {
      if (window.matchMedia("(min-width: 1440px)").matches) {
        setMediaType("desktop");
      } else if (window.matchMedia("(min-width: 768px)").matches) {
        setMediaType("tablet");
      } else {
        setMediaType("mobile");
      }
    };

    checkMediaType();

    window.addEventListener("resize", checkMediaType);

    return () => {
      window.removeEventListener("resize", checkMediaType);
    };
  }, []);

  return mediaType;
};
