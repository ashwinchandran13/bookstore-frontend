import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  message:"",
}

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    registrationPending: (state) => {
      state.isLoading=true;
    },
    registrationSuccess: (state,{payload}) => {
      state.isLoading=false;
      state.message=payload;
    },
    registrationFail: (state, {payload}) => {
      state.isLoading=false;
      state.message=payload;
    },
  },
})

export const { registrationPending, registrationSuccess, registrationFail } = registerSlice.actions

export default registerSlice.reducer;