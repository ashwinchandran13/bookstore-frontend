import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading:false,
  isAuth:false,
  error:''
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginPending: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state) => {
      state.isLoading = false;
      state.isAuth = true;
      state.error = "";
    },
    loginFail: (state, {payload}) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { loginPending, loginSuccess, loginFail } = loginSlice.actions

export default loginSlice.reducer