"use client";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";
import home1 from "@/assets/images/home1.png";
import home2 from "@/assets/images/home2.jpg";
import home3 from "@/assets/images/home3.jpg";
import home4 from "@/assets/images/home4.jpg";
import NextJsImage from "@/components/next-js-image/NextJsImage";
import Image from "next/image";
import { getCldImageUrl } from "next-cloudinary";

const GallerySmall = () => {
  const [index, setIndex] = useState(-1);
  return (
    <div className="sm-gallery">
      <Image
        onClick={() => setIndex(0)}
        src={home1}
        alt="home"
        width={250}
        placeholder="blur"
      />
      <Image
        onClick={() => setIndex(1)}
        src={home2}
        alt="home"
        width={250}
        placeholder="blur"
      />
      <Image
        onClick={() => setIndex(2)}
        src={home3}
        alt="home"
        width={250}
        placeholder="blur"
      />
      <Image
        onClick={() => setIndex(3)}
        src={home4}
        alt="home"
        width={250}
        placeholder="blur"
      />
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={[home1, home2, home3, home4]}
        render={{ slide: NextJsImage }}
      />
    </div>
  );
};

export default GallerySmall;
