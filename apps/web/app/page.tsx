"use client";

import { useRouter } from "next/navigation";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { usePhotoQuery } from "../hooks/use-photo-query";
import { usePhotoStore } from "../store/photo-store";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const setPhotoInfo = usePhotoStore((state) => state.setPhotoInfo);
  const { data, refetch, isLoading } = usePhotoQuery();

  useEffect(() => {
    if (data) {
      setPhotoInfo(data);
      router.push("/#");
    }
  }, [data, setPhotoInfo, router]);

  const handleFetchPhoto = () => {
    refetch();
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.applicantName}>오주영</h1>
      </header>

      <main className={styles.main}>
        <div className={styles.greeting}>
          <h2 className={styles.greetingText}>안녕하세요</h2>
          <h2 className={styles.greetingName}>오주영입니다.</h2>
        </div>
      </main>

      <footer className={styles.footer}>
        <Button
          onClick={handleFetchPhoto}
          disabled={isLoading}
          size="lg"
          style={{ width: "100%" }}
        >
          다음
        </Button>
      </footer>
    </div>
  );
}
