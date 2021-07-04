import {registrationPending,registrationSuccess,registrationFail} from './registerSlice';
import {userRegistration} from '../../Api/userApi';


export const newUserRegistration=(frmData)=>async (dispatch)=>{
  try {
    dispatch(registrationPending())
    const result=await userRegistration(frmData)
    console.log(result);
    if(result.status===200){
      dispatch(registrationSuccess(result.data))
    }
  } catch (error) {
    dispatch(registrationFail(error.message))
  }
}