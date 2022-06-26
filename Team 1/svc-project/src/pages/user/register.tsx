import React, { useState } from 'react';
import axios from 'axios';
import '../../assets/css/register.scss';

const Register = () => {

    const [name, setName] = useState('');
    const [errorName, setErrorName] = useState('')
    const [email, setEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [errorPhonenumber, setErrorPhonenumber] = useState('');
    const [password, setPassword] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('')
    const [borderNameInput, setborderNameInput] = useState('')
    const [borderEmailInput, setBorderEmailInput] = useState('')
    const [borderPhonenumberInput, setborderPhonenumberInput] = useState('')
    const [borderPasswordInput, setBorderPasswordInput] = useState('');
    const [borderConfirmPasswordInput, setBorderConfirmPasswordInput] = useState('')


    const handleName = (event: any) => {
        const value = event.target.value;
        setName(value);
    }

    const handleEmail = (event: any) => {
        const value = event.target.value;
        setEmail(value);
    }

    const handlePhone = (event: any) => {
        const value = event.target.value;
        setPhonenumber(value);
    }

    const handlePassword = (event: any) => {
        const value = event.target.value;
        setPassword(value);
    }

    const handleConfirmPassword = (event: any) => {
        const value = event.target.value;
        setconfirmPassword(value);
    }

    const checkName = () => {
        if (!name) {
            setErrorName('Please enter your name');
            setborderNameInput('border-red')
            return false;
        } else {
            setErrorName('');
            setborderNameInput('');
            return true;
        }
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

    const checkPhoneNumber = () =>{
        const regexPhone = /^\d{10,11}$/;
        if(!phonenumber){
            setErrorPhonenumber('Please enter your phonenumber');
            setborderPhonenumberInput('border-red')
            return false
        }else if(regexPhone.test(phonenumber) === false){
            setErrorPhonenumber('Phone number must have 10 - 11 digits enter ');
            setborderPhonenumberInput('border-red');
            return false;
        }else{
            setErrorPhonenumber('');
            setborderPhonenumberInput('');
            return true;
        }
    }

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

    const checkConfirmPassword = () => {
        if(!confirmPassword){
            setErrorConfirmPassword('Please enter your confirmPassword');
            setBorderConfirmPasswordInput('border-red')
            return false;
        }else if (password !== confirmPassword) {
            setErrorConfirmPassword('Password and Confirm Password does not match');
            setBorderConfirmPasswordInput('border-red');
            return false;
        }else{
            setErrorConfirmPassword('');
            setBorderConfirmPasswordInput('');
            return true;
        }
    }

    const onSubmit = async (event: any) => {
        event.preventDefault();
        checkName();
        checkEmail();
        checkPhoneNumber();
        checkPassword();
        checkConfirmPassword();
        //Call API
        if (checkName() && checkEmail() && checkPhoneNumber() && checkPassword() && checkConfirmPassword()) {
            axios.post(`https://reqres.in/api/register`, {
                name: name,
                email: email,
                phonenumber: phonenumber,
                password: password,
                confirmPassword: confirmPassword
            })
            .then((Response) => {
                console.log(Response.data);
                console.log(Response);
                console.log('New')
            })
        }
    }

    return (
        <form className="vh-100">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card shadow-2-strong">
                            <div className="card-body p-5 text-center">

                                <h3 className="mb-5">Register</h3>
                                <div className="input-form">
                                    <p>{errorName}</p>
                                    <div className="name">
                                        <label className="name"></label>
                                        <input type="text"
                                            id="name"
                                            className={`form-control form-control-lg ${borderNameInput}`}
                                            placeholder="Name"
                                            value={name}
                                            onChange={handleName}
                                        />
                                    </div>
                                    <p>{errorEmail}</p>
                                    <div className="email">
                                        <label className="email"></label>
                                        <input type="email"
                                            id="email"
                                            className={`form-control form-control-lg ${borderEmailInput}`}
                                            placeholder="Email"
                                            value={email}
                                            onChange={handleEmail} />
                                    </div>
                                    <p>{errorPhonenumber}</p>
                                    <div className="phonenumber">
                                        <label className="phonenumber"></label>
                                        <input type="text"
                                            id="phonenumber"
                                            className={`form-control form-control-lg ${borderPhonenumberInput}`}
                                            placeholder="Phone Number"
                                            value={phonenumber}
                                            onChange={handlePhone}/>
                                    </div>
                                    <p>{errorPassword}</p>
                                    <div className="password">
                                        <label className="password"></label>
                                        <input type="password"
                                            id="password"
                                            className={`form-control form-control-lg ${borderPasswordInput}`}
                                            placeholder="Password" 
                                            value={password}
                                            onChange={handlePassword}/>
                                    </div>
                                    <p>{errorConfirmPassword}</p>
                                    <div className="confirmPassword">
                                        <label className="confirmPassword"></label>
                                        <input type="password"
                                            id="confirmPassword"
                                            className={`form-control form-control-lg ${borderConfirmPasswordInput}`}
                                            placeholder="Confirm Password"
                                            value={confirmPassword}
                                            onChange={handleConfirmPassword} />
                                    </div>
                                </div>
                                <div className="register-button">
                                    <button type="submit" className="btn-register" onClick={onSubmit}>Register</button>
                                </div>
                                <hr className="my-4" />
                                <div className="login-link">
                                    You have an account? <a href="/login">Login</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Register;
