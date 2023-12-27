import type { PostData, SingInData, SingUpData } from "./index";
import axios from "axios";
import { S3Service } from "./S3Service";
import Cookies from "universal-cookie";

const url =
  process.env.REACT_APP_API_URL || "https://twitter-ieea.onrender.com/api";

const cookie = new Cookies();

const httpRequestService = {

  routingAuth: async () => {
    try {
      const res = await axios.post(`${url}/auth/validate`, null, {
        headers: {
          Authorization: cookie.get('twittrToken'),
        },
      })
      return res.status === 200 ? { isValidToken: true } : { isValidToken: false }
    }
    catch(e) {
      return {
        isValidToken: false
      }
    }
  },
  signUp: async (data: Partial<SingUpData>) => {
    const res = await axios.post(`${url}/auth/signup`, data);
    if (res.status === 201) {
      cookie.set('twittrToken', `Bearer ${res.data.token}`, {path: '/', maxAge: 3600})
      localStorage.setItem("token", `Bearer ${res.data.token}`);
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
    const res = await axios.post(`${url}/post`, data, {
      headers: {
        Authorization: cookie.get('twittrToken'),
      },
    });
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
    const res = await axios.get(`${url}/post/${query}`, {
      headers: {
        Authorization: cookie.get('twittrToken'),
      },
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
    const res = await axios.get(`${url}/post/${query}`, {
      headers: {
        Authorization: cookie.get('twittrToken'),
      },
    });
    if (res.status === 200) {
      return res.data;
    }
  },
  getRecommendedUsers: async (limit: number, skip: number) => {
    const res = await axios.get(`${url}/user`, {
      headers: {
        Authorization: cookie.get('twittrToken'),
      },
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
    const res = await axios.get(`${url}/user/me`, {
      headers: {
        Authorization: cookie.get('twittrToken'),
      },
    });
    if (res.status === 200) {
      return res.data;
    }
  },
  getPostById: async (id: string) => {
    const res = await axios.get(`${url}/post/${id}`, {
      headers: {
        Authorization: cookie.get('twittrToken'),
      },
    });
    if (res.status === 200) {
      return res.data;
    }
  },
  createReaction: async (postId: string, reaction: string) => {
    const res = await axios.post(
      `${url}/reaction/${postId}`,
      { type: reaction },
      {
        headers: {
          Authorization: cookie.get('twittrToken'),
        },
      }
    );
    if (res.status === 201) {
      return res.data;
    }
  },
  deleteReaction: async (postId: string) => {
    const res = await axios.delete(`${url}/reaction/${postId}`, {
      headers: {
        Authorization: cookie.get('twittrToken'),
      },
    });
    if (res.status === 200) {
      return res.data;
    }
  },
  followUser: async (userId: string) => {
    const res = await axios.put(
      `${url}/follower/follow/${userId}`,
      {},
      {
        headers: {
          Authorization: cookie.get('twittrToken'),
        },
      }
    );
    if (res.status === 201) {
      return res.data;
    }
  },
  unfollowUser: async (userId: string) => {
    const res = await axios.patch(`${url}/follower/unfollow/${userId}`,{}, {
      headers: {
        Authorization: cookie.get('twittrToken'),
      },
    });
    if (res.status === 200) {
      return res.data;
    }
  },
  searchUsers: async (username: string, limit: number, skip: number) => {
    try {
      const cancelToken = axios.CancelToken.source();

      const response = await axios.get(`${url}/user/by_username`, {
        headers: {
          Authorization: cookie.get('twittrToken'),
        },
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
    const res = await axios.get(`${url}/user/${id}`, {
      headers: {
        Authorization: cookie.get('twittrToken'),
      },
    });
    if (res.status === 200) {
      return res.data;
    }
  },
  getPaginatedPostsFromProfile: async (
    limit: number,
    after: string,
    id: string
  ) => {
    const res = await axios.get(`${url}/post/by_user/${id}`, {
      headers: {
        Authorization: cookie.get('twittrToken'),
      },
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
    const res = await axios.get(`${url}/post/by_user/${id}`, {
      headers: {
        Authorization: cookie.get('twittrToken'),
      },
    });

    if (res.status === 200) {
      return res.data;
    }
  },

  isLogged: async () => {
    const res = await axios.get(`${url}/user/me`, {
      headers: {
        Authorization: cookie.get('twittrToken'),
      },
    });
    return res.status === 200;
  },

  getProfileView: async (id: string) => {
    const res = await axios.get(`${url}/user/${id}`, {
      headers: {
        Authorization: cookie.get('twittrToken'),
      },
    });

    if (res.status === 200) {
      return res.data;
    }
  },

  deleteProfile: async () => {
    const res = await axios.delete(`${url}/user/`, {
      headers: {
        Authorization: cookie.get('twittrToken'),
      },
    });

    if (res.status === 204) {
      localStorage.removeItem("token");
    }
  },

  getChats: async () => {
    const res = await axios.get(`${url}/chat`, {
      headers: {
        Authorization: cookie.get('twittrToken'),
      },
    });

    if (res.status === 200) {
      return res.data;
    }
  },

  getMutualFollows: async () => {
    const res = await axios.get(`${url}/follow/mutual`, {
      headers: {
        Authorization: cookie.get('twittrToken'),
      },
    });

    if (res.status === 200) {
      return res.data;
    }
  },

  createChat: async (id: string) => {
    const res = await axios.post(
      `${url}/chat`,
      {
        users: [id],
      },
      {
        headers: {
          Authorization: cookie.get('twittrToken'),
        },
      }
    );

    if (res.status === 201) {
      return res.data;
    }
  },

  getChat: async (id: string) => {
    const res = await axios.get(`${url}/chat/${id}`, {
      headers: {
        Authorization: cookie.get('twittrToken'),
      },
    });

    if (res.status === 200) {
      return res.data;
    }
  },

  deletePost: async (id: string) => {
    await axios.delete(`${url}/post/${id}`, {
      headers: {
        Authorization: cookie.get('twittrToken'),
      },
    });
  },

  getPaginatedCommentsByPostId: async ( id: string, limit: number, after: string ) => {
    const res = await axios.get(`${url}/comment/${id}`, {
      headers: {
        Authorization: cookie.get('twittrToken'),
      },
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
    const res = await axios.get(`${url}/comment/${id}`, {
      headers: {
        Authorization: cookie.get('twittrToken'),
      },
    });
    if (res.status === 200) {
      return res.data;
    }
  },

  deleteComment: async (id: string) => {
    await axios.delete(`${url}/comment/${id}`, {
      headers: {
        Authorization: cookie.get('twittrToken'),
      },
    });
  },
  createComment: async (data: PostData) => {
    const res = await axios.post(`${url}/comment`, data, {
      headers: {
        Authorization: cookie.get('twittrToken'),
      },
    });
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
