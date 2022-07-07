import { createSlice } from '@reduxjs/toolkit';

//const credentials = btoa("client:client@2022");
interface User {
  userName: string;
  email: string;
  phoneNumber: string;
  address: string;
}
export interface UserState {
  userInfor: User;
}

const initialState: UserState = {
  userInfor: {
    userName: '',
    email: '',
    phoneNumber: '',
    address: '',
  },
};

//initialize
const userManagementSlice = createSlice({
  initialState,
  name: 'AuthState',
  reducers: {
    addUserInfo(state, action) {
      state.userInfor.userName = action.payload.userName;
      state.userInfor.email = action.payload.email;
      state.userInfor.phoneNumber = action.payload.phoneNumber;
      state.userInfor.address = action.payload.address;
    },
    changeUserPhone(state, action) {
      state.userInfor.phoneNumber = action.payload.phoneNumber;
    },
    changeUserAddress(state, action) {
      state.userInfor.address = action.payload.address;
    },
    changeUserEmail(state, action) {
      state.userInfor.email = action.payload.email;
    },
    changeUserName(state, action) {
      state.userInfor.userName = action.payload.userName;
    },
  },
});

// Action
export const { addUserInfo, changeUserPhone, changeUserAddress, changeUserEmail, changeUserName } =
  userManagementSlice.actions;

// Reducer
const userManagementReducer = userManagementSlice.reducer;
export default userManagementReducer;
