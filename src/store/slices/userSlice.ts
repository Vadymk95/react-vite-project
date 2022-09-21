import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuth: JSON.parse(localStorage.getItem('auth') as string) ? true : false,
  email: null,
  token: null,
  id: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      localStorage.setItem('auth', 'true');
      state.isAuth = true;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    removeUser(state) {
      localStorage.setItem('auth', 'false');
      state.isAuth = false;
      state.email = null;
      state.token = null;
      state.id = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
