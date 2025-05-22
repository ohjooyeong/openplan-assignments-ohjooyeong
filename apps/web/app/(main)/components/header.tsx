"use client";

import { usePathname } from "next/navigation";
import styles from "./header.module.css";

const Header = () => {
  const pathname = usePathname();

  const isResultPage = pathname === "/result";
  const applicantNameClass = isResultPage
    ? `${styles.applicantName} ${styles.whiteText}`
    : styles.applicantName;

  return (
    <header className={styles.header}>
      <h1 className={applicantNameClass}>오주영</h1>
    </header>
  );
};

export default Header;
