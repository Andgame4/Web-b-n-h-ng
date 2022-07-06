import { combineReducers } from '@reduxjs/toolkit';
import userReducer from '../slices/userSlice';
import authReducer from '../slices/authSlice';
import profileReducer from 'stores/slices/profileSlice';
import userManagementReducer from 'stores/slices/userManagemetSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  profile: profileReducer,
  userManagement: userManagementReducer,
});

export default rootReducer;
