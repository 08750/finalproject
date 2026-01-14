import styles from "./Menufv.module.css";
import fvImage from "../../../assets/menuFb.png";

export default function Menufv() {
  return (
    <section
      className={styles.fv}
      style={{ backgroundImage: `url(${fvImage})` }}
    />
  );
}
