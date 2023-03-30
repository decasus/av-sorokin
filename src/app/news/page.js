import PageHeader from "@/components/page-header/PageHeader";
import getPostMetadata from "@/components/post/getPostMetadata";
import PostPreview from "@/components/post/PostPreview";

const News = () => {
    const postMetadata = getPostMetadata();
    return (
        <>
            <PageHeader>Новости</PageHeader>
            <div className="container">
                <div className="posts">
                    {postMetadata.map((post, id) => (
                        <PostPreview post={post} id={id} key={id}/>
                    ))}
                </div>
            </div>
        </>
    );
};

export default News;
