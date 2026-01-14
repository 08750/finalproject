import styles from "./Access.module.css";
import GoogleMap from "../_map/GoogleMap";

export default function Access() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Access</h2>

      <div className={styles.block}>
        <p className={styles.heading}>住所</p>
        <p className={styles.text}>
          〒123-456
          <br />
          兵庫県神戸市 ○○区 ○○ 1-2-3
        </p>
      </div>

      <div className={styles.block}>
        <p className={`${styles.heading} ${styles.long}`}>営業時間</p>
        <p className={styles.text}>
          平日：10:00 – 18:00
          <br />
          土日祝：9:00 – 19:00
        </p>
        <p className={styles.note}>
          ※ ラストオーダーは閉店の30分前
          <br />※ 不定休（Instagramでお知らせ）
        </p>
      </div>

      <div className={styles.map}>
        <GoogleMap />
      </div>
    </section>
  );
}
