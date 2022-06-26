import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  user_data: null,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin_Sucess: (state, action) => {
      state.user = action.payload;
    },
    setLoginFail: (state, action) => {
      state.user = null;
      state.error = action.payload;
    },
    setLogout: (state) => {
      state.user = action.payload;
    },
  },
});

export const { setLogin_Sucess, setLoginFail, setLogout } = authSlice.actions;

//Selectors for grabbing information fom the data layer
export const selectUser = (state) => state.auth.user;
export const selectError = (state) => state.auth.error;
export const selectUserData = (state) => state.auth.user_data;

export default authSlice.reducer;
