'use client'

import {useState} from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import NextJsImage from "@/components/next-js-image/NextJsImage";
import "yet-another-react-lightbox/styles.css";


const Gallery = ({images}) => {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const openGallery = (index) => {
        return () => {
            setOpen(true);
            setIndex(index)
        }
    }

    return (
        <>
            <div className="gallery-fs">
                {images.map((img, index) =>
                    <Image src={img} onClick={openGallery(index)} width={250} alt={"image" + index} key={index} placeholder="blur"/>
                )}
            </div>
            <Lightbox
                open={open}
                index={index}
                close={() => setOpen(false)}
                slides={images}
                render={{slide: NextJsImage}}/>
        </>
    );
};

export default Gallery;