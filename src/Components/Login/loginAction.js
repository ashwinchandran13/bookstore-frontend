import { loginPending, loginFail, loginSuccess } from './loginSlice';
import { userLogin } from '../../Api/userApi';

export const loginAction = (frmData) => async (dispatch) => {
  try {
    dispatch(loginPending())
    const result = await userLogin(frmData);
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