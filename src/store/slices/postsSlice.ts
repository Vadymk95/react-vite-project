import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

interface PostsState {
  posts: [];
}

const initialState: PostsState = {
  posts: [],
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPosts: (state) => {
      state.posts
    },
    addPost: (state) => {
      state.posts;
    },
    removePost: (state, action: PayloadAction<number>) => {
      state.posts;
    },
  },
});

export const { getPosts, addPost, removePost } = postsSlice.actions;

export const selectCount = (state: RootState) => state.posts;

export default postsSlice.reducer;
