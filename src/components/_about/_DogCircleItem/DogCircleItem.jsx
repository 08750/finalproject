import React from "react";
import styles from "./DogCircleitem.module.css";

export default function _DogCircleItem({ imgSrc, alt }) {
  return (
    <div className={styles.dogCircle}>
      <img src={imgSrc} alt={alt} />
    </div>
  );
}
