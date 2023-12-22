import React from "react";
import Feed from "./Feed";
import { useGetComments } from "../../hooks/useGetComments";

interface CommentFeedProps {
  postId: string;
}
const CommentFeed = ({ postId }: CommentFeedProps) => {
  const { posts, loading } = useGetComments({
    postId,
  });

  return (
    <>
      <Feed posts={posts} loading={loading} />
    </>
  );
};
export default CommentFeed;
