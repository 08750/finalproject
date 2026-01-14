import { useState } from "react";
import styles from "./CafeSlider.module.css";

import bgImg from "../../../assets/bgimage.png";
import pawLeft from "../../../assets/pawleft.png";
import pawRight from "../../../assets/pawright.png";

import { slides } from "./slides";

export default function CafeSlider() {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((i) => (i === 0 ? slides.length - 1 : i - 1));
  };

  const next = () => {
    setIndex((i) => (i === slides.length - 1 ? 0 : i + 1));
  };

  return (
    <section
      className={styles.section}
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className={styles.inner}>
        <div className={styles.card}>
          <p className={styles.subTitle}>Mellow Paw Café の看板犬</p>
          {/* スライダー */}
          <div className={styles.sliderWrapper}>
            <div
              className={styles.slider}
              style={{
                transform: `translateX(-${index * 100}%)`,
              }}
            >
              {slides.map((slide, i) => (
                <div className={styles.slide} key={i}>
                  {/* ★ 画像とテキストを同じ幅でまとめる */}
                  <div className={styles.contentBox}>
                    <div className={styles.imageBox}>
                      <img src={slide.image} alt={slide.title} />
                    </div>

                    <h3 className={styles.title}>{slide.title}</h3>
                    <p className={styles.text}>{slide.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 矢印 */}
          <button className={`${styles.arrow} ${styles.left}`} onClick={prev}>
            <img src={pawLeft} alt="前へ" />
          </button>

          <button className={`${styles.arrow} ${styles.right}`} onClick={next}>
            <img src={pawRight} alt="次へ" />
          </button>
        </div>
      </div>
    </section>
  );
}
