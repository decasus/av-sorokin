'use client'

import courseImages from "@/constants/courses";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import NextJsImage from "@/components/next-js-image/NextJsImage";
import Image from "next/image";
import {useState} from "react";

const CoursesGallery = () => {

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
        <div className="courses">
            {courseImages.map((img, index) =>
                <Image src={img} onClick={openGallery(index)} width={250} alt={"image" + index} key={index}/>
            )}
        </div>
        <Lightbox
        open={open}
        index={index}
        close={() => setOpen(false)}
        slides={courseImages}
        render={{slide: NextJsImage}}/>
    </>
    );
};

export default CoursesGallery;

