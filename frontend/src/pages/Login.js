import React from 'react'
import '../stylesheets/Login.scss'
import InputField from './InputField'
import { useState } from 'react'

const Login = ({ setUsername }) => {
    const [ userInfo, setUserInfo ] = useState({
        username: '',
        password: '',
        name: '',
    })

    const [ isSignup, setIsSignup ] = useState(false);

    const login = () => {
        if(isSignup){
            //check if username already exists
            //if not make username
            
        } else {
            //check if username & password combination exists
            //if exists:
            setUsername(userInfo.username);
        }
    }

    return (
        <div className='login-page'>
            <h1>WELCOME TO GOODJOBS</h1>
            {
                isSignup ?
                <InputField placeholder='Full name' iconType='user' onInputChange={(value) => {
                    const newUserInfo = {...userInfo, name:value};
                    setUserInfo(newUserInfo);
                }}/>
                : ''
            }
            <InputField placeholder='Username' iconType='user' onInputChange={(value) => {
                const newUserInfo = {...userInfo, username:value};
                setUserInfo(newUserInfo);
            }}/>
            <InputField placeholder='Password' iconType='pass'onInputChange={(value) => {
                const newUserInfo = {...userInfo, password:value};
                setUserInfo(newUserInfo);
            }}/>
            <button onClick={login}>{!isSignup ? 'LOGIN' : 'SIGNUP'}</button>
            <p onClick={() => setIsSignup(!isSignup)}>{!isSignup ? 'Create an Account' : 'Log in with Existing Account'}</p>
        </div>
    )
}

export default Login
