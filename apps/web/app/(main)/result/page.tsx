"use client";

import styles from "./page.module.css";
import { Button } from "@repo/ui/button";
import { useRouter } from "next/navigation";
import InfoCard from "./components/info-card";
import Image from "next/image";
import { usePhotoStore } from "../../../store/photo-store";
import { useQueryClient } from "@tanstack/react-query";
import { useMediaQuery } from "../../../hooks/use-media-query";

const ResultPage = () => {
  const router = useRouter();
  const { photoInfo } = usePhotoStore();
  const queryClient = useQueryClient();
  const mediaType = useMediaQuery();

  const handlePrevious = () => {
    queryClient.removeQueries();
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
              <InfoCard label="id" value={photoInfo?.id || "N/A"} />
              <InfoCard label="author" value={photoInfo?.author || "N/A"} />
            </div>
            <div className={styles.infoCards}>
              <InfoCard
                label="width"
                value={photoInfo?.width.toLocaleString("ko") || "N/A"}
              />
              <InfoCard
                label="height"
                value={photoInfo?.height.toLocaleString("ko") || "N/A"}
              />
            </div>
            <div className={styles.infoCardsLink}>
              <InfoCard label="url" value={photoInfo?.url || "N/A"} isLink />
              <InfoCard
                label="download_url"
                value={photoInfo?.download_url || "N/A"}
                isLink
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
