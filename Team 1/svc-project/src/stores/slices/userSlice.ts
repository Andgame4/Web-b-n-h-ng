import { createSlice } from '@reduxjs/toolkit';
export interface userState {
  jwtToken: string;
  userId: number;
}

const initialState: userState = {
  jwtToken: '',
  userId: 0
};

//initialize
const userSlice = createSlice({
  initialState,
  name: 'AuthState',
  reducers: {
    loginSuccess(state, action) {
      state.jwtToken = action.payload.jwtToken;
      state.userId = action.payload.userId;
    },
    registerSuccess(state, action) {
      state.jwtToken = action.payload.jwtToken;
      state.userId = action.payload.userId;
    },
    changePasswordSuccess(state, action) {
      state.jwtToken = action.payload.jwtToken;
      state.userId = action.payload.userId;
    }
  },
});

// Action
export const { loginSuccess, registerSuccess, changePasswordSuccess } = userSlice.actions;
// Select
export const selectJwtToken = (state: userState) => state.jwtToken;
// Reducer
const userReducer = userSlice.reducer;
export default userReducer;
