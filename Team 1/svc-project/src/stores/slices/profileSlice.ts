import { createSlice } from '@reduxjs/toolkit';

//const credentials = btoa("client:client@2022");
interface Profile {
  userName: string;
  email: string;
  phoneNumber: string;
  gender: string;
  address: string;
  avatar: string;
  role: string;
}
export interface ProfileState {
  profileInfor: Profile;
}

const initialState: ProfileState = {
  profileInfor: {
    userName: '',
    email: '',
    phoneNumber: '',
    gender: 'male',
    address: '',
    avatar:
      'https://static2.yan.vn/YanNews/2167221/202003/dan-mang-du-trend-thiet-ke-avatar-du-kieu-day-mau-sac-tu-anh-mac-dinh-b0de2bad.jpg',
    role: '',
  },
};

//initialize
const profileSlice = createSlice({
  initialState,
  name: 'AuthState',
  reducers: {
    addProfile(state, action) {
      state.profileInfor.userName = action.payload.userName;
      state.profileInfor.email = action.payload.email;
      state.profileInfor.phoneNumber = action.payload.phoneNumber;
      state.profileInfor.gender = action.payload.gender;
      state.profileInfor.address = action.payload.address;
      state.profileInfor.avatar = action.payload.avatar;
      state.profileInfor.role = action.payload.role;
    },
    changePhone(state, action) {
      state.profileInfor.phoneNumber = action.payload.phoneNumber;
    },
    changeAddress(state, action) {
      state.profileInfor.address = action.payload.address;
    },
    changeGender(state, action) {
      state.profileInfor.gender = action.payload.gender;
    },
    changeAvatar(state, action) {
      state.profileInfor.avatar = action.payload.avatar;
    },
  },
});

// Action
export const { addProfile, changePhone, changeAddress, changeGender, changeAvatar } =
  profileSlice.actions;

// Reducer
const profileReducer = profileSlice.reducer;
export default profileReducer;
