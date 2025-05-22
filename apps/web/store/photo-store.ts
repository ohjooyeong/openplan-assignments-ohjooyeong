import { create } from "zustand";
import { PhotoInfo } from "../app/api/photo-api";

interface PhotoStore {
  photoInfo: PhotoInfo | null;
  setPhotoInfo: (info: PhotoInfo) => void;
  resetPhotoInfo: () => void;
}

export const usePhotoStore = create<PhotoStore>((set) => ({
  photoInfo: null,
  setPhotoInfo: (info) => set({ photoInfo: info }),
  resetPhotoInfo: () => set({ photoInfo: null }),
}));
