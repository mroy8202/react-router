import React from 'react'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import frameImage from '../assets/frame.png'

// This component will show the similar content of Login and SignUp Component
const Template = ({title, desc1, desc2, image, formType, setIsLoggedIn}) => {
  return (
    <div>
        <h1>{title}</h1>
        <p>
            <span>{desc1}</span>
            <span>{desc2}</span>
        </p>

        {formType === "signup" ? (<SignupForm setIsLoggedIn={setIsLoggedIn} />) : (<LoginForm setIsLoggedIn={setIsLoggedIn} />)}

        <div>
            <div></div>
            <p>or</p>
            <div></div>
        </div>

        <button>Sign Up with Google</button>

        <div>
            <img src={frameImage} alt='frame.img' width={558} height={504} loading='lazy' />
            <img src={image} alt='frame.img' width={558} height={504} loading='lazy' />
        </div>
    </div>
  )
}

export default Template