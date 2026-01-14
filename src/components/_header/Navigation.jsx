import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

export default function Navigation({ isOpen, setIsOpen }) {
  const navList = [
    { label: "TOP", path: "/" },
    { label: "About", path: "/about" },
    { label: "Menu", path: "/menu" },
    { label: "Q&A", path: "/qa" },
  ];

  return (
    <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
      {isOpen && (
        <button className={styles.closeButton} onClick={() => setIsOpen(false)}>
          ×
        </button>
      )}

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
  );
}
