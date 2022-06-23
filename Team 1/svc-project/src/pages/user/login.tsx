import React from "react";
import '../../assets/css/login.scss';

const Login = () => {

    // const [showPassword, setShowPassword] = useState(false);

    // const togglePassword = () => {
    //     if(showPassword){
    //         setShowPassword(false);
    //     }else{
    //         setShowPassword(true);
    //     }
    // }
    return (
        <form className="vh-100" >
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card shadow-2-strong">
                            <div className="card-body p-5 text-center">

                                <h3 className="mb-5">LOGIN</h3>
                                <div className="input-form">
                                    <div className="input-username">
                                        <input type="email" id="input-email" className="form-control form-control-lg" placeholder="Email" />
                                    </div>
                                    <div className="input-password">
                                        <input type="password" id="input-password" className="form-control form-control-lg" placeholder="Password" />
                                    </div>
                                </div>
                                <div className="login-button">
                                    <button className="btn-login" type="submit">LOGIN</button>
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