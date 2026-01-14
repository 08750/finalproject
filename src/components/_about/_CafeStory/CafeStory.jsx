import React from "react";
import styles from "./CafeStory.module.css";

import dogImg from "../../../assets/hello.png";
import pawImg from "../../../assets/paw.png";

export default function CafeStory() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Mellow Paw Café が生まれた理由</h2>

      <div className={styles.textBox}>
        <p>
          「人も動物も、気負わず自然体で過ごせる場所をつくりたい」
          そんな思いから、この小さなカフェは始まりました。
          好きな飲みものを片手にゆったり過ごす人。
          日向でうたた寝する犬たちが、ただそこにいるだけで
          温度がふわっと和らぐ空間。 そんな何気ないシーンこそ、このカフェが
          大切にしているものです。
        </p>
      </div>

      <div className={styles.imageWrapper}>
        <img
          src={dogImg}
          alt="カフェで過ごす犬たち"
          className={styles.dogImage}
        />
        <img src={pawImg} alt="" className={styles.pawImage} />
      </div>
    </section>
  );
}
