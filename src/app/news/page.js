import PageHeader from "@/components/page-header/PageHeader";
import getPostMetadata from "@/components/post/getPostMetadata";

import Posts from "@/components/post/Posts";
import { getCldImageUrl } from "next-cloudinary";

const News = async () => {
  const initialPosts = await getPostMetadata(0, 6);

  return (
    <>
      <PageHeader>Новости</PageHeader>
      <div className="posts mt-10 flex justify-center flex-col items-center">
        <Posts initialData={initialPosts} />
      </div>
    </>
  );
};

export default News;
