"use client";

import { CldImage, getCldImageUrl } from "next-cloudinary";

const PreviewImage = ({ src, blurImage }) => (
  <CldImage
    src={src}
    fill
    sizes="(max-width: 876px) 100vw, 33vw"
    placeholder="blur"
    blurDataURL={blurImage}
    alt="Фотография"
  />
);

export default PreviewImage;
