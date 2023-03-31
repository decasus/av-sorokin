'use client'

import {useState} from "react";
import Lightbox from "yet-another-react-lightbox";
import NextJsImage from "@/components/next-js-image/NextJsImage";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import PhotoAlbum from "react-photo-album";
import NextJsImageGallery from "@/components/next-js-image/NextJsImageGallery";

const Gallery = ({images}) => {
    const [index, setIndex] = useState(-1);

    return (
        <>
{/*            <div className="gallery-fs">
                {images.map((img, index) =>
                    <Image src={img} onClick={openGallery(index)} width={250} alt={"image" + index} key={index} placeholder="blur"/>
                )}
            </div>*/}
            <PhotoAlbum spacing={10} layout="rows" photos={images} renderPhoto={NextJsImageGallery} onClick={({ index }) => setIndex(index)}/>
            <Lightbox
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                slides={images}
                plugins={[Zoom]}
                render={{slide: NextJsImage}}/>
        </>
    );
};

export default Gallery;