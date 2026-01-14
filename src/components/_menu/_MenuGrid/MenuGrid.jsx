import styles from "./MenuGrid.module.css";
import Button from "../../_button/Button";

import img1 from "../../../assets/sandwich.png";
import img2 from "../../../assets/pizzatoast.png";
import img3 from "../../../assets/Pancakes.png";
import img4 from "../../../assets/scone.png";

const menus = [
  {
    image: img1,
    title: "フレッシュサンドイッチ",
    text: "素材の鮮度を大切に、シンプルに仕上げました。毎日でも食べたくなる、やさしい味のサンドイッチです。",
  },
  {
    image: img2,
    title: "贅沢厚切りの自家製ピザトースト",
    text: "外はこんがり、中はふんわり。厚切り食パンに自家製トマトソースととろけるチーズをたっぷりのせて焼き上げました。",
  },
  {
    image: img3,
    title: "陽だまりパンケーキ",
    text: "香ばしく焼いたパンケーキに、なめらかなクリームとフルーツを合わせて。ほっとする甘さです。",
  },
  {
    image: img4,
    title: "焼きたてスコーン ジャム添え",
    text: "素材の風味を生かした、素朴で飽きのこないスコーン。さっくり焼き上げ、ジャムを添えて。",
  },
];

export default function MenuGrid() {
  return (
    <section className={styles.section}>
      <h2 className={styles.menuTitle}>MENU</h2>

      <div className={styles.grid}>
        {menus.map((menu, index) => (
          <div key={index} className={styles.item}>
            <img src={menu.image} alt={menu.title} className={styles.image} />

            <h3 className={styles.title}>{menu.title}</h3>

            <div className={styles.textBox}>
              <p>{menu.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
