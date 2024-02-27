import './Sigin.css'

const Signin = ()=>{
    return(
        <>
        <main> 
            <div className="main">
                <div className="form">
                    <div className='signin'>Create an Account</div>
                    <div className='inputs'>
                        <div className='email'>Email</div>
                        <input type="text" name="" id="input1" placeholder='abc@gmail.com'/>
                        <div className='password'>
                            <div>Password</div>
                            <a href='/forgot'>Forgot?</a>
                        </div>
                        <input type="password" name="" id="input2" placeholder='........' />
                    </div>
                    <div className='signup-buttons'>
                        <button className='create-button'>Create account</button>
                        <button className='google-button'>Continue with Google</button>
                    </div>
                    <div className='footer'>Already Have An Account? <a href="/login">Login</a></div>
                </div>
            </div>
        </main>
        </>
    )
    
}
export default Signin;