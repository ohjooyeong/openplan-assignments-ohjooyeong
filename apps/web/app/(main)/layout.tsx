import Header from "./components/header";
import styles from "./layout.module.css";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.layout}>
      <Header />

      {children}
    </div>
  );
};

export default MainLayout;
