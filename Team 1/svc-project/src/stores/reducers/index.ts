import { combineReducers } from '@reduxjs/toolkit';
import { commonReducer } from '../slices/common';
import authReducer from '../slices/authSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  common: commonReducer,
});

export default rootReducer;
