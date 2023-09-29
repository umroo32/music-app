import './login.css'
import React from 'react'
// import { NavLink } from 'react-router-dom'
import { loginEndpoint } from '../../spotify'

const Login = () => {
  return (
    <div className='login-page'>
        <img className='logo' src='https://vectorseek.com/wp-content/uploads/2023/08/Spotify-Logo-Png-Vector.svg-.png' alt='spotify-logo' />
        <a href={loginEndpoint}><div className='login-btn'>LOG IN</div></a>
    </div>
  )
}

export default Login