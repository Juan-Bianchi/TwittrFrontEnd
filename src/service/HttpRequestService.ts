import type { PostData, SingInData, SingUpData } from "./index";
import { S3Service } from "./S3Service";
import Cookies from "universal-cookie";
import axiosClient from "./axios/AxiosClient";
import axios from "axios";

const url = process.env.REACT_APP_API_URL || "https://twitter-ieea.onrender.com/api";
const cookie = new Cookies();

const httpRequestService = {

  routingAuth: async () => {
      const res = await axiosClient.post(`${url}/auth/validate`, null)
      return res.status === 200 ? { isValidToken: true } : { isValidToken: false }
  },
  checkUser: async (email?: string, username?:string)=> {
    const res = await axios.get(`${url}/auth/checkUser`, {
      params: {
        username,
        email
      }
    })
    return res.status === 200? true: false
  },
  signUp: async (data: Partial<SingUpData>) => {
    const res = await axios.post(`${url}/auth/signup`, data);
    if (res.status === 201) {
      cookie.set('twittrToken', `Bearer ${res.data.token}`, {path: '/', maxAge: 3600})
      return true;
    }
  },
  signIn: async (data: SingInData) => {
    const res = await axios.post(`${url}/auth/login`, data);
    if (res.status === 200) {
      cookie.set('twittrToken', `Bearer ${res.data.token}`, {path: '/', maxAge: 3600})
      return true;
    }
  },
  createPost: async (data: PostData) => {
    const res = await axiosClient.post(`${url}/post`, data);
    if (res.status === 201) {
      const { upload } = S3Service;
      for (const imageUrl of res.data.images) {
        const index: number = res.data.images.indexOf(imageUrl);
        await upload(data.images![index], imageUrl);
      }
      return res.data;
    }
  },
  getPaginatedPosts: async (limit: number, after: string, query: string) => {
    const res = await axiosClient.get(`${url}/post/${query}`, {
      params: {
        limit,
        after,
      },
    });
    if (res.status === 200) {
      return res.data;
    }
  },
  getPosts: async (query: string) => {
    const res = await axiosClient.get(`${url}/post/${query}`);
    if (res.status === 200) {
      return res.data;
    }
  },
  getRecommendedUsers: async (limit: number, skip: number) => {
    const res = await axiosClient.get(`${url}/user`, {
      params: {
        limit,
        skip,
      },
    });
    if (res.status === 200) {
      return res.data;
    }
  },
  me: async () => {
    const res = await axiosClient.get(`${url}/user/me`);
    if (res.status === 200) {
      return res.data;
    }
  },
  getPostById: async (id: string) => {
    const res = await axiosClient.get(`${url}/post/${id}`);
    if (res.status === 200) {
      return res.data;
    }
  },
  createReaction: async (postId: string, reaction: string) => {
    const res = await axiosClient.post(`${url}/reaction/${postId}`,{ type: reaction });
    if (res.status === 201) {
      return res.data;
    }
  },
  deleteReaction: async (postId: string) => {
    const res = await axiosClient.delete(`${url}/reaction/${postId}`);
    if (res.status === 200) {
      return res.data;
    }
  },
  followUser: async (userId: string) => {
    const res = await axiosClient.put(
      `${url}/follower/follow/${userId}`, {});
    if (res.status === 201) {
      return res.data;
    }
  },
  unfollowUser: async (userId: string) => {
    const res = await axiosClient.patch(`${url}/follower/unfollow/${userId}`,{});
    if (res.status === 200) {
      return res.data;
    }
  },
  searchUsers: async (username: string, limit: number, skip: number) => {
    try {
      const cancelToken = axios.CancelToken.source();

      const response = await axiosClient.get(`${url}/user/by_username`, {
        params: {
          limit,
          skip,
          username,
        },
        cancelToken: cancelToken.token,
      });

      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      if (!axios.isCancel(error)) console.log(error);
    }
  },

  getProfile: async (id: string) => {
    const res = await axiosClient.get(`${url}/user/${id}`);
    if (res.status === 200) {
      return res.data;
    }
  },
  getPaginatedPostsFromProfile: async (
    limit: number,
    after: string,
    id: string
  ) => {
    const res = await axiosClient.get(`${url}/post/by_user/${id}`, {
      params: {
        limit,
        after,
      },
    });

    if (res.status === 200) {
      return res.data;
    }
  },
  getPostsFromProfile: async (id: string) => {
    const res = await axiosClient.get(`${url}/post/by_user/${id}`);

    if (res.status === 200) {
      return res.data;
    }
  },

  isLogged: async () => {
    const res = await axiosClient.get(`${url}/user/me`);
    return res.status === 200;
  },

  getProfileView: async (id: string) => {
    const res = await axiosClient.get(`${url}/user/${id}`);

    if (res.status === 200) {
      return res.data;
    }
  },

  deleteProfile: async () => {
    const res = await axiosClient.delete(`${url}/user/`);

    if (res.status === 204) {
      localStorage.removeItem("token");
    }
  },

  getChats: async () => {
    const res = await axiosClient.get(`${url}/chat`);

    if (res.status === 200) {
      return res.data;
    }
  },

  getMutualFollows: async () => {
    const res = await axiosClient.get(`${url}/follow/mutual`);

    if (res.status === 200) {
      return res.data;
    }
  },

  createChat: async (id: string) => {
    const res = await axiosClient.post(`${url}/chat`,{ users: [id],});

    if (res.status === 201) {
      return res.data;
    }
  },

  getChat: async (id: string) => {
    const res = await axiosClient.get(`${url}/chat/${id}`);

    if (res.status === 200) {
      return res.data;
    }
  },

  deletePost: async (id: string) => {
    await axiosClient.delete(`${url}/post/${id}`);
  },

  getPaginatedCommentsByPostId: async ( id: string, limit: number, after: string ) => {
    const res = await axiosClient.get(`${url}/comment/${id}`, {
      params: {
        limit,
        after,
      },
    });
    if (res.status === 200) {
      return res.data;
    }
  },
  getCommentsByPostId: async (id: string) => {
    const res = await axiosClient.get(`${url}/comment/${id}`);
    if (res.status === 200) {
      return res.data;
    }
  },

  deleteComment: async (id: string) => {
    await axiosClient.delete(`${url}/comment/${id}`);
  },
  createComment: async (data: PostData) => {
    const res = await axiosClient.post(`${url}/comment`, data);
    if (res.status === 201) {
      const { upload } = S3Service;
      for (const imageUrl of res.data.images) {
        const index: number = res.data.images.indexOf(imageUrl);
        await upload(data.images![index], imageUrl);
      }
      return res.data;
    }
  },
};

const useHttpRequestService = () => httpRequestService;

// For class component (remove when unused)
class HttpService {
  service = httpRequestService;
}

export { useHttpRequestService, HttpService };
