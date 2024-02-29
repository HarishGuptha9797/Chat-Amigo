import './Sigin.css'
import { useState } from 'react'
import CreateAccount from './Createaccount'
import Logo from './Logo'
const Signin = ()=>{
    
    
    return(
        <>
        <main> 
            <div className="create-main">
                <div className="create-form">
                    <div>
                    <Logo />
                    </div>
                   <div>
                    <CreateAccount />
                   </div>
                </div>
            </div>
        </main>
        </>
    )
    
}
export default Signin;