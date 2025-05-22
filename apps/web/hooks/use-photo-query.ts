import { useQuery } from "@tanstack/react-query";
import { fetchPhotoInfo, PhotoInfo } from "../app/api/photo-api";

export const usePhotoQuery = () => {
  const { data, refetch, isLoading } = useQuery<PhotoInfo>({
    queryKey: ["photoInfo"],
    queryFn: fetchPhotoInfo,
    enabled: false,
  });

  return { data, refetch, isLoading };
};
