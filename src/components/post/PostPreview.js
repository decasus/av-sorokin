import Image from "next/image";
import rgbDataURL from "@/utils/rgbDataURL";
import Link from "next/link";

const convertPostDate = (string) => {
    return new Date(Date.parse(string)).toLocaleString("ru",
        {day: "numeric", year: "numeric", month: "long"})
}

const PostPreview = ({post, id}) => {
    return (
        <Link href={"news/" + post.slug} key={id} className="post-preview">
            <div className="post-preview__image">
                <Image src={`/posts/${post.image}`}
                       fill
                       sizes="640px"
                       placeholder="blur"
                       blurDataURL={rgbDataURL(40, 97, 163)}
                       alt="Фотография"/>
            </div>
            <div className="post-preview__content">
                <div className="post-preview__date">{convertPostDate(post.date)}</div>
                <h2 className="post-preview__title">{post.title}</h2>

                <div className="post-preview__subtitle">{post.subtitle}</div>
            </div>
        </Link>
    );
};

export default PostPreview;
