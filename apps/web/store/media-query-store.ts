import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { MediaQueryType } from "../types/types";

interface MediaQueryStore {
  mediaType: MediaQueryType;
  setMediaType: (type: MediaQueryType) => void;
}

export const useMediaQueryStore = create<MediaQueryStore>()(
  persist(
    (set) => ({
      mediaType: "mobile" as MediaQueryType,
      setMediaType: (type) => set({ mediaType: type }),
    }),
    {
      name: "media-query-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
