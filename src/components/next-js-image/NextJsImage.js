import Image from "next/image";
import {
    isImageFitCover,
    isImageSlide,
    useLightboxProps,
} from "yet-another-react-lightbox/core";

export default function NextJsImage({ slide, rect, placeholder = true }) {
    const { imageFit } = useLightboxProps().carousel;
    const cover = isImageSlide(slide) && isImageFitCover(slide, imageFit);

    const width = !cover
        ? Math.round(
            Math.min(rect.width, (rect.height / slide.height) * slide.width)
        )
        : rect.width;

    const height = !cover
        ? Math.round(
            Math.min(rect.height, (rect.width / slide.width) * slide.height)
        )
        : rect.height;

    return (
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <Image
                fill
                alt=""
                src={slide}
                loading="eager"
                placeholder={placeholder ? "blur" : "empty"}
                draggable={false}
                style={{ objectFit: cover ? "cover" : "contain" }}
                sizes={`${Math.ceil((width / window.innerWidth) * 100)}vw`}
            />
        </div>
    );
}