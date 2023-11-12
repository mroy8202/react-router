import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SignupForm = ({ setIsLoggedIn }) => {
    
    const navigate = useNavigate();
    const [formData, setFormData] = useState({firstName: "", lastName: "", email: "", password: "", confirmPassword: ""});

    function changeHandler(event) {
        setFormData( (prevFormData) => {
            return {
                ...prevFormData,
                [event.target.name] : event.target.value
            }
        })
    }

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [accountType, setAccountType] = useState("student")

    function submitHandler(event) {
        event.preventDefault();
        if(formData.password !== formData.confirmPassword) {
            toast.error("Passwords donot match")
            return ;
        }
        toast.success("Account Created");
        setIsLoggedIn(true);

        const finalData = {
            ...formData,
            accountType
        }

        console.log(finalData);

        navigate('/dashboard');
    }

  return (
    <div>
        {/* Student Instructor tab */}
        <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
            <button onClick={() => setAccountType("student")}
             className={`${accountType === "student" ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
            >
                Student
            </button>
            <button onClick={() => setAccountType("instructor")}
             className={`${accountType === "instructor" ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
            >
                Instructor
            </button>
        </div>

        <form onSubmit={submitHandler}>
            <div className='flex gap-x-4 mt-[20px]'>
                <label className='w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name <sup className='text-pink-200'>*</sup></p>
                    <input required type='text' name='firstName' value={formData.firstName} onChange={changeHandler} placeholder='Enter First Name' 
                     className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' />
                </label>

                <label className='w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name <sup className='text-pink-200'>*</sup></p>
                    <input required type='text' name='lastName' value={formData.lastName} onChange={changeHandler} placeholder='Enter Last Name' 
                     className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' />
                </label>
            </div>

            <div className='mt-[20px]'>
                <label className='w-full mt-[20px]'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address <sup className='text-pink-200'>*</sup></p>
                    <input required type='email' name='email' value={formData.email} onChange={changeHandler} placeholder='Enter Email Id' 
                     className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' />
                </label>
            </div>
            
            
            {/* CreatePassword and Confirm Password */}
            <div className='w-full flex gap-x-4 mt-[20px]'>
                <label className='w-full relative'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Create Password <sup className='text-pink-200'>*</sup></p>
                    <input required type={showPassword ? ('text') : ('password')} name='password' value={formData.password} onChange={changeHandler} placeholder='Enter Password' 
                     className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' />
                    <span className='absolute right-3 top-[38px] cursor-pointer' 
                     onClick={ () => setShowPassword( (prev) => !prev ) }>
                        {showPassword ? (<AiOutlineEye fontSize={24} fill='#AFB2BF' />): (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />)}
                    </span>
                </label>

                <label className='w-full relative'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm Password <sup className='text-pink-200'>*</sup></p>
                    <input required type={showConfirmPassword ? ('text') : ('password')} name='confirmPassword' value={formData.confirmPassword} onChange={changeHandler} placeholder='Confirm Password'
                     className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' />
                    <span className='absolute right-3 top-[38px] cursor-pointer' 
                     onClick={ () => setShowConfirmPassword( (prev) => !prev ) }>
                        {showConfirmPassword ? (<AiOutlineEye fontSize={24} fill='#AFB2BF' />): (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />)}
                    </span>
                </label>
            </div>

            <button className=' w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
                Create Account
            </button>
        </form>



    </div>
  )
}

export default SignupForm