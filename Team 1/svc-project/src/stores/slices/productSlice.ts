import { createSlice } from '@reduxjs/toolkit';

//const credentials = btoa("client:client@2022");

export interface ProfileState {
  productInfor:any;
}

const initialState: ProfileState = {
  productInfor: {
  
  },
};

//initialize
const productAdminSlice = createSlice({
  initialState,
  name: 'AuthState',
  reducers: {
    getProductAdmin(state, action) {
      state.productInfor= action.payload?.productInfor;
    }
  },
});

// Action
export const { getProductAdmin} =productAdminSlice.actions;

// Reducer
const productAdminReducer = productAdminSlice.reducer;
export default productAdminReducer;
