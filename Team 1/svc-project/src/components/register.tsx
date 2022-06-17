import React  from 'react';

function Register() {

    const handleInputChange = (e) => {

    }


    const handleSubmit = (e) => {
        
    }
    return(
        <div className="form">
            <div className="form-body">
                <h1>Sign Up</h1>
                <div className="username">
                        <label className="form__label" for="username">User Name </label>
                        <input className="form__input"
                            type="username"
                            name="username"
                            id="username"
                            value={formValues.username}
                            onChange={(e) => handleInputChange(e)}
                            placeholder="User Name" />
                    </div>
                    <p>{formErrors.username}</p>
                    <div className="email">
                        <label className="form__label" for="email">Email </label>
                        <input className="form__input"
                            type="email"
                            name="email"
                            id="email"
                            value={formValues.email}
                            onChange={(e) => handleInputChange(e)}
                            placeholder="Email" />
                    </div>
                    <p>{formErrors.email}</p>
                    <div className="password">
                        <label className="form__label" for="password">Password </label>
                        <input className="form__input"
                            type="password"
                            name="password"
                            id="password"
                            value={formValues.password}
                            onChange={(e) => handleInputChange(e)}
                            placeholder="Password" />
                    </div>
                    <p>{formErrors.password}</p>
                    <div className="confirm-password">
                        <label className="form__label" for="confirmPassword">Confirm Password </label>
                        <input className="form__input"
                            type="password"
                            name="confirmPassword"
                            id="confirmPassword"
                            value={formValues.confirmPassword}
                            onChange={(e) => handleInputChange(e)}
                            placeholder="Confirm Password" />
                    </div>
                    <p>{formErrors.confirmPassword}</p>
                </div>
                <div class="footer">
                    <button className="btn-primary" onClick={(e) => handleSubmit(e)} type="submit" class="btn">Sign Up</button>
                </div>
            </div>
        </div>
    );

    
}

export default Register;


// return (
//     <div className='form'>
//         {
//             Object.keys(formErrors).length ===0 && isSubmit? 
//             (
//                 <div className ="UI Message Success">
//                     <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
//                 </div>
//             )
//             :(
//                 <pre></pre>
//             )
//         }
//         <form>
//             <div class="form-body">
//                 <h1> Sign Up </h1>
//                 <div className="username">
//                     <label className="form__label" for="username">User Name </label>
//                     <input className="form__input"
//                         type="username"
//                         name="username"
//                         id="username"
//                         value={formValues.username}
//                         onChange={(e) => handleInputChange(e)}
//                         placeholder="User Name" />
//                 </div>
//                 <p>{formErrors.username}</p>
//                 <div className="email">
//                     <label className="form__label" for="email">Email </label>
//                     <input className="form__input"
//                         type="email"
//                         name="email"
//                         id="email"
//                         value={formValues.email}
//                         onChange={(e) => handleInputChange(e)}
//                         placeholder="Email" />
//                 </div>
//                 <p>{formErrors.email}</p>
//                 <div className="password">
//                     <label className="form__label" for="password">Password </label>
//                     <input className="form__input"
//                         type="password"
//                         name="password"
//                         id="password"
//                         value={formValues.password}
//                         onChange={(e) => handleInputChange(e)}
//                         placeholder="Password" />
//                 </div>
//                 <p>{formErrors.password}</p>
//                 <div className="confirm-password">
//                     <label className="form__label" for="confirmPassword">Confirm Password </label>
//                     <input className="form__input"
//                         type="password"
//                         name="confirmPassword"
//                         id="confirmPassword"
//                         value={formValues.confirmPassword}
//                         onChange={(e) => handleInputChange(e)}
//                         placeholder="Confirm Password" />
//                 </div>
//                 <p>{formErrors.confirmPassword}</p>
//             </div>
//             <div className="footer">
//                 <button className="btn-primary" onClick={(e) => handleSubmit(e)} type="submit" class="btn">Sign Up</button>
//             </div>
//         </form>
//     </div>
// );