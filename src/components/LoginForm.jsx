import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const LoginForm = ({ setIsLoggedIn }) => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: "", password: ""});

    function changeHandler(event) {
        setFormData( (prevFormData) => {
            return {
                ...prevFormData,
                [event.target.name] : event.target.value
            }
        })
    }

    const [showPassword, setShowPassword] = useState(false);

    function submitHandler(event) {
        event.preventDefault();
        // console.log(formData);
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate('/dashboard');
    } 

  return (
    <form onSubmit={submitHandler}>
        <label>
            <p>Email Address <sup>*</sup></p>
            <input required type='email' onChange={changeHandler} name='email' value={formData.email} placeholder='Enter Email id' />
        </label>

        <label>
            <p>Password <sup>*</sup></p>
            <input required type={showPassword ? ('text') : ('password')} onChange={changeHandler} name='password' value={formData.password} placeholder='Enter Password' />
            <span onClick={ () => setShowPassword( (prev) => !prev ) }>
                {showPassword ? (<AiOutlineEye />): (<AiOutlineEyeInvisible />)}
            </span>

            <Link to='#'>Forgot Password</Link>
        </label>

        <button>Sign In</button>
    </form>
  )
}

export default LoginForm