import {registrationPending,registrationSuccess,registrationFail} from './registerSlice';
import {userRegistration} from '../../Api/userApi';
import { toast } from 'react-toastify';


export const newUserRegistration=(frmData)=>async (dispatch)=>{
  try {
    dispatch(registrationPending())
    const result=await userRegistration(frmData)
    const { error } = result;
    console.log(result);
    if (error) {
      toast.error(error);
    } else {
      toast.success('User Registration Completed');
    }
    if(result.status===200){
      dispatch(registrationSuccess(result.data))
    }
  } catch (error) {
    dispatch(registrationFail(error.message))
  }
}