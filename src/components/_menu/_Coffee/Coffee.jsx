import styles from "./Coffee.module.css";
import fvImage from "../../../assets/coffe02.png";

export default function Coffee() {
  return (
    <section
      className={styles.fv}
      style={{ backgroundImage: `url(${fvImage})` }}
    />
  );
}
