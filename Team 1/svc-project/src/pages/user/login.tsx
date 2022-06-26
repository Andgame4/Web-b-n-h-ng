import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import '../../assets/css/login.scss';

const Login = () => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [borderEmailInput, setBorderEmailInput] = useState('')
    const [borderPasswordInput, setBorderPasswordInput] = useState('');

    const handleEmail = (event: any) => {
        const value = event.target.value;
        setEmail(value);
    }

    const handlePassword = (event: any) => {
        const value = event.target.value;
        setPassword(value);
    }

    //Check email correct
    const checkEmail = () => {
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!email) {
            setErrorEmail('Please enter your email');
            setBorderEmailInput('border-red')
            return false;
        } else if (regex.test(email) === false) {
            setErrorEmail('Your email incorrect');
            setBorderEmailInput('border-red')
            return false;
        } else {
            setErrorEmail('');
            setBorderEmailInput('')
            return true;
        }
    }

    //Check password correct
    const checkPassword = () => {
        if (!password) {
            setErrorPassword('Please enter your password');
            setBorderPasswordInput('border-red')
            return false
        } else if (password.length < 6) {
            setErrorPassword('Your password must have at least 6 characters');
            setBorderPasswordInput('border-red');
            return false;
        } else {
            setErrorPassword('');
            setBorderPasswordInput('');
            return true;
        }
    }

    //Test Fake API
    const onSubmit = async (event: any) => {
        event.preventDefault();
        checkPassword();
        //Call API
        if (checkEmail() && checkPassword()) {
            axios.post(`https://reqres.in/api/login`, {
                email: email,
                password: password
            })
            .then((Response) => {
                console.log(Response.data);
                console.log(Response);
                console.log('New')
            })
        }


    }



    // const userRef = useRef<HTMLInputElement>(null!);
    // useEffect(() => {
    //     userRef.current.focus();
    //   }, []);

    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    // .then(data => {
    //     return data.json
    // })
    // .then(data => {
    //     console.log('Check data: ', data)
    // })



    return (
        <form className="vh-100" >
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card shadow-2-strong">
                            <div className="card-body p-5 text-center">
                                <h3 className="mb-5">SIGN IN</h3>
                                <div className="input-form">

                                    {/* Input Email */}
                                    <p>{errorEmail}</p>
                                    <div className="input-username">
                                        <input type="email"
                                            id="input-email"
                                            className={`form-control form-control-lg ${borderEmailInput}`}
                                            placeholder="Email"
                                            value={email}
                                            onChange={handleEmail}
                                        />
                                    </div>

                                    {/* Input Password */}
                                    <p>{errorPassword}</p>
                                    <div className="input-password">
                                        <input type="password"
                                            id="input-password"
                                            className={`form-control form-control-lg ${borderPasswordInput}`}
                                            placeholder="Password"
                                            value={password}
                                            onChange={handlePassword}
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
