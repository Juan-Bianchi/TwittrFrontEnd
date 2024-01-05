import React, { useCallback, useRef, useState } from "react";
import Feed from "./Feed";
import { useGetFeed } from "../../hooks/useGetFeed";

const ContentFeed = () => {
  const [pointer, setPointer] = useState('');
  const { posts, loading } = useGetFeed({pointer});

  const observer = useRef< IntersectionObserver | null >(null);
  const lastPost = useCallback((node: Element | null) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      const lastEntry = entries[0];
      if (lastEntry.isIntersecting) {
        setPointer(lastEntry.target.id)
      }
    });

    if (node) observer.current.observe(node);
  }, [loading, pointer])


  return <Feed posts={posts} loading={loading} lastElementRef={lastPost} />;
};
export default ContentFeed;
