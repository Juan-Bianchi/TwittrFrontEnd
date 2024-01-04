import React from "react";
import { Post } from "../../service";
import { StyledContainer } from "../common/Container";
import Tweet from "../tweet/Tweet";
import Loader from "../loader/Loader";

interface FeedProps {
  posts: Post[];
  loading: boolean;
  lastElementRef?: (node: Element | null) => void;
}

const Feed = ({ posts, loading, lastElementRef }: FeedProps) => {
  return (
    <StyledContainer width={"100%"} alignItems={"center"}>
      {posts
        .filter((post, index, self) => {
          return self.findIndex((p) => p.id === post.id) === index;
        })
        .map((post: Post, index, self) => {
          if(index === self.length - 1){
            return <Tweet key={post.id} post={post}  lastElementRef={lastElementRef}/>
          }
          else {
            return <Tweet key={post.id} post={post} />
          }
        })}
      {loading && <Loader />}
    </StyledContainer>
  );
};

export default Feed;
