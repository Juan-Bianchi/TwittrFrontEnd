import React, { useCallback, useEffect, useRef, useState } from "react";
import Feed from "./Feed";
import { useGetFeed } from "../../hooks/useGetFeed";
import { useAppSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import { updatePointer } from "../../redux/user";

const ContentFeed = () => {
  const [_after, setAfter] = useState('');
  const pointer = useAppSelector((state)=> state.user.pointer);
  const { posts, loading } = useGetFeed();
  const dispatch = useDispatch();

  const observer = useRef< IntersectionObserver | null >(null);
  const lastPost = useCallback((node: Element | null) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      const lastEntry = entries[0];
      if (lastEntry.isIntersecting) {
        dispatch(updatePointer(lastEntry.target.id))
      }
    });

    if (node) observer.current.observe(node);
  }, [loading, pointer])

  useEffect(()=> {
    setAfter(pointer)
  }, [pointer])


  return <Feed posts={posts} loading={loading} lastElementRef={lastPost} />;
};
export default ContentFeed;
