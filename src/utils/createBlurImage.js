import { getCldImageUrl } from "next-cloudinary";

export const createBlurImage = async (image) => {
  const imageUrl = getCldImageUrl({
    src: image,
    width: 100,
  });

  const response = await fetch(imageUrl);
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const base64 = buffer.toString("base64");
  return `data:${response.type};base64,${base64}`;
};
