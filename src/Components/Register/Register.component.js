import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {newUserRegistration} from './registerAction'
import {useHistory} from 'react-router-dom'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
const initialState = {
  name: '',
  email: '',
  username: '',
  password: '',
  confirmpassword: ''
}
const passVerificationError = {
  confirmpassword: false,
};
const RegisterComponent = () => {
  const [newUser, setNewUser] = useState(initialState);
  const [passwordError, setPasswordError] = useState(passVerificationError);
  const dispatch=useDispatch();
  const history=useHistory();
  // const {message}=useSelector((state)=>state.register)


  useEffect(() => { }, [newUser])
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    const user = { ...newUser, [name]: value }
    setNewUser(user)
    if (name === "confirmpassword") {
      setPasswordError({
        ...passwordError,
        confirmpassword: newUser.password === value,
      });
    }
  }
  const onRegister = (e) => {
    e.preventDefault();
    const { name, email, username, password } = newUser;
    const registerObj={
      name,
      email,
      username,
      password
    }
    console.log(registerObj);
    dispatch(newUserRegistration(registerObj))
    history.push('/')
  }

  return (
    <div className="flex items-center justify-center bg-white-50 py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">

        <div>
          <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign Up
        </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={onRegister}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input name="name" defaultValue={newUser.name} onChange={handleOnChange} type="text" autoComplete="off" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Name" />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input id="email-address" name="email" defaultValue={newUser.email} onChange={handleOnChange} type="email" autoComplete="off" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
            </div>
            <div>
              <label htmlFor="username" className="sr-only">Username</label>
              <input id="username" name="username" defaultValue={newUser.username} onChange={handleOnChange} type="text" autoComplete="off" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Username" />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input id="password" name="password" defaultValue={newUser.password} onChange={handleOnChange} type="password" autoComplete="off" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
            </div>
            <div>
              <label htmlFor="confirmpassword" className="sr-only">Confirm Password</label>
              <input id="confirmpassword" name="confirmpassword" defaultValue={newUser.confirmpassword} onChange={handleOnChange} type="password" autoComplete="off" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Confirm Password" />
            </div>
            <div>
              {!passwordError.confirmpassword && (<p className="text-red-500">Password not match</p>)}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <NavLink to="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                Signin here
            </NavLink>
            </div>
          </div>
          <div>
            <button type="submit" disabled={Object.values(passwordError).includes(false)} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </span>
            Sign Up
          </button>
          {/* <ToastContainer /> */}
          </div>
        </form>
      </div>
    </div>

  )
}

export default RegisterComponent;