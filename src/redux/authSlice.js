import { createSlice } from "@reduxjs/toolkit";
import { signInWithGoogle, logout } from "../firebase";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;

// Async Thunks
export const googleSignIn = () => async (dispatch) => {
  const user = await signInWithGoogle();
  if (user) dispatch(setUser(user));
};

export const googleSignOut = () => async (dispatch) => {
  await logout();
  dispatch(clearUser());
};

export default authSlice.reducer;
