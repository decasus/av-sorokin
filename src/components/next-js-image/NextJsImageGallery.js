'use client'
import Image from "next/image"
import rgbDataURL from "@/utils/rgbDataURL";

export default function NextJsImageGallery({
                                        imageProps: {src, alt, title, sizes, className, onClick},
                                        wrapperStyle
                                    }) {
    return (
        <div style={wrapperStyle}>
            <div style={{position: "relative", width: "100%", height: "100%"}}>
                <Image
                    fill
                    src={src}
                    alt={alt}
                    title={title}
                    sizes="20vw"
                    placeholder="blur"
                    blurDataURL={rgbDataURL(40, 97, 163)}
                    className={className}
                    onClick={onClick}
                />
            </div>
        </div>
    )
}
