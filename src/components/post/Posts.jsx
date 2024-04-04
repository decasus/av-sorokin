"use client";

import PostPreview from "@/components/post/PostPreview";
import { useEffect, useState } from "react";
import getPostMetadata from "@/components/post/getPostMetadata";
import { useInView } from "react-intersection-observer";
import Spinner from "@/components/ui/Spinner";

const Posts = ({ initialData }) => {
  const [offset, setOffset] = useState(6);
  const [posts, setPosts] = useState(initialData);
  const [endOfPage, setEndOfPage] = useState(false);
  const { ref, inView } = useInView();

  const loadMorePosts = async () => {
    if (!endOfPage) {
      const nextPosts = await getPostMetadata(offset, offset + 6);
      setPosts([...posts, ...nextPosts]);
      setOffset(offset + 6);
      if (nextPosts.length === 0) setEndOfPage(true);
    } else {
      console.log("end of page");
    }
  };

  useEffect(() => {
    if (inView) {
      loadMorePosts();
    }
  }, [inView]);

  return (
    <div>
      {posts.map((post, id) => (
        <PostPreview post={post} id={id} key={id} />
      ))}
      <div ref={ref} style={{ display: "flex", justifyContent: "center" }}>
        {!endOfPage && <Spinner />}
      </div>
    </div>
  );
};

export default Posts;
