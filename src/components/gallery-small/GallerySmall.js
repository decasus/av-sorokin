'use client'

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import {useState} from "react";
import home1 from "@/assets/images/home1.png";
import home2 from "@/assets/images/home2.jpg";
import home3 from "@/assets/images/home3.jpg";
import home4 from "@/assets/images/home4.jpg";
import NextJsImage from "@/components/next-js-image/NextJsImage";
import Image from "next/image";

const GallerySmall = () => {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);
    const openGallery = (index) => {
        return () => {
            setOpen(true);
            setIndex(index)
        }
    }


return (
        <div className="sm-gallery">
            <Image onClick={openGallery(0)} src={home1} alt="home" width={250} placeholder="blur"></Image>
            <Image onClick={openGallery(1)} src={home2} alt="home" width={250} placeholder="blur"></Image>
            <Image onClick={openGallery(2)} src={home3} alt="home" width={250} placeholder="blur"></Image>
            <Image onClick={openGallery(3)} src={home4} alt="home" width={250} placeholder="blur"></Image>
            <Lightbox
            open={open}
            index={index}
            close={() => setOpen(false)}
            slides={[home1, home2, home3, home4]}
            render={{slide: NextJsImage}}/>
        </div>
    );
};

export default GallerySmall;
