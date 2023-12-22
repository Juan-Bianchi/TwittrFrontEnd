import { useEffect, useState } from "react";
import { useHttpRequestService } from "../service/HttpRequestService";
import { updateFeed } from "../redux/user";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

export const useGetProfilePosts = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const posts = useAppSelector((state) => state.user.feed);
  const dispatch = useAppDispatch();
  const id = useParams().id;
  const service = useHttpRequestService();

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    setError(false);
    service
      .getPostsFromProfile(id)
      .then((res) => {
        const updatedPosts = Array.from(new Set([...posts, ...res])).filter(
          (post) => post.authorId === id
        );
        dispatch(updateFeed(updatedPosts));
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [id]);

  return { posts, loading, error };
};
