import styles from "./Header.module.css";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header style={style.header}>
      <Navigation />
    </header>
  );
}
