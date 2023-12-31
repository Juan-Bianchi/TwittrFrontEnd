import { createSlice } from "@reduxjs/toolkit";
import { LIMIT } from "../util/Constants";
import { ChatDTO, Post, User } from "../service";

type InitalStateType = {
  user: User;
  feed: Post[];
  query: string;
  length: number;
  currentChat?: ChatDTO;
  hasMorePosts: boolean;
  pointer: string;
};

const initialState: InitalStateType = {
  user: {
    id: "",
    name: "",
    username: "",
    createdAt: new Date().toISOString(),
    private: false,
    profilePicture: "",
    follows: [],
    followers: [],
    posts: [],
  },
  feed: [],
  length: LIMIT,
  query: "",
  hasMorePosts: true,
  pointer: ''
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    updateFeed: (state, action) => {
      state.feed = action.payload;
    },
    setLength: (state, action) => {
      state.length = action.payload;
    },
    setQuery: (state, action) => {
      state.query = action.payload;
    },

    setChat: (state, action) => {
      state.currentChat = action.payload;
    },

    addMessage: (state, action) => {
      if (state.currentChat) {
        state.currentChat.messages.push(action.payload);
      }
    },
    
    updatePointer: (state, action) => {
      state.pointer = action.payload;
    },
    updateHasMorePosts: (state, action) => {
      state.hasMorePosts = action.payload;
    }
  },
});

export const { setUser, updateFeed, setLength, setQuery, setChat, addMessage, updateHasMorePosts,  updatePointer} =
  userSlice.actions;

export default userSlice.reducer;
