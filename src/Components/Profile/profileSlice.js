import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading:false,
  profile:[],
  isAuth:false,
  error:''
}

export const profileSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    profileGetPending: (state) => {
      state.isLoading = true;
      state.profile=[];
    },
    profileGetSuccess: (state,{payload}) => {
      state.isLoading = false;
      state.isAuth = true;
      state.profile=payload;
      state.error = "";
    },
    profileGetFail: (state, {payload}) => {
      state.isLoading = false;
      state.error = payload;
      state.profile=[];
    },
  },
})

// Action creators are generated for each case reducer function
export const { profileGetPending, profileGetSuccess, profileGetFail } = profileSlice.actions

export default profileSlice.reducer