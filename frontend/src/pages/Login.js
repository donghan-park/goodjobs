import React from 'react'
import '../stylesheets/Login.scss'
import InputField from './InputField'

const Login = () => {
    return (
        <div className='login-page'>
            <h1>WELCOME TO GOODJOBS</h1>
            <InputField placeholder='Username' iconType='user'/>
            <InputField placeholder='Password' iconType='pass'/>
            <button>LOGIN</button>
            <p>Create an Account</p>
        </div>
    )
}

export default Login
