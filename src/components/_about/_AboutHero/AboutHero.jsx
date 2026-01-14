import React from "react";
import styles from "./AboutHero.module.css"; // CSS モジュール

import AboutHeroImage from "../../../assets/Fb02.png";

export default function AboutHero() {
  return (
    <section className={styles.section}>
      <img
        src={AboutHeroImage}
        alt="Mellow Paw Café の空間"
        className={styles.background}
      />

      <h2 className={styles.title}>About</h2>

      <div className={styles.box}>
        <p className={styles.text}>
          心がふっと軽くなる、やさしい時間を。 <br />
          Mellow Paw Café は、忙しい毎日から少し離れ、
          深呼吸ができるような「やわらかな居場所」を目指して生まれました。
          <br />
          <br />
          木のぬくもり、香り高いコーヒー、そして看板犬たちの穏やかな存在——
          <br />
          このカフェに流れる静かな空気が、訪れる人の緊張をそっとほどき、
          自然と笑顔になれるひとときをつくっています。
        </p>
      </div>
    </section>
  );
}
