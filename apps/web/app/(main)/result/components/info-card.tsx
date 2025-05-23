import React from "react";
import styles from "./info-card.module.css";

interface InfoCardProps {
  label: string;
  value: string | number;
  isLink?: boolean;
  isLoading?: boolean;
}

const InfoCard = ({
  label,
  value,
  isLink = false,
  isLoading = false,
}: InfoCardProps) => {
  return (
    <div className={styles.infoCard}>
      <div className={styles.label}>{label}</div>
      {isLoading ? (
        <div className={styles.skeleton}></div>
      ) : (
        <div className={styles.value}>
          {isLink ? (
            <a
              href={value.toString()}
              target="_blank"
              rel="noopener noreferrer"
            >
              {value}
            </a>
          ) : (
            value
          )}
        </div>
      )}
    </div>
  );
};

export default InfoCard;
