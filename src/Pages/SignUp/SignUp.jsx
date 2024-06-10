import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import img1 from "../../assets/register.jpg"
import toast from "react-hot-toast"


const SignUp = () => {
    const [error,setError] =useState("")
    const [showPassword,SetShowPassword] =useState(false)
    const navigate =useNavigate()
  const{createUser,signInWithGoogle,updateUserProfile,user,setUser} =useContext(AuthContext)
  


  
  const location =useLocation();


  const handleGoogleSignIn = async()=>{
    try{
      await signInWithGoogle()
    toast.success('Sign In successfull')
    navigate('/')
    }
    catch(err){
      console.log(err)
      toast.error(err?.message)
    }


  }


  

  

  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm();

  const onSubmit =data =>{
    const {email,password,fullName,photourl} =data
    
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
      //create user and updteprofile
    //   updateUserProfile(fullName,photourl)
    //   .then(()=>{
    //     navigate(location?.state ?location.state : "/")
    //   })
      //console.log(result)
      toast.success("Registation Successful",{
        position:"top-center"
        
      });
      
    })
    
  }
    return (
      <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
        <div className='flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl '>
          <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>
            <div className='flex justify-center mx-auto'>
            <div className='flex justify-center mx-auto item-center gap-2'>
              <img className='w-auto h-7  ' lt='' />
                <span className=' font-bold text-2xl font bold' >HR<span className="text-orange-500">Sync</span> </span>
             
           
            </div>
            </div>
  
            <p className='mt-3 text-xl text-center text-gray-600 '>
              Get Your Free Account Now.
            </p>
  
            <div onClick={handleGoogleSignIn  }  className='flex cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg   hover:bg-gray-50 '>
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
                or Registration with email
              </div>
  
              <span className='w-1/5 border-b dark:border-gray-400 lg:w-1/4'></span>
            </div>
       

            <form onSubmit={handleSubmit(onSubmit)} className=" animate__animated animate__flipInX card-body">
    <div className="form-control">
      <label className="label">
        <span className="label-text text-2xl font-bold">Name</span>
      </label>
      {errors.fullName && <span className=" text-red-500 font-bold pb-1">This field is required</span>}
      <input type="text" {...register("name", { required: true })} placeholder="name" className="input input-bordered" />
      
    </div>

    <div className="form-control">
      <label className="label">
        <span className="label-text text-2xl font-bold">Email</span>
      </label>
      {errors.email && <span className=" text-red-500 font-bold pb-1">This field is required</span>}
      <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text text-2xl font-bold">Photo url</span>
      </label>
      {errors.photourl && <span className=" text-red-500 font-bold pb-1">This field is required</span>}
      <input type="text" {...register("photo", { required: true })} placeholder="photourl" className="input input-bordered"  />
    </div>
   <div className="relative">
   <div className="form-control ">
      <label className="label">
        <span className="label-text text-2xl font-bold">Password</span>
      </label>
      {errors.password && <span className="font-bold pb-1 text-red-500">This field is required</span>}
      <input type={showPassword?"text":"password"}   {...register("password", { required: true })} placeholder="password" className="input input-bordered" 
       />

         <span className="absolute  mt-[60px] top-1 right-1" onClick={()=>SetShowPassword(!showPassword)}> {
                    showPassword? <FaEye></FaEye>:<FaEyeSlash></FaEyeSlash>
                  }</span>
       
     
    </div>
   </div>
    {
          error && <small className="text-red-600">{error}</small>
          
       }
    <div className="form-control mt-6">
      <button className="btn btn-primary">Sign Up</button>
    </div>
  </form>
        
            <div className='flex items-center justify-between mt-4'>
              <span className='w-1/5 border-b  md:w-1/4'></span>
  
              <Link
                to='/login'
                className='text-xs text-gray-500 uppercase  hover:underline'
              >
                or sign in
              </Link>
  
              <span className='w-1/5 border-b  md:w-1/4'></span>
            </div>
          </div>
          <div className='hidden bg-cover bg-center lg:block lg:w-[400px] '
            style={{
              backgroundImage: `url(${img1})`,
            }}
          ></div>
        </div>
      </div>
    )
  }

export default SignUp;