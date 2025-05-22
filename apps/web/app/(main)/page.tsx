"use client";

import { useRouter } from "next/navigation";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { usePhotoQuery } from "../../hooks/use-photo-query";
import { usePhotoStore } from "../../store/photo-store";
import { useEffect } from "react";

const HomePage = () => {
  const router = useRouter();
  const setPhotoInfo = usePhotoStore((state) => state.setPhotoInfo);
  const { data, refetch, isLoading } = usePhotoQuery();

  useEffect(() => {
    if (data) {
      setPhotoInfo(data);
      router.push("/result");
    }
  }, [data, setPhotoInfo, router]);

  const handleFetchPhoto = () => {
    refetch();
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
          disabled={isLoading}
          size="md"
          style={{ width: "100%" }}
        >
          다음
        </Button>
      </footer>
    </div>
  );
};

export default HomePage;
