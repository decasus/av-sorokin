import PostPreview from "@/components/post/PostPreview";
import getPostMetadata from "@/components/post/getPostMetadata";

const Posts = async ({}) => {
  const posts = await getPostMetadata(0, 4);

  return (
    <div className="max-w-[850px] mt-10 md:mt-2 divide-y space-y-8 mb-10 xl:max-w-[1200px] w-full items-center flex flex-col">
      {posts.map((post, id) => (
        <PostPreview post={post} id={id} key={id} />
      ))}
    </div>
  );
};

export default Posts;
