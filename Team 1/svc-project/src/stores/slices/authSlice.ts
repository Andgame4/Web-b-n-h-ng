import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  login: {
    currentUser: null,
    isLogged: false,
  },
  register: {
    success: false,
  },
};

// initialize
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.login.currentUser = action.payload;
      state.login.isLogged = true;
    },
    registerSuccess: state => {
      state.register.success = true;
    },
    logoutSuccess: state => {
      state.login.currentUser = null;
      state.login.isLogged = false;
    },
  },
});

export const { loginSuccess, registerSuccess, logoutSuccess } = authSlice.actions;

export default authSlice.reducer;
