import axios from 'axios';
// import { toast } from 'react-toastify';

const rootUrl = 'http://localhost:4000/api/user'
const userProfileUrl = rootUrl + '/register'
const verificationUrl = rootUrl + '/verify'
const userLoginUrl=rootUrl+'/login'

export const userRegistration = async (frmData) => {
  const res = await axios.post(userProfileUrl, frmData)
  console.log(res);
  return res;
}

export const userRegistrationVerification =async (frmData) => {
  const res = await axios.put(verificationUrl, frmData);
  return res.data;
};

export const userLogin =async (frmData) => {
  const res = await axios.post(userLoginUrl, frmData);
  console.log(res.data);
  if(res && res.data.token){
    localStorage.setItem('x-access-token',res.data.token)
  }
  return res.data;
};