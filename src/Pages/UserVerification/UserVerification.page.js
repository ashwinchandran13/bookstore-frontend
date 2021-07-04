import React,{useEffect,useState} from 'react'
import { useParams } from "react-router-dom";
import {userRegistrationVerification} from '../../Api/userApi';


const initialResponse = {
  status: "",
  message: "",
};

const UserVerificationPage = () => {
  const { _id, email } = useParams();
  const dt = { _id, email };
  const [response, setResponse] = useState(initialResponse);

  useEffect(() => {
    const apiCall = async () => {
      const result = await userRegistrationVerification(dt);
      setResponse(result)
    };
    !response.status && apiCall();
  }, [response]);

  return (
    <div className="max-w-screen-lg bg-indigo-500 shadow-2xl rounded-lg mx-auto text-center py-12 mt-4">
      <h2 className="text-3xl leading-9 font-bold tracking-tight text-white sm:text-4xl sm:leading-10">
        {response.status && <p>{response.message}</p>}
    </h2>
    </div>
  )
}

export default UserVerificationPage;