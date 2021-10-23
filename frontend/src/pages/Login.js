import React from 'react'
import '../stylesheets/Login.scss'
import InputField from './InputField'

const Login = ({ setUsername }) => {
    const handleClick = (value) => {
        setUsername(value);
    }

    return (
        <div className='login-page'>
            <h1>WELCOME TO GOODJOBS</h1>
            <InputField placeholder='Username' iconType='user' onInputChange={handleClick}/>
            <InputField placeholder='Password' iconType='pass' onInputChange={() => {}}/>
            <button>LOGIN</button>
            <p>Create an Account</p>
        </div>
    )
}

export default Login
