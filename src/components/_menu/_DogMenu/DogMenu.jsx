import styles from "./DogMenu.module.css";
import fvImage from "../../../assets/DogHumanMenu.png";

export default function DogMenu() {
  return (
    <section
      className={styles.fv}
      style={{ backgroundImage: `url(${fvImage})` }}
    />
  );
}
