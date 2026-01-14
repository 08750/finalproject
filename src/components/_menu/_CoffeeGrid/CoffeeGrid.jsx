import styles from "./CoffeeGrid.module.css";

import img1 from "../../../assets/coffe03.png";
import img2 from "../../../assets/cafelatte.png";

const menus = [
  {
    image: img1,
    title: "Mellow Paw ブレンド",
    text: "まろやかなコクと、ほのかな甘み。ゆっくり過ごす時間に寄り添う、毎日飲みたくなる一杯です。",
  },
  {
    image: img2,
    title: "Mellow Paw カフェラテ",
    text: "まろやかなミルクと、香ばしいコーヒーのバランス。見た目も味も、やさしいラテです。",
  },
];

export default function CoffeeGrid() {
  return (
    <section className={styles.section}>
      <h2 className={styles.menuTitle}>COFFEE</h2>

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
