import { PhotoInfo } from "../../types/types";

export const fetchPhotoInfo = async (): Promise<PhotoInfo> => {
  const response = await fetch("https://picsum.photos/id/0/info");

  if (!response.ok) {
    throw new Error("사진 정보를 가져오는데 실패했습니다.");
  }

  return response.json();
};
