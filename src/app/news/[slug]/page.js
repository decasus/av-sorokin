import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import getPostMetadata from "@/components/post/getPostMetadata";
import PageHeader from "@/components/page-header/PageHeader";
import Image from "next/image";

const getPostContent = (slug) => {
    const folder = "src/posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    return matter(content);
};

export const generateStaticParams = async () => {
    const posts = getPostMetadata();
    return posts.map((post) => ({
        slug: post.slug,
    }));
};

const convertPostDate = (string) => {
    return new Date(Date.parse(string)).toLocaleString("ru",
        {day: "numeric", year: "numeric", month: "long"})
}


const PostPage = (props) => {
    const slug = props.params.slug;
    const post = getPostContent(slug);
    return (
        <>
            <PageHeader small></PageHeader>
            <div className="container">
                <div className="post">
                    <h1 className="post__title">{post.data.title}</h1>
                    <p className="post__date">{convertPostDate(post.data.date)}</p>
                    <article className="post__content">
                        <div className="post__image">
                            <Image src={"/posts/" + post.data.image}
                                   fill
                                   sizes="640px"
                                   alt="Фотография"/>
                        </div>
                        <div className="post__text"><Markdown>{post.content}</Markdown></div>
                    </article>
                </div>

            </div>
        </>
    );
};

export default PostPage;