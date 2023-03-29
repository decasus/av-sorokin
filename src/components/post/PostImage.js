'use client'

import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import NextJsImage from "@/components/next-js-image/NextJsImage";
import {useState} from "react";
import "yet-another-react-lightbox/styles.css";

const PostImage = ({src}) => {
    const [open, setOpen] = useState(false);
    const noPlaceholder = true;
    return (
        <div className="post__image">
            <Image src={"/posts/" + src}
                   fill
                   sizes="640px"
                   alt="Фотография"
                   onClick={() => setOpen(true)}/>
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={["/posts/" + src]}
                render={{slide: ({slide, rect}) => NextJsImage({slide, rect, placeholder: false}),
                    buttonPrev: () => null,
                    buttonNext: () => null}}/>
        </div>
    );
};

export default PostImage;
