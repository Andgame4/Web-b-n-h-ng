import React, {useState} from "react";
import axios from "axios";
import '../../assets/css/forgotpassword.scss';



const ForgotPassword = () => {

    const [errMsg, setErrMsg] = useState('');
    const [email, setEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [newpassword, setNewPassword] = useState('');
    const [errorNewPassword, setErrorNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [errorConfirmNewPassword, setErrorConfirmNewPassword] = useState('');
    const [borderEmailInput, setBorderEmailInput] = useState('');
    const [borderNewPasswordInput, setBorderNewPasswordInput] = useState('');
    const [borderConfirmNewPasswordInput, setBorderConfirmNewPasswordInput] = useState('');

    const handleEmail = (event: any) => {
        const value = event.target.value;
        setEmail(value);
    }

    const handleNewPassword = (event: any) => {
        const value = event.target.value;
        setNewPassword(value);
    }

    const handleConfirmNewPassword = (event: any) => {
        const value = event.target.value;
        setConfirmNewPassword(value);
    }

    const checkEmail = () => {
        const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!email) {
            setErrorEmail('Please enter your email');
            setBorderEmailInput('border-red')
            return false;
        } else if (regexEmail.test(email) === false) {
            setErrorEmail('Your email incorrect');
            setBorderEmailInput('border-red')
            return false;
        } else {
            setErrorEmail('');
            setBorderEmailInput('')
            return true;
        }
    }
    const checkNewPassword = () => {
        if (!newpassword) {
            setErrorNewPassword('Please enter your password');
            setBorderNewPasswordInput('border-red')
            return false
        } else if (newpassword.length < 6) {
            setErrorNewPassword('Your password must have at least 6 characters');
            setBorderNewPasswordInput('border-red');
            return false;
        } else {
            setErrorNewPassword('');
            setBorderNewPasswordInput('');
            return true;
        }
    }
    const checkConfirmNewPassword = () => {
        if(!confirmNewPassword){
            setErrorConfirmNewPassword('Please enter your confirmNewPassword');
            setBorderConfirmNewPasswordInput('border-red')
            return false;
        }else if (newpassword !== confirmNewPassword) {
            setErrorConfirmNewPassword('New Password and Confirm New Password does not match');
            setBorderConfirmNewPasswordInput('border-red');
            return false;
        }else{
            setErrorConfirmNewPassword('');
            setBorderConfirmNewPasswordInput('');
            return true;
        }
    }

    const onSubmit = async (event: any) => {
        event.preventDefault();
        checkEmail();
        checkNewPassword();
        checkConfirmNewPassword();

        if(checkEmail() && checkNewPassword() && checkConfirmNewPassword()){
            axios.post(`https://reqres.in/api/forgotpassword`, {
                email: email,
                newpassword: newpassword,
                confirmNewPassword: confirmNewPassword
            })
            .then((Response) =>{
                console.log(Response.data);
                console.log(Response);
                console.log('New')
            })
        }
    }

    return (
        <form className="vh-100" >
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card shadow-2-strong">
                            <div className="card-body p-5 text-center">

                                <h3 className="mb-5">Forgot Password</h3>
                                <div className="input-form">
                                    <p>{errorEmail}</p>
                                    <div className="email">
                                        <label className="email"></label>
                                        <input type="email" 
                                            id="email" 
                                            className={`form-control form-control-lg ${borderEmailInput}`} 
                                            placeholder="Email" 
                                            value={email} 
                                            onChange={handleEmail}/>
                                    </div>
                                    <p>{errorNewPassword}</p>
                                    <div className="newpassword">
                                        <label className="newpassword"></label>
                                        <input type="password" 
                                            id="newpassword" 
                                            className={`form-control form-control-lg ${borderNewPasswordInput}`} 
                                            placeholder="New Password" 
                                            value={newpassword}
                                            onChange={handleNewPassword}/>
                                    </div>
                                    <p>{errorConfirmNewPassword}</p>
                                    <div className="confirmnewpassword">
                                        <label className="confirmnewpassword"></label>
                                        <input type="password" 
                                            id="confirmnewpassword" 
                                            className={`form-control form-control-lg ${borderConfirmNewPasswordInput}`} 
                                            placeholder="Confirm New Password" 
                                            value ={confirmNewPassword}
                                            onChange={handleConfirmNewPassword}/>
                                    </div>
                                </div>
                                <div className="submit-button">
                                    <button className="btn-submit" type="submit" onClick={onSubmit}>Change Password</button>
                                </div>
                                <hr className="my-4"/>
                                <div className="login-link">
                                    <a href="/login">Back to Login</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}
export default ForgotPassword; 