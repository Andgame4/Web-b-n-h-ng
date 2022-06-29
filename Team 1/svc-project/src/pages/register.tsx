import React, {useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/register.scss';
import Input from '../components/input/input';
import registerAPI from '../api/registerAPI';
import { validateName } from '../utils/validateName';
import { validateEmail } from '../utils/validateEmail';
import { validatePhoneNumber } from '../utils/validatePhone';
import { validatePassword } from '../utils/validatePassword';
import { validateConfirmPassword } from '../utils/validateConfirmPassword';

const Register = () => {
  const [errMsg, setErrMsg] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [errorName, setErrorName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [errorEmail, setErrorEmail] = useState<string>('');
  const [phonenumber, setPhonenumber] = useState<string>('');
  const [errorPhonenumber, setErrorPhoneNumber] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorPassword, setErrorPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [errorConfirmPassword, setErrorConfirmPassword] = useState<string>('');
  const [borderNameInput, setborderNameInput] = useState<string>('');
  const [borderEmailInput, setBorderEmailInput] = useState<string>('');
  const [borderPhonenumberInput, setborderPhoneNumberInput] = useState<string>('');
  const [borderPasswordInput, setBorderPasswordInput] = useState<string>('');
  const [borderConfirmPasswordInput, setBorderConfirmPasswordInput] = useState<string>('');

  const handleName = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
  }, [])

  const handleEmail = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
}, [])

  const handlePhone = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhonenumber(value);
  }, [])

  const handlePassword = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
  }, [])

  const handleConfirmPassword = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setConfirmPassword(value);
  }, [])

  const checkName = validateName(name);
  const checkEmail = validateEmail(email);
  const checkPhoneNumber = validatePhoneNumber(phonenumber);
  const checkPassword = validatePassword(password);
  const checkConfirmPassword = validateConfirmPassword(confirmPassword, password);
  const status =
    !!(checkName.status &&
    checkEmail.status &&
    checkPhoneNumber.status &&
    checkPassword.status &&
    checkConfirmPassword.status);

  const validateForm = () => {
    setErrorName(checkName.message);
    setErrorEmail(checkEmail.message);
    setErrorPhoneNumber(checkPhoneNumber.message);
    setErrorPassword(checkPassword.message);
    setErrorConfirmPassword(checkConfirmPassword.message);
    return true;
  };

  //  Test Fake API
  const onSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (validateForm() && status == true) {
      const response = await registerAPI(
        name,
        email,
        phonenumber,
        password,
        confirmPassword,
        errMsg
      );
    }
  };

  return (
    <form className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-2-strong">
              <div className="card-body p-5 text-center">
                <h3 className="mb-5">Register</h3>
                <div className="input-form">
                  {/* Input Name */}
                  <div className="name">
                    <Input
                      type="text"
                      id="name"
                      className={`form-control form-control-lg ${borderNameInput}`}
                      placeholder="Name"
                      value={name}
                      onChange={handleName}
                      errorText={errorName}
                    />
                  </div>
                  {/* Input Email */}
                  <div className="email">
                    <Input
                      type="email"
                      id="email"
                      className={`form-control form-control-lg ${borderEmailInput}`}
                      placeholder="Email"
                      value={email}
                      onChange={handleEmail}
                      errorText={errorEmail}
                    />
                  </div>
                  {/* Input Phonenumber */}
                  <div className="phonenumber">
                    <Input
                      type="text"
                      id="phonenumber"
                      className={`form-control form-control-lg ${borderPhonenumberInput}`}
                      placeholder="Phone Number"
                      value={phonenumber}
                      onChange={handlePhone}
                      errorText={errorPhonenumber}
                    />
                  </div>
                  {/* Input Password */}
                  <div className="password">
                    <Input
                      type="password"
                      id="password"
                      className={`form-control form-control-lg ${borderPasswordInput}`}
                      placeholder="Password"
                      value={password}
                      onChange={handlePassword}
                      errorText={errorPassword}
                    />
                  </div>
                  {/* Input Confirm Password */}
                  <div className="confirmPassword">
                    <Input
                      type="password"
                      id="confirmPassword"
                      className={`form-control form-control-lg ${borderConfirmPasswordInput}`}
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={handleConfirmPassword}
                      errorText={errorConfirmPassword}
                    />
                  </div>
                </div>
                <div className="register-button">
                  <button type="submit" className="btn-register" onClick={onSubmit}>
                    Register
                  </button>
                </div>
                <hr className="my-4" />
                <div className="login-link">
                  You have an account? <Link to="/login">Login</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;
