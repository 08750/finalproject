import styles from "./Hamburger.module.css";

export default function Hamburger({ isOpen, setIsOpen }) {
  return (
    <button
      className={`${styles.button} ${isOpen ? styles.open : ""}`}
      onClick={() => setIsOpen(!isOpen)}
      aria-label="menu"
    >
      <span />
      <span />
      <span />
    </button>
  );
}
