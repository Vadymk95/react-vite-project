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
    decrement: (state) => {
      state.posts;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.posts;
    },
  },
});

export const { getPosts, decrement, incrementByAmount } = postsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.posts;

export default postsSlice.reducer;
