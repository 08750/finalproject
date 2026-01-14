import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./Navigation.module.css";
import Doglogo from "../../assets/doglogo.png";
import Hamburger from "./Hamburger";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navList = [
    { label: "TOP", path: "/" },
    { label: "About", path: "/about" },
    { label: "Menu", path: "/menu" },
    { label: "Q&A", path: "/qa" },
  ];

  return (
    <div className={styles.wrapper}>
      <img src={Doglogo} alt="犬ロゴ" className={styles.Doglogo} />

      {/* ハンバーガー（閉じる時は×になる） */}
      <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />

      <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
        {/* ×ボタン（メニュー内） */}
        <button
          className={styles.closeButton}
          onClick={() => setIsOpen(false)}
          aria-label="close menu"
        >
          ×
        </button>

        <ul className={styles.ul}>
          {navList.map((item) => (
            <li key={item.label}>
              <Link
                to={item.path}
                className={styles.a}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
