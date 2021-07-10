import { configureStore } from '@reduxjs/toolkit'
import registrationReducer from './Components/Register/registerSlice'
import loginReducer from './Components/Login/loginSlice'



export const store = configureStore({
  reducer: {
    register:registrationReducer,
    login:loginReducer
  },
});