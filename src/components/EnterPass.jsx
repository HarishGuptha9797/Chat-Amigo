import { useState } from 'react'
import './EnterPass.css'

const EnterPass = ()=>{
    const [showPassword,setShowPassword]=useState('password')
    const changeType = ()=>{
        if(showPassword==='password')
        {
            setShowPassword('text');
        }
        else
        {
            setShowPassword('password')
        }
    }
    return(
        <div className="password-box">
            <div className='password'>
                <div>Password</div>
                    <a href='/forgot'>Forgot?</a>
                </div>
                <div className='enter-password'>
                    <input type={showPassword} name="" id="input2" placeholder='........' className='password-input'/>
                    <input type="checkBox" name="" id="" onClick={changeType} className='show-password'/>
                </div>
        </div>
    )
}

export default EnterPass;