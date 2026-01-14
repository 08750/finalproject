import { useState } from "react";
import styles from "./Header.module.css";
import Navigation from "./Navigation";
import Hamburger from "./Hamburger";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Navigation isOpen={isOpen} />
    </header>
  );
}
