import React from "react";
import AboutHero from "./_AboutHero/AboutHero.jsx";
import AboutDogsGallery from "./AboutDogsGallery/AboutDogsGallery.jsx";
import CafeStory from "./_CafeStory/CafeStory.jsx";
import CafeCare from "./_CafeCare/CafeCare.jsx";
import CafeSlider from "./_CafeSlider/CafeSlider.jsx";
import LastSip from "./_LastSip/LastSip.jsx";

export default function AboutMain() {
  return (
    <div>
      <AboutHero />
      <AboutDogsGallery />
      <CafeStory />
      <CafeCare />
      <CafeSlider />
      <LastSip />
    </div>
  );
}
