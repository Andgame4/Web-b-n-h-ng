import React from 'react';
import '../../assets/css/register.scss';

export class Register extends React.Component {
    handleSubmit = (e: any) => { }
    handleChange = (e: any) => { }

    render() {
        return (
            <form className="vh-100" onSubmit={this.handleSubmit}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card shadow-2-strong">
                                <div className="card-body p-5 text-center">
                                    <h3 className="mb-5">Register</h3>
                                    <div className="input-form">
                                        <div className="username">
                                            <label className="username"></label>
                                            <input type="username" id="username" 
                                            className="form-control form-control-lg" 
                                            placeholder="Username" onChange={this.handleChange} />
                                        </div>
                                        <div className="email">
                                            <label className="email"></label>
                                            <input type="email" id="email" 
                                            className="form-control form-control-lg" 
                                            placeholder="Email" onChange={this.handleChange} />
                                        </div>
                                        <div className="phonenumber">
                                            <label className="phonenumber"></label>
                                            <input type="text" id="phonenumber" 
                                            className="form-control form-control-lg" 
                                            placeholder="Phone Number" onChange={this.handleChange} />
                                        </div>
                                        <div className="password">
                                            <label className="password"></label>
                                            <input type="password" id="password" 
                                            className="form-control form-control-lg" 
                                            placeholder="Password" onChange={this.handleChange} />
                                        </div>
                                        <div className="confirmPassword">
                                            <label className="confirmPassword"></label>
                                            <input type="password" id="confirmPassword" 
                                            className="form-control form-control-lg" 
                                            placeholder="Confirm Password" onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="register-button">
                                        <button type="submit" className="btn-register">Register</button>
                                    </div>
                                    <hr className="my-4"/>
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
}