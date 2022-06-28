import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'stores/store';

export interface userState {
  jwtToken: string;
}
const initialState: userState = {
  jwtToken: '',
};

//initialize
const userSlice = createSlice({
  initialState,
  name: 'AuthState',
  reducers: {
    loginSuccess(state, action) {
      state.jwtToken = action.payload;
    },
  },
});

// Action
export const { loginSuccess } = userSlice.actions;
// Select
export const selectJwtToken = (state: RootState) => state.user.jwtToken;
// Reducer
const userReducer = userSlice.reducer;
export default userReducer;
