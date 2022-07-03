import { createAsyncThunk, createSlice, current, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../stores';

interface getAccountPayload {
  email: string,
  password: string
}
export const getAccount = createAsyncThunk('user/getAccount',
  async (payload: getAccountPayload) => {
    
   
   
    console.log("email: ",payload.email, "password: ", payload.password)
    const response = await fetch(`https://reqres.in/api/login`, {
      method: 'POST',
      body:JSON.stringify({email: payload.email,
          password: payload.password}),
        
      
      headers: {
        'Content-Type': "application/json",
      }
    })
    if (response.ok) {
      const state1 = await response.json();
      console.log("data",state1);
      return { state1 }
    }
  }
)
const initialState: any = [];
//initialize
const userSlice = createSlice({
  initialState,
  name: 'AuthState',
  reducers: {
    loginSuccess(state, action) {
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAccount.fulfilled, (state, action) => {
      console.log('fetching user data successfully')
      state.push(action.payload);
    })

    builder.addCase(getAccount.pending, (state, action) => {
      console.log('fetching user data...')
    })

    builder.addCase(getAccount.rejected, (state, action) => {
      console.log('fetched user failed')
    })
  }
});

// Action
export const { loginSuccess } = userSlice.actions;
// Select
// Reducer
const userReducer = userSlice.reducer;
export default userReducer;
