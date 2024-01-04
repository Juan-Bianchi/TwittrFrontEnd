import { useEffect, useState } from "react";
import { useHttpRequestService } from "../service/HttpRequestService";
import { setLength, updateFeed } from "../redux/user";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Post } from "../service";

interface useGetFeedProps {
  pointer: string
}

export const useGetFeed = ({pointer}: useGetFeedProps) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const posts = useAppSelector((state) => state.user.feed);
  const query = useAppSelector((state) => state.user.query);
  const user = useAppSelector((state) => state.user.user);

  const dispatch = useAppDispatch();

  const service = useHttpRequestService();

  useEffect(() => {
    try {
      setLoading(true);
      setError(false);
      service.getPaginatedPosts(5, pointer, query).then((res: Post[]) => {
        if(res.length) {
          const updatedPosts: Post[] = Array.from(new Set([...posts, ...res])).filter(
            (post) => post.authorId !== user.id
          );
          dispatch(updateFeed(updatedPosts));
          dispatch(setLength(updatedPosts.length));
          setLoading(false);
        }
        else {
          setLoading(false)
        }
      });
    } catch (e) {
      setError(true);
      console.log(e);
    }
  }, [query, pointer]);

  return { posts, loading, error };
};
