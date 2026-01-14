import { useState } from "react";
import styles from "./Header.module.css";
import Navigation from "./Navigation";
import Hamburger from "./Hamburger";
import Doglogo from "../../assets/doglogo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      {/* ロゴ */}
      <img src={Doglogo} alt="犬ロゴ" className={styles.logo} />

      {/* ナビ */}
      <Navigation isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* ハンバーガー */}
      <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
}
