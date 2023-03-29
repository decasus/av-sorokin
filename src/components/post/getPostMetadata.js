import fs from "fs";
import matter from "gray-matter";

const getPostMetadata = () => {
    const folder = "src/posts/";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));

    // Get gray-matter data from each file.
    return markdownPosts.map((fileName) => {
        const fileContents = fs.readFileSync(`src/posts/${fileName}`, "utf8");
        const matterResult = matter(fileContents);
        return {
            title: matterResult.data.title,
            date: matterResult.data.date,
            subtitle: matterResult.data.subtitle,
            image: matterResult.data.image,
            slug: fileName.replace(".md", ""),
        };
    }).sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
};

export default getPostMetadata;