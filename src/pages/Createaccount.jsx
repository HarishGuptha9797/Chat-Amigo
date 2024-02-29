import './CreateAccount.css'
import EnterEmail from '../components/EnterEmail'
import EnterPass from '../components/EnterPass'
const CreateAccount = ()=>{
    return(
        <>
            <div className='create-account-box'>
                <div className='title'>Create an Account</div>
                <div className='inputs'>
                    <div> <EnterEmail /> </div>
                    <div> <EnterPass /> </div>
                </div>
                <div className='signup-buttons'>
                    <button className='create-button'>Create account</button>
                    <button className='google-button'>Continue with Google</button>
                </div>
                <div className='footer'>Already Have An Account? <a href='/login'> Login</a></div>
            </div>
        </>
    )
}


export default CreateAccount;