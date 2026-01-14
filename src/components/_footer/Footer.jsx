import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.title}>Mellow Paw Cafe</div>
      <div className={styles.subtitle}>〒123−456兵庫県神戸市 ○○区 ○○ 1-2-3</div>
      <div className={styles.subtitle}>©︎2025　Mellow Paw Café</div>
    </footer>
  );
}
