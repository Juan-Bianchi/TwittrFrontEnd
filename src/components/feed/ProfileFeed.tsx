import React from "react";
import Feed from "./Feed";
import { useGetProfilePosts } from "../../hooks/useGetProfilePosts";

interface ProfileFeedProps {
  profilePicture: string | undefined;
}

const ProfileFeed = ({profilePicture}: ProfileFeedProps) => {
  const { posts, loading } = useGetProfilePosts();

  const updatedPosts = posts.map(post => {
    return {
      ...post,
      author: {
        ...post.author,
        profilePicture: profilePicture
      }
  }})

  return (
    <>
      <Feed posts={updatedPosts} loading={loading} />
    </>
  );
};
export default ProfileFeed;
