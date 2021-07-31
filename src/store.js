import { configureStore } from '@reduxjs/toolkit'
import registrationReducer from './Components/Register/registerSlice'
import loginReducer from './Components/Login/loginSlice'
import profileReducer from './Components/Profile/profileSlice'




export const store = configureStore({
  reducer: {
    register:registrationReducer,
    login:loginReducer,
    profile:profileReducer
  },
});