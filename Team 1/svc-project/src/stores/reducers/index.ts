import { combineReducers } from '@reduxjs/toolkit';
import userReducer from '../slices/userSlice';
import authReducer from '../slices/authSlice';
import profileReducer from 'stores/slices/profileSlice';
import productAdminReducer from 'stores/slices/productSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  profile: profileReducer,
  productAdmin: productAdminReducer,
});

export default rootReducer;
