import { useEffect, useState } from "react";
import { useHttpRequestService } from "../service/HttpRequestService";
import { setLength, updateFeed, updateHasMorePosts } from "../redux/user";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Post } from "../service";


export const useGetFeed = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const posts = useAppSelector((state) => state.user.feed);
  const query = useAppSelector((state) => state.user.query);
  const hasMorePosts = useAppSelector((state)=> state.user.hasMorePosts)
  const pointer = useAppSelector((state) => state.user.pointer)

  const dispatch = useAppDispatch();

  const service = useHttpRequestService();


  useEffect(() => {
    if(hasMorePosts){
      try {
        setLoading(true);
        setError(false);
        service.getPaginatedPosts(5, pointer, query).then((res: Post[]) => {
          if(res.length) {
            const updatedPosts: Post[] = (pointer === '')? Array.from(new Set(res)):
            Array.from(new Set([...posts, ...res]));
            dispatch(updateFeed(updatedPosts));
            dispatch(setLength(updatedPosts.length));
            setLoading(false);
          }
          else {
            setLoading(false);
            dispatch(updateHasMorePosts(false));
          }
        });
      } catch (e) {
        setError(true);
        console.log(e);
      }
    }

  }, [query, pointer]);

  return { posts, loading, error };
};
