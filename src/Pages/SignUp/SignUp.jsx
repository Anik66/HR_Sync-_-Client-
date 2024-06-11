
import { Link, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import img1 from "../../assets/register.jpg"
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { createContext, useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";
import Swal from "sweetalert2";


const SignUp = () => {
  const [error,setError] =useState("")
  const [showPassword, SetShowPassword] = useState(false)
  const { register, handleSubmit,reset, formState: { errors } } = useForm();
  const {createUser,updateUserProfile } =useContext(AuthContext)
  const navigate =useNavigate()
  const onSubmit = data => {
    console.log(data)
    const {email,password,name,photoURL} =data
    if(password.length <6){
      setError("password length must be 6 character")
      toast.error("password length must be 6 character")
      return
    }
    
   else if(!/.*[A-Z].*/.test(password)){
      setError('password must have one uppercase')
      toast.error("password must have atleast one uppercase")
      return
    }
   else if(!/.*[a-z].*/.test(password)){
      setError('password must have one lowercase')
      toast.error("password must have atleast one lowercase")
      

      return
    }
    
    setError('')

    createUser(email,password)
    .then(result =>{
      const loggedUser =result.user 
      console.log(loggedUser)
      updateUserProfile(name,photoURL)
      .then(()=>{
         console.log('user profile updated')
         reset()
         Swal.fire({
          position: "top-end",
          icon: "success",
          title: "user created successfully",
          showConfirmButton: false,
          timer: 1500
        });
        navigate('/')
      })
      .catch(error =>console.log(error))
    })

  };




  return (
    <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
      <div className='flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl '>
        <div
          className='hidden bg-cover bg-center lg:block lg:w-1/2'
          style={{
            backgroundImage: `url(${img1})`,
          }}
        ></div>

        <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>
          <div className='flex justify-center mx-auto item-center'>
            <img className='w-auto h-7  ' alt='' />
            <span className=' font-bold text-2xl font bold' >HR<span className="text-orange-500">Sync</span> </span>


          </div>

          <p className='mt-3 text-xl text-center text-gray-600 '>
            Welcome back!
          </p>

          <div className='flex cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg   hover:bg-gray-50 '>
            <div className='px-4 py-2'>
              <svg className='w-6 h-6' viewBox='0 0 40 40'>
                <path
                  d='M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z'
                  fill='#FFC107'
                />
                <path
                  d='M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z'
                  fill='#FF3D00'
                />
                <path
                  d='M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z'
                  fill='#4CAF50'
                />
                <path
                  d='M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z'
                  fill='#1976D2'
                />
              </svg>
            </div>

            <span className='w-5/6 px-4 py-3 font-bold text-center'>
              Sign in with Google
            </span>
          </div>

          <div className='flex items-center justify-between mt-4'>
            <span className='w-1/5 border-b  lg:w-1/4'></span>

            <div className='text-xs text-center text-gray-500 uppercase  hover:underline'>
              or login with email
            </div>

            <span className='w-1/5 border-b dark:border-gray-400 lg:w-1/4'></span>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} >


            <div className='mt-4'>
              <label
                className='block mb-2 text-sm font-medium text-gray-600 '
                htmlFor='LoggingEmailAddress'
              >
                
                <span className="label-text text-2xl font-bold">Name</span>
              </label>
              <input
                id='LoggingEmailAddress'
                autoComplete='email'
                name='name'{...register("name", { required: true })}
                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                type='text'
              />
              {errors.name && <span className="font-bold pb-1 text-red-500">Name is required</span>}
            </div>
            <div className='mt-4'>
              <label
                className='block mb-2 text-sm font-medium text-gray-600 '
                htmlFor='LoggingEmailAddress'
              >
                
                <span className="label-text text-2xl font-bold">PhotoURL</span>
              </label>
              <input
                id='LoggingEmailAddress'
                autoComplete='email'
                {...register("photoURL", { required: true })}
                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                type='text'
              />
              {errors.photoURL&& <span className="font-bold pb-1 text-red-500">Photourl is required</span>}
            </div>
            <div className='mt-4'>
              <label
                className='block mb-2 text-sm font-medium text-gray-600 '
                htmlFor='LoggingEmailAddress'
              >
                
                <span className="label-text text-2xl font-bold">Email Address</span>
              </label>
              <input
                id='LoggingEmailAddress'
                autoComplete='email'
                name='email'
                {...register("email", { required: true })}
                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                type='email'
              />
              {errors.email && <span className="font-bold pb-1 text-red-500">Email is required</span>}
            </div>

            <div className="form-control ">
              <label className="label">
                <span className="label-text text-2xl font-bold">Password</span>
              </label>
              {errors.password && <span className="font-bold pb-1 text-red-500">password is required</span>}
              <input type={showPassword ? "text" : "password"}   {...register("password", { required: true })} placeholder="password" className="input input-bordered"
              />

              <span className="absolute  mt-[60px] top-1 right-1" onClick={() => SetShowPassword(!showPassword)}> {
                showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
              }</span>


            </div>
            <div className='mt-6'>
              <button
                type='submit'
                className='w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'
              >
                Sign Up
              </button>
            </div>
          </form>

          {
          error && <small className="text-red-600">{error}</small>
          
       }

          <div className='flex items-center justify-between mt-4'>
            <span className='w-1/5 border-b  md:w-1/4'></span>

            <Link to='/login' className='text-xs text-gray-500 uppercase  hover:underline'
            >
              or sign Ip
            </Link>

            <Link to="/" className='text-xs text-gray-500 uppercase  hover:underline'> Back To Home</Link>

            <span className='w-1/5 border-b  md:w-1/4'></span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SignUp;
