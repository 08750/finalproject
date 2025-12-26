import styles from "./Navigation.module.css";

export default function Navigation() {
  const navList = ["TOP", "About", "Menu", "Q&A"];

  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        {navList.map((item) => (
          <li key={item} className={styles.li}>
            <a href={`#${item.toLowerCase()}`} className={styles.a}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
