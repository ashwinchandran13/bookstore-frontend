import { loginPending, loginFail, loginSuccess } from './loginSlice';
import { userLogin } from '../../Api/userApi';
import { toast } from 'react-toastify';

export const loginAction = (frmData) => async (dispatch) => {
  try {
    dispatch(loginPending())
    const result = await userLogin(frmData);
    const { error } = result;
    console.log(error);
    if(error) {
      toast.error(error);
    } else {
      toast.success('Logged in successfully');  
    }
    console.log(result);
    if (result.status === 200) {
      dispatch(loginSuccess(result.message))
    } else {
      dispatch(loginFail(result.message))
    }
  } catch (error) {
    dispatch(loginFail(error))
  }
}