import styles from "./page.module.css";

const ResultPage = () => {
  return (
    <div className={styles.maskLayer}>
      <div className={styles.imageLayer}></div>
      <div className={styles.linearLayer}></div>
      <div className={styles.noiseLayer}></div>
      <div className={styles.layout}>ResultPage</div>
    </div>
  );
};

export default ResultPage;
