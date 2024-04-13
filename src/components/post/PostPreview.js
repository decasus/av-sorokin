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
  return (
    <Link href={"news/" + post.slug} key={id} className="post-preview pt-8">
      <div className="post-preview__image">
        <PreviewImage src={post.image} blurImage={post.blurImage} />
      </div>
      <div className="post-preview__content xl:max-w-[700px]">
        <div className="post-preview__date">{convertPostDate(post.date)}</div>
        <h2 className="post-preview__title xl:text-2xl">{post.title}</h2>

        <div className="post-preview__subtitle xl:text-lg">{post.subtitle}</div>
      </div>
    </Link>
  );
};

export default PostPreview;
