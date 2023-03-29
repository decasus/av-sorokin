import PageHeader from "@/components/page-header/PageHeader";
import getPostMetadata from "@/components/post/getPostMetadata";
import Link from "next/link";
import Image from "next/image";

const convertPostDate = (string) => {
    return new Date(Date.parse(string)).toLocaleString("ru",
        {day: "numeric", year: "numeric", month: "long"})
}

const News = () => {
    const postMetadata = getPostMetadata();
    return (
        <>
            <PageHeader>Новости</PageHeader>
            <div className="container">
                <div className="posts">
                    {postMetadata.map((post, id) => (
                        <Link href={"news/" + post.slug} key={id}><div className="post-preview">
                            <div className="post-preview__image">
                                <Image src={`/posts/${post.image}`}
                                       fill
                                       sizes="640px"
                                       alt="Фотография"/>
                            </div>
                            <div className="post-preview__content">
                                <div className="post-preview__date">{convertPostDate(post.date)}</div>
                                <h2 className="post-preview__title">{post.title}</h2>

                                <div className="post-preview__subtitle">{post.subtitle}</div>
                            </div>
                        </div></Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default News;
