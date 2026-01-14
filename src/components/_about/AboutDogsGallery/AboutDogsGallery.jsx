import React from "react";
import _DogCircleItem from "../_DogCircleItem/DogCircleItem.jsx";
import styles from "./AboutDogsGallery.module.css";

import corgi from "../../../assets/circlecorgi.png";
import samo from "../../../assets/circlesamo.png";
import corgi2 from "../../../assets/circlecorgi2.png";
import shiba from "../../../assets/circleshiba.png";

const dogs = [corgi, samo, corgi2, shiba];

export default function AboutDogsGallery() {
  return (
    <section className={styles.dogGallerySection}>
      <div className={styles.galleryWrapper}>
        {dogs.map((dog, index) => (
          <_DogCircleItem key={index} imgSrc={dog} alt={`犬${index + 1}`} />
        ))}
      </div>
    </section>
  );
}
