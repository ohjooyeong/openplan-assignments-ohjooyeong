"use client";

import { useRouter } from "next/navigation";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { usePhotoQuery } from "../../hooks/use-photo-query";
import { usePhotoStore } from "../../store/photo-store";
import { useEffect, useState } from "react";
import { debounce } from "lodash-es";

const HomePage = () => {
  const router = useRouter();
  const setPhotoInfo = usePhotoStore((state) => state.setPhotoInfo);
  const { data, refetch, isLoading } = usePhotoQuery();
  const [loading, setLoading] = useState(false);

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
          size="md"
          style={{ width: "100%" }}
          loading={loading}
        >
          다음
        </Button>
      </footer>
    </div>
  );
};

export default HomePage;
