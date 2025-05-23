import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentUser:null,
  error:null,
  loading:false,
}


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signinStart:(state)=>{
      state.loading=true;
    },
    signInSuccess:(state, action)=>{
      state.currentUser=action.payload;
      state.loading=false;
      state.error=null;
    },
    signInFailure:(state, action)=>{
      state.error = action.payload;
      state.loading=false;
    },
  },
})

// Action creators are generated for each case reducer function
export const { signinStart, signInSuccess, signInFailure } = userSlice.actions

export default userSlice.reducer