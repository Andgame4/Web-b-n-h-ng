import React from "react";
import '../assets/css/forgotpassword.scss';


const ForgotPassword = () => {
    return (
        <form className="vh-100" >
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card shadow-2-strong">
                            <div className="card-body p-5 text-center">

                                <h3 className="mb-5">Forgot Password</h3>
                                <div className="input-form">
                                    <div className="input-email">
                                        <input type="email" id="input-email" className="form-control form-control-lg" placeholder="Email" />
                                    </div>
                                    <div className="input-newpassword">
                                        <input type="password" id="input-newpassword" className="form-control form-control-lg" placeholder="New Password" />
                                    </div>
                                    <div className="input-cf-newpassword">
                                        <input type="password" id="input-cf-newpassword" className="form-control form-control-lg" placeholder="Confirm New Password" />
                                    </div>
                                </div>
                                <div className="submit-button">
                                    <button className="btn-submit" type="submit">Change Password</button>
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