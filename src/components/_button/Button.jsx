// import React from "react";
import styles from "./Button.module.css";

export default function Button({ href, label }) {
  return (
    <a href={href} className={styles.button} target="_blank">
      {label}
    </a>
  );
}
