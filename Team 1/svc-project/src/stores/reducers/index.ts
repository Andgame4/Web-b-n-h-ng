import { combineReducers } from '@reduxjs/toolkit';
import userReducer from '../slices/userSlice';
import authReducer from '../slices/authSlice';
import profileReducer from 'stores/slices/profileSlice';


const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  profile: profileReducer,
});

export default rootReducer;
