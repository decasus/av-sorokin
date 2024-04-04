"use server";

import { promises as fs } from "fs";
import path from "path";

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
  const folder = path.join(process.cwd(), "src/posts");
  const files = await fs.readdir(folder);

  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  // Get gray-matter data from each file.

  const posts = await Promise.all(
    markdownPosts.map(async (fileName) => {
      const filePath = path.join(folder, fileName);
      const fileContents = await fs.readFile(filePath, "utf8");

      const matterResult = matter(fileContents);

      return {
        title: matterResult.data.title,
        date: matterResult.data.date,
        subtitle: matterResult.data.subtitle,
        image: matterResult.data.image,
        /*        blurImage: await createBlurImage(matterResult.data.image),*/
        slug: fileName.replace(".md", ""),
      };
    }),
  );

  return await Promise.all(
    posts
      .sort((a, b) => {
        if (a.date < b.date) {
          return 1;
        } else {
          return -1;
        }
      })
      .slice(offset, all ? markdownPosts.length : limit)
      .map(async (post) => {
        const blurredImage = await createBlurImage(post.image);
        return { ...post, blurImage: blurredImage };
      }),
  );
};

export default getPostMetadata;
