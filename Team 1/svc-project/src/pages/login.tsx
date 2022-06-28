import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import '../assets/css/login.scss';
import loginAPI from '../api/loginAPI';
import Input from '../components/input/input';
import { validateEmail2 } from '../utils/validateEmail';
import { validatePassword2 } from '../utils/validatePassword';
const Login = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [borderEmailInput, setBorderEmailInput] = useState('')
    const [borderPasswordInput, setBorderPasswordInput] = useState('');


    const handleEmail = (e: any) => {
        const value = e.target.value;
        setEmail(value);
    }

    const handlePassword = (event: any) => {
        const value = event.target.value;
        setPassword(value);
    }

    const checkEmail = validateEmail2(email);
    const checkPassword = validatePassword2(password);
    const status = checkEmail.status && checkPassword.status;

    const validateForm = () => {
        setErrorEmail(checkEmail.message)
        setErrorPassword(checkPassword.message)
        return true;
    }

    //Test Fake API
    const onSubmit = async (event: any) => {
        event.preventDefault();
        if (validateForm() && status == true) {
            const response = await loginAPI(email, password, errMsg);
        }
    }

    return (
        <form className="vh-100" >
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card shadow-2-strong">
                            <div className="card-body p-5 text-center">
                                <h3 className="mb-5">SIGN IN</h3>
                                <p>{errMsg}</p>
                                <div className="input-form">

                                    {/* Input Email */}
                                    <div className="input-username">
                                        <Input type='email'
                                            id='input-email'
                                            className={`form-control form-control-lg ${borderEmailInput}`}
                                            placeholder='Email'
                                            value={email}
                                            onChange={handleEmail}
                                            errorText={errorEmail} />
                                    </div>

                                    {/* Input Password */}
                                    <div className="input-password">
                                        <Input type='password'
                                            id='input-password'
                                            className={`form-control form-control-lg ${borderPasswordInput}`}
                                            placeholder='Password'
                                            value={password}
                                            onChange={handlePassword}
                                            errorText={errorPassword}
                                        />
                                    </div>

                                </div>
                                <div className="login-button">
                                    <button className="btn-login"
                                        type="button"
                                        onClick={onSubmit}
                                    >SIGN IN</button>
                                </div>
                                <div className="forget-link">
                                    <a href="/forgotpassword">Forgot Password?</a>
                                </div>
                                <hr className="my-4" />
                                <div className="register-link">
                                    You don't have account? <a href="/register">Register</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Login;
