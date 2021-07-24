import React from 'react'
// import { NavLink } from 'react-router-dom';
// import {useDispatch} from 'react-redux';
// import {newUserRegistration} from './registerAction'
// import {useHistory} from 'react-router-dom'

// const initialState = {
// }

const ProfileComponent = () => {
    // const dispatch = useDispatch();
    // const history = useHistory();

    return (
        <div className="flex py-4 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col bg-gray-800 p-8 rounded-xl w-3/12 ">
                <img className="w-60 mx-auto mb-2" src="/svgs/profile.png" alt="dummy pic" />
                <div className="text-white text-2xl text-center">Ashwin Chandran</div>
                <div className="text-gray-500 text-lg text-center">@ashwinchandran13</div>
            </div>
            <div className="flex flex-col w-full mx-3.5">
                <div className="text-white text-3xl text-left bg-gray-800 rounded-xl p-3 mb-4">Basic Information</div>
                <div className="flex bg-gray-800 rounded-xl h-full">
                    <div className="flex flex-col m-5 w-full">
                        <div className="bg-blue-500 text-white text-left text-xl p-3 mb-3 rounded-xl">Name</div>
                        <div className="bg-blue-500 text-white text-left text-xl p-3 mb-3 rounded-xl">Username</div>
                        <div className="bg-blue-500 text-white text-left text-xl p-3 mb-3 rounded-xl">E-mail</div>
                        <div className="bg-blue-500 text-white text-left text-xl p-3 mb-3 rounded-xl">Bio</div>
                    </div>
                    <div className="flex flex-col m-5 w-full">
                        <div className="bg-blue-500 text-white text-left text-xl p-3 mb-3 rounded-xl">Ashwin Chandran</div>
                        <div className="bg-blue-500 text-white text-left text-xl p-3 mb-3 rounded-xl">ashwinchandran13</div>
                        <div className="bg-blue-500 text-white text-left text-xl p-3 mb-3 rounded-xl">ashwinchandran13@gmail.com</div>
                        <div className="bg-blue-500 text-white text-left text-xl p-3 mb-3 rounded-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, aspernatur error est natus non inventore necessitatibus quia repellendus itaque quisquam. Incidunt in eveniet iusto ad enim officia assumenda tempora ut nostrum soluta iste laborum, aperiam harum nam! Amet eligendi praesentium expedita, vitae at, dolorem aperiam quam tempora inventore, facere rem saepe debitis! Temporibus laudantium quo quia, nisi, velit maiores perspiciatis voluptates nesciunt non eaque assumenda magnam tempora officiis impedit harum, sunt enim rem autem repudiandae expedita praesentium quam. Ipsa eos deserunt provident reprehenderit minima voluptatibus molestiae dolorem eius itaque reiciendis ratione placeat aspernatur obcaecati, porro omnis sed optio tenetur rerum.</div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-4/12 mx-3.5">
                <div className="text-white text-3xl text-left bg-gray-800 rounded-xl p-3 mb-4">Recent Reviews</div>
                <div className="flex flex-col bg-gray-800 rounded-xl h-full">
                    <form className="relative m-5">
                        <svg width="20" height="20" fill="currentColor" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                        </svg>
                        <input className="focus:border-red-600 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10" type="text" aria-label="Filter projects" placeholder="Filter reviews" />
                    </form>
                </div>
            </div>
        </div> 
    )
}

export default ProfileComponent;