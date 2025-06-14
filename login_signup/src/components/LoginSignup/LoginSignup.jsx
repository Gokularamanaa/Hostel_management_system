import React from 'react'
import './LoginSignup.css'

import user_icon from '../Assets/user.png'
import email_icon from '../Assets/Email.png'    
import password_icon from '../Assets/Lock.png'
import { useState } from 'react'



const LoginSignup = () => {
  return (
    <div className="Container">
      <div className="Header">
        <div className="Text">Sign Up</div>
        <div className="underline"></div>
      </div>
      <div className="Inputs">
        <div className="Input">
        <img src={user_icon} alt="User"/>
        <input type="text" Placeholder="Username"/>
       </div>
      </div>
      <div className="Inputs">
        <div className="Input">
        <img src={email_icon} alt="Email"/>
        <input type="email" Placeholder="Email"/>
       </div>
      </div>
      <div className="Inputs">
        <div className="Input">
        <img src={password_icon} alt="Password"/>
        <input type="password" Placeholder="Password"/>
       </div>
      </div>
      <div className="Forget-Password">Lost Password? <span>Click Here!</span></div>
      <div className="submit-container">
        <div className="submit">Sign Up</div>
        <div className="submit">Login</div>
      </div>
    </div>
  );
  
};

export default LoginSignup;
