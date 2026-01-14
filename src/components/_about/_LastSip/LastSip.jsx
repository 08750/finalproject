import styles from "./LastSip.module.css";
import Button from "../../_button/Button";

export default function GentleTimeSection() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h2 className={styles.title}>ここに流れる、やさしい時間</h2>

        <p className={styles.text}>
          今日はどんな一日でしたか。
          <br />
          忙しさの途中で、少し立ち止まりたくなったら、
          <br />
          ふと思い出してもらえる場所でありたいと思っています。
          <br />
          Mellow Paw Café で、
          <br />
          心がふっと軽くなる時間をお過ごしください。
        </p>
      </div>{" "}
      <div className={styles.buttonWrapper}>
        <Button href="/top" label="TOP" />
      </div>
    </section>
  );
}
