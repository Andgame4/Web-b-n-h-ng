import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import '../../assets/css/register.scss';


type UserSubmitForm ={
    name:string;
    email:string;
    phonenumber:string;
    password:string;
    confirmPassword:string;
};

const Register = () => {

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        username: Yup.string().required('Username is required'),
        email: Yup.string().required('Email is required').email('Email is invalid'),
        phonenumber: Yup.string().required('Phonenumber is required')
        .min(10, 'Username must be at least 10 characters')
        .max(11, 'Username must not exceed 11 characters'),
        password: Yup.string().required('Password is required')
        .min(8, 'Password must be at least 8 characters'),
        confirmPassword: Yup.string().required('Confirm Password is required')
        .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
    });

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<UserSubmitForm>({
        resolver: yupResolver(validationSchema)
    });
      
    const onSubmit = (data: UserSubmitForm) =>{
        console.log(JSON.stringify(data, null, 2));
    }

        return (
            <form className="vh-100" onSubmit={handleSubmit(onSubmit)}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card shadow-2-strong">
                                <div className="card-body p-5 text-center">
                                    <h3 className="mb-5">Register</h3>
                                    <div className="input-form">
                                        <div className="name">
                                            <label className="name"></label>
                                            <input type="text" {...register('name')} 
                                            id="name" 
                                            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                            placeholder="Name"
                                            />
                                            <div className="invalid-feedback">{errors.name?.message}</div>
                                        </div>
                                        <div className="email">
                                            <label className="email"></label>
                                            <input type="text"{...register('email')} 
                                            id="email" 
                                            className={`form-control ${errors.email ? 'is-invalid' : ''}`} 
                                            placeholder="Email"/>
                                            <div className="invalid-feedback">{errors.email?.message}</div>
                                        </div>
                                        <div className="phonenumber">
                                            <label className="phonenumber"></label>
                                            <input type="text"{...register('phonenumber')}
                                             id="phonenumber" 
                                            className={`form-control ${errors.phonenumber ? 'is-invalid' : ''}`} 
                                            placeholder="Phone Number"/>
                                            <div className="invalid-feedback">{errors.phonenumber?.message}</div>
                                        </div>
                                        <div className="password">
                                            <label className="password"></label>
                                            <input type="password"{...register('password')}
                                            id="password" 
                                            className={`form-control ${errors.password ? 'is-invalid' : ''}`} 
                                            placeholder="Password" />
                                            <div className="invalid-feedback">{errors.password?.message}</div>
                                        </div>
                                        <div className="confirmPassword">
                                            <label className="confirmPassword"></label>
                                            <input type="password"{...register('confirmPassword')}
                                            id="confirmPassword" 
                                            className={`form-control ${
                                                errors.confirmPassword ? 'is-invalid' : ''
                                            }`} 
                                            placeholder="Confirm Password"/>
                                            <div className="invalid-feedback">{errors.confirmPassword?.message}</div>
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

export default Register;