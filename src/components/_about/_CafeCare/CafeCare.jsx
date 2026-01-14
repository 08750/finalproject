import React from "react";
import styles from "./CafeCare.module.css";

// assets パスを確認して絶対/相対を調整
import coffeImg from "../../../assets/coffe01.png";
import pawImg from "../../../assets/paw.png";

export default function CafeCare() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Mellow Paw Café のこだわり</h2>

      <div className={styles.textBox}>
        <p>
          ● 豆から丁寧に淹れるコーヒー
          <br />
          ● 手づくりの焼き菓子やスイーツ
          <br />● 犬も人も安心できる空気づくり
        </p>

        <p className={styles.note}>
          派手なサービスはないけれど、
          <br />
          “また来たい” と思える理由が、ここにはそっと息づいています。
        </p>
      </div>

      <div className={styles.imageWrapper}>
        <img
          src={coffeImg}
          alt="コーヒーを入れてる写真"
          className={styles.dogImage}
        />
        <img src={pawImg} alt="" className={styles.pawImage} />
      </div>
    </section>
  );
}
