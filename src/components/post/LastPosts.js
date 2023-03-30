import getPostMetadata from "@/components/post/getPostMetadata";
import PostPreview from "@/components/post/PostPreview";

const LastPosts = () => {
    const postMetadata = getPostMetadata();
    return (postMetadata.slice(0, 2).map((post, id) =>
            <PostPreview post={post} id={id} key={id}/>)
    );
};

export default LastPosts;
