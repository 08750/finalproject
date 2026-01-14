import styles from "./DogMenuGrid.module.css";

import img1 from "../../../assets/pawsfood.png";
import img2 from "../../../assets/dogpancake.png";
import img3 from "../../../assets/pumpkin.png";
import img4 from "../../../assets/milk.png";
import Button from "../../_button/Button";

const menus = [
  {
    image: img1,
    title: "しあわせの肉球ハンバーグ",
    text: "ふっくらジューシーに焼き上げた、見た目も楽しい肉球型のハンバーグ。まろやかな特製ホワイトソースとご一緒に。。",
  },
  {
    image: img2,
    title: "サーモンとアボカドのパンケーキ",
    text: "サーモンの塩気とアボカドのコクが相性抜群。見た目にもこだわった、心もお腹も満たされるMellow Paw Café自慢の逸品です。",
  },
  {
    image: img3,
    title: "濃厚カボチャのムースプレート",
    text: "甘みの強いかぼちゃのペーストに、しっとり仕上げた鶏ささみを添えて。素材本来の旨味を活かした、体に優しく彩り豊かな一皿です。",
  },
  {
    image: img4,
    title: "こだわり山羊ミルク",
    text: "ワンちゃんも安心して楽しめる、栄養豊富なヤギミルク。ぬくもりある木の器で提供する、特別な日のおやつにぴったりの一杯です。。",
  },
];

export default function DogMenuGrid() {
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
      <div className={styles.buttonWrapper}>
        <Button href="/" label="TOP" />
      </div>
    </section>
  );
}
