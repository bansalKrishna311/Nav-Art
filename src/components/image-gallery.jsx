"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";
import image1 from "./assets/animals.jpg"
import image2 from "./assets/border.jpg"
import image4 from "./assets/buddha.jpg"
import image3 from "./assets/clay.jpg"
import image5 from "./assets/claybuddha.jpg"
import image6 from "./assets/evileye.jpg"
import image7 from "./assets/ganpati.jpg"
import image8 from "./assets/gurunanakdev.jpg"
import image9 from "./assets/krishnaradha.jpg"
import image11 from "./assets/ladymandalla.jpg"
import image12 from "./assets/mandella.jpg"
import image13 from "./assets/saucers.jpg"
import image14 from "./assets/sunflowerd.jpg"
import image10 from "./assets/woodentrays.jpg"
import image15 from "./assets/god.jpg"


export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}

// Updated products array without links and titles
export const products = [
  { thumbnail: image1, name: "Animals Life" },
  { thumbnail: image2, name: "Border Painting" },
  { thumbnail: image3, name: "Clay" },
  { thumbnail: image4, name: "Buddha" },
  { thumbnail: image5, name: "Clay Budhha" },
  { thumbnail: image6, name: "Evil Eye" },
  { thumbnail: image7, name: "Mandalla Ganpati" },
  { thumbnail: image8, name: "Guru Nanak Dev Ji" },
  { thumbnail: image9, name: "Krishna Radha" },
  { thumbnail: image10 , name: "Woden Trays"},
  { thumbnail: image11 , name: "Lady Mandalla"},
  { thumbnail: image12 , name: "Mandalla"},
  { thumbnail: image13 , name: "Saucers"},
  { thumbnail: image14 , name: "sunflowered"},
  { thumbnail: image15 , name: "God"},
];
