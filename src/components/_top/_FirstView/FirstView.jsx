import styles from "./FirstView.module.css";
import Topfb from "../../../assets/Fb01.jpg";

export default function FirstView() {
  return (
    <div className={styles.wrapper}>
      <img
        src={Topfb}
        alt="犬が抱っこされている写真"
        className={styles.topfb}
      />
      <div className={styles.textBox}>
        <p className={styles.title}>
          　犬と、ひと息。
          <br />
          心ほどけるカフェ時間
        </p>
        <p className={styles.subTitle}>　　Relax. Enjoy. Together.</p>
      </div>
    </div>
  );
}
