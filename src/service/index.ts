export interface SingUpData {
  name: string;
  password: string;
  email: string;
  username: string;
}

export interface SingInData {
  username?: string;
  email?: string;
  password: string;
}

export interface PostData {
  content: string;
  postCommentedId?: string;
  images?: File[];
}

export interface Post {
  id: string;
  content: string;
  postCommentedId?: string;
  images?: string[];
  createdAt: Date;
  authorId: string;
  author: Author;
  reactions: Reaction[];
  comments: Post[];
}

export interface Reaction {
  id: string;
  type: string;
  createdAt: Date;
  userId: string;
  postId: string;
  updatedAt: Date;
  deletedAt?: Date;
}
export interface Author {
  id: string;
  name?: string;
  username: string;
  profilePicture?: string;
  private: boolean;
  createdAt: Date;
}

export interface User {
  id: string;
  name?: string;
  username: string;
  profilePicture?: string;
  private: boolean;
  createdAt: string;
  followers: Follow[];
  follows: Follow[];
  posts: Post[];
}

export interface MessageDTO {
  id: string;
  content: string;
  createdAt: Date;
  chatId: string;
  senderId: string;
  sender: Author;
}

export interface ChatDTO {
  id: string;
  users: Author[];
  messages: MessageDTO[];
}

export interface Follow {
  id: string;
  followedId: string;
  followerId: string;
  createdAt: Date;
  deletedAt: Date;
  updatedAt: Date;
}

export interface Message {
  body: string,
  from: string,
  to: string,
}
