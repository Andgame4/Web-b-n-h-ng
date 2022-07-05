import { createSlice } from '@reduxjs/toolkit';

//const credentials = btoa("client:client@2022");

export interface userState {
  jwtToken: string;
  userId: number;
}

const initialState: userState = {
  jwtToken: JSON.parse(localStorage.getItem('accessToken')!),
  userId: Number.parseInt(JSON.parse(localStorage.getItem('id')!)),
};

//initialize
const userSlice = createSlice({
  initialState,
  name: 'AuthState',
  reducers: {
    loginSuccess(state, action) {
      state.jwtToken = action.payload.jwtToken;
      state.userId = action.payload.userId;
      console.log(state.userId);
      console.log(state.jwtToken);
    },
  },
});

// Action
export const { loginSuccess } = userSlice.actions;
// Select
export const selectJwtToken = (state: userState) => state.jwtToken;
export const selectUserId = (state: userState) => state.userId;

// Reducer
const userReducer = userSlice.reducer;
export default userReducer;
