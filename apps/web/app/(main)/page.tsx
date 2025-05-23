"use client";

import { useRouter } from "next/navigation";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { usePhotoQuery } from "../../hooks/use-photo-query";
import { usePhotoStore } from "../../store/photo-store";
import { useEffect, useState } from "react";
import { debounce } from "lodash-es";
import { useMediaQuery } from "../../hooks/use-media-query";

const HomePage = () => {
  const router = useRouter();
  const { photoInfo, setPhotoInfo } = usePhotoStore((state) => state);
  const { data, refetch, isLoading } = usePhotoQuery();
  const [loading, setLoading] = useState(false);
  const mediaType = useMediaQuery();

  // 사진 조회 이력이 있을 시 자동으로 /result 페이지로 이동
  useEffect(() => {
    if (photoInfo) {
      router.push("/result");
    }
  }, [photoInfo, router]);

  useEffect(() => {
    if (data) {
      setPhotoInfo(data);
      router.push("/result");
    }
  }, [data, setPhotoInfo, router]);

  const handleFetchPhoto = debounce(() => {
    setLoading(true);
    refetch().finally(() => setLoading(false));
  }, 300);

  const getButtonProps = () => {
    switch (mediaType) {
      case "desktop":
        return { size: "lg" as const };
      case "tablet":
        return { size: "md" as const };
      default:
        return { size: "md" as const, style: { width: "100%" } };
    }
  };

  return (
    <div className={styles.layout}>
      <main className={styles.main}>
        <div className={styles.greeting}>
          <h2 className={styles.greetingText}>{`안녕하세요\n오주영입니다.`}</h2>
        </div>
      </main>

      <footer className={styles.footer}>
        <Button
          onClick={handleFetchPhoto}
          disabled={isLoading || loading}
          loading={loading}
          {...getButtonProps()}
        >
          다음
        </Button>
      </footer>
    </div>
  );
};

export default HomePage;
