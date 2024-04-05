import PostPreview from "@/components/post/PostPreview";
import getPostMetadata from "@/components/post/getPostMetadata";

const Posts = async ({}) => {
  const posts = await getPostMetadata(0, 4);

  return (
    <div className="max-w-[850px] mt-10 md:mt-2">
      {posts.map((post, id) => (
        <PostPreview post={post} id={id} key={id} />
      ))}
    </div>
  );
};

export default Posts;
