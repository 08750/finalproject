import styles from "./AboutPreview.module.css";
import Doglogo from "../../../assets/doglogo.png";
import Button from "../../_button/Button";

export default function AboutPreview() {
  return (
    <div className={styles.wrapper}>
      <img src={Doglogo} alt="お店のロゴマーク" className={styles.Doglogo} />

      <h2 className={styles.title}>Mellow Paw Cafe</h2>

      <p className={styles.text}>
        Mellow Paw Café は、看板犬が迎えてくれる
        <br />
        やさしい時間が流れる犬カフェです。
        <br />
        愛犬と一緒にくつろげる席や、ワンちゃん向け
        <br />
        ごはんもご用意しています。
      </p>

      <Button href="#about" label="About" />
    </div>
  );
}
