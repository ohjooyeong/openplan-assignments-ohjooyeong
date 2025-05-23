import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { PhotoInfo } from "../types/types";

interface PhotoStore {
  photoInfo: PhotoInfo | null;
  setPhotoInfo: (info: PhotoInfo) => void;
  resetPhotoInfo: () => void;
}

export const usePhotoStore = create<PhotoStore>()(
  persist(
    (set) => ({
      photoInfo: null,
      setPhotoInfo: (info) => set({ photoInfo: info }),
      resetPhotoInfo: () => set({ photoInfo: null }),
    }),
    {
      name: "photo-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
