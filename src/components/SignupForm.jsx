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

    function submitHandler(event) {
        event.preventDefault();
        // console.log(formData);
        if(formData.password !== formData.confirmPassword) {
            toast.error("Passwords donot match")
            return ;
        }
        toast.success("Account Created");
        setIsLoggedIn(true);
        navigate('/dashboard');
    }

  return (
    <div>
        {/* Student Instructor tab */}
        <div>
            <button>Student</button>
            <button>Instructor</button>
        </div>

        <form onSubmit={submitHandler}>
            <div>
                <label>
                    <p>First Name<sup>*</sup></p>
                    <input required type='text' name='firstName' value={formData.firstName} onChange={changeHandler} placeholder='Enter First Name' />
                </label>

                <label>
                    <p>Last Name<sup>*</sup></p>
                    <input required type='text' name='lastName' value={formData.lastName} onChange={changeHandler} placeholder='Enter Last Name' />
                </label>
            </div>

            <label>
                <p>Email Address<sup>*</sup></p>
                <input required type='email' name='email' value={formData.email} onChange={changeHandler} placeholder='Enter Email Id' />
            </label>
            
            {/* CreatePassword and Confirm Password */}
            <div>
                <label>
                    <p>Create Password<sup>*</sup></p>
                    <input required type={showPassword ? ('text') : ('password')} name='password' value={formData.password} onChange={changeHandler} placeholder='Enter Password' />
                    <span onClick={ () => setShowPassword( (prev) => !prev ) }>
                        {showPassword ? (<AiOutlineEye />): (<AiOutlineEyeInvisible />)}
                    </span>
                </label>

                <label>
                    <p>Confirm Password<sup>*</sup></p>
                    <input required type={showConfirmPassword ? ('text') : ('password')} name='confirmPassword' value={formData.confirmPassword} onChange={changeHandler} placeholder='Confirm Password' />
                    <span onClick={ () => setShowConfirmPassword( (prev) => !prev ) }>
                        {showConfirmPassword ? (<AiOutlineEye />): (<AiOutlineEyeInvisible />)}
                    </span>
                </label>
            </div>

            <button>Create Account</button>
        </form>



    </div>
  )
}

export default SignupForm