"use client";

import styles from "./page.module.css";
import { Button } from "@repo/ui/button";
import { useRouter } from "next/navigation";
import InfoCard from "./components/info-card";
import Image from "next/image";
import { usePhotoStore } from "../../../store/photo-store";
import { useQueryClient } from "@tanstack/react-query";
import { useMediaQuery } from "../../../hooks/use-media-query";
import { useEffect, useState } from "react";

const ResultPage = () => {
  const router = useRouter();
  const { photoInfo, resetPhotoInfo } = usePhotoStore();
  const queryClient = useQueryClient();
  const mediaType = useMediaQuery();
  const [isLoading, setIsLoading] = useState(true);

  // 사진 조회 이력 없이 /result로 이동 시 1초 후 메인 페이지로 이동
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // 사진 정보가 없으면 메인 페이지로 리다이렉트
    if (!photoInfo) {
      const redirectTimer = setTimeout(() => {
        router.push("/");
      }, 1000);

      return () => {
        clearTimeout(redirectTimer);
        clearTimeout(loadingTimer);
      };
    }

    return () => {
      clearTimeout(loadingTimer);
    };
  }, [photoInfo, router]);

  const handlePrevious = () => {
    queryClient.removeQueries();
    resetPhotoInfo(); // 이전 버튼 클릭시 photoInfo 초기화
    router.push("/");
  };

  const getButtonProps = () => {
    switch (mediaType) {
      case "desktop":
        return { size: "sm" as const };
      case "tablet":
        return { size: "sm" as const };
      default:
        return { size: "md" as const, style: { width: "100%" } };
    }
  };

  return (
    <div className={styles.maskLayer}>
      <div className={styles.imageLayer}>
        <Image
          src={
            photoInfo?.download_url || "https://picsum.photos/id/0/5000/3333"
          }
          alt="background"
          layout="fill"
          objectFit="cover"
          quality={100}
          style={{ opacity: 0.3 }}
        />
      </div>
      <div className={styles.linearLayer}></div>
      <div className={styles.noiseLayer}></div>
      <div className={styles.main}>
        <div className={styles.content}>
          <div className={styles.imageCard}>
            <Image
              src={
                photoInfo?.download_url ||
                "https://picsum.photos/id/0/5000/3333"
              }
              alt="laptop"
              width={5000}
              height={3333}
              layout="responsive"
            />
          </div>
          <div className={styles.cardWrapper}>
            <div className={styles.infoCards}>
              <InfoCard
                label="id"
                value={photoInfo?.id || "N/A"}
                isLoading={isLoading}
              />
              <InfoCard
                label="author"
                value={photoInfo?.author || "N/A"}
                isLoading={isLoading}
              />
            </div>
            <div className={styles.infoCards}>
              <InfoCard
                label="width"
                value={photoInfo?.width?.toLocaleString("ko") || "N/A"}
                isLoading={isLoading}
              />
              <InfoCard
                label="height"
                value={photoInfo?.height?.toLocaleString("ko") || "N/A"}
                isLoading={isLoading}
              />
            </div>
            <div className={styles.infoCardsLink}>
              <InfoCard
                label="url"
                value={photoInfo?.url || "N/A"}
                isLink
                isLoading={isLoading}
              />
              <InfoCard
                label="download_url"
                value={photoInfo?.download_url || "N/A"}
                isLink
                isLoading={isLoading}
              />
            </div>
            <footer className={styles.footer}>
              <Button onClick={handlePrevious} {...getButtonProps()}>
                이전
              </Button>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
