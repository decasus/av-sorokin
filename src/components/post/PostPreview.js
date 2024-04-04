import Link from "next/link";
import { getCldImageUrl } from "next-cloudinary";
import PreviewImage from "@/components/post/PreviewImage";

const convertPostDate = (string) => {
  return new Date(Date.parse(string)).toLocaleString("ru", {
    day: "numeric",
    year: "numeric",
    month: "long",
  });
};

const PostPreview = ({ post, id }) => {
  console.log(post);
  return (
    <Link href={"news/" + post.slug} key={id} className="post-preview">
      <div className="post-preview__image">
        <PreviewImage src={post.image} blurImage={post.blurImage} />
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
