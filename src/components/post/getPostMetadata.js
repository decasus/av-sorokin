"use server";

import fs from "fs";
import matter from "gray-matter";
import { getCldImageUrl } from "next-cloudinary";

const createBlurImage = async (image) => {
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

const getPostMetadata = async (offset, limit, all = false) => {
  const folder = "src/posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // Get gray-matter data from each file.
  return markdownPosts
    .map((fileName) => {
      const fileContents = fs.readFileSync(`src/posts/${fileName}`, "utf8");
      const matterResult = matter(fileContents);
      return {
        title: matterResult.data.title,
        date: matterResult.data.date,
        subtitle: matterResult.data.subtitle,
        image: matterResult.data.image,
        /*        blurImage: await createBlurImage(matterResult.data.image),*/
        slug: fileName.replace(".md", ""),
      };
    })
    .sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    })
    .slice(offset, all ? markdownPosts.length : limit);
};

export default getPostMetadata;
