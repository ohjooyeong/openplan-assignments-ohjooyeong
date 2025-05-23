import { useEffect } from "react";
import { useMediaQueryStore } from "../store/media-query-store";
import { MediaQueryType } from "../types/types";

export const useMediaQuery = (): MediaQueryType => {
  const { mediaType, setMediaType } = useMediaQueryStore();

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
