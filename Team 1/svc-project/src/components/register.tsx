import React  from 'react';

export class Register extends React.Component {
    handleSubmit = (e : any) => {}
    handleChange = (e : any) => {}
    render(){
        return(
            <div className="wrapper">
                <div className="form-wrapper">
                    <h1>Register</h1>
                     <form onSubmit={this.handleSubmit} noValidate>
                        <div className="username">
                            <label className="username"> Username </label>
                            <input type="username" name="username" placeholder="Username" onChange={this.handleChange}/>
                        </div>
                        <div className="email">
                            <label className="email"> Email </label>
                            <input type="email" name="email" placeholder="Email" onChange={this.handleChange}/>
                        </div>
                        <div className="password">
                            <label className="password"> Password </label>
                            <input type="password" name="password" placeholder="Password" onChange={this.handleChange}/>
                        </div>
                        <div className="confirmPassword">
                            <label className="confirmPassword"> Confirm Password </label>
                            <input type="password" name="password" placeholder="ConfirmPassword" onChange={this.handleChange}/>
                        </div>
                        <div className="submit">
                            <button type="submit">Register</button>
                        </div>
                     </form>
                </div>
            </div>
        );
    }
}