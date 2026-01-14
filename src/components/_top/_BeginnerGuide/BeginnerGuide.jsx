import styles from "./BeginnerGuide.module.css";
import Button from "../../_button/Button";

export default function BeginnerGuide() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>初めての方へ</h2>

      <p className={styles.text}>
        初めての方にも安心してご来店いただけるよう、
        <br />
        よくいただく質問をまとめました
      </p>

      <Button href="/qa" label="Q&Aを見る" />
    </section>
  );
}
