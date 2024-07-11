import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import placeholder from '../../assets/images/img_placeholder.jpeg';
import { RiLockPasswordFill } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const LoginPage=() =>{
    const [action, setAction] =useState("Sign Up")
    return (
    
       <div className='container mx-auto'>
        <h1>welcome to dc gbagada</h1>
         
          <div className='signup-container container'>
         <div className="signup-header">
            <div className="signup-text">{action}</div>
            <div className="underline"></div>
         </div>

         <div className="signup-inputs">

            {action === "Login" ? <div></div>:

            <div className="signup-input">
            <FaUser className='signup-icon'/>
            <input type="text" name="" id="" placeholder='Full Name' />
            </div>
            }
            
            <div className="signup-input">
            <MdOutlineEmail className='signup-icon'/>
            <input type="email" name="" id="" placeholder='Email'/>
            </div>

            <div className="signup-input">
            <RiLockPasswordFill className='signup-icon'/>
            <input type="password" name="" id="" placeholder='Password' />
            </div>

         </div>

         {action === "Sign Up" ? <div></div> :
             <div className="forgot-password">Forgot Password? <span><Link to='/forgot'>Click Here</Link> </span></div>
         }
     
     <div className="underline"></div>
         <div className="submit-container">
            
            <div className={action==="Login" ? "signup-submit gray":"signup-submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up" ? "signup-submit gray": "signup-submit"} onClick={()=>{setAction("Login")}}>Login</div>
         </div>
      </div>
      </div>
        
    
    )
};
export default LoginPage;




