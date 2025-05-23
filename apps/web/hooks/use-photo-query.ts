import { useQuery } from "@tanstack/react-query";
import { fetchPhotoInfo } from "../app/api/photo-api";
import { PhotoInfo } from "../types/types";

export const usePhotoQuery = () => {
  const { data, refetch, isLoading } = useQuery<PhotoInfo>({
    queryKey: ["photoInfo"],
    queryFn: fetchPhotoInfo,
    enabled: false,
  });

  return { data, refetch, isLoading };
};
