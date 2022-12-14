import { useCallback, useEffect, useState } from 'react';
import '../assets/css/login.scss';
import loginAPI from '../api/useAPI/loginAPI';
import Input from '../components/input/input';
import { validateEmail } from '../utils/validate';
import { validatePassword } from '../utils/validate';
import { Link } from 'react-router-dom';
import { loginSuccess } from '../stores/slices/userSlice';
import { useAppSelector, useAppDispatch } from '../stores/hook';
const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [err, setErr] = useState<string>('');
  const [errorEmail, setErrorEmail] = useState<string>('');
  const [errorPassword, setErrorPassword] = useState<string>('');
  const [borderEmailInput, setBorderEmailInput] = useState<string>('');
  const [borderPasswordInput, setBorderPasswordInput] = useState<string>('');

  const dispatch = useAppDispatch();

  const handleEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
  }, []);

  const handlePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
  }, []);

  const checkEmail = validateEmail(email);
  const checkPassword = validatePassword(password);
  const status = !!(checkEmail.status && checkPassword.status);

  const validateForm = () => {
    setErrorEmail(checkEmail.message);
    setErrorPassword(checkPassword.message);
    return true;
  };

  const onSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    //Call loginAPI, dispatch state to userSlice
    if (validateForm() && status == true) {
      const response = await loginAPI(email, password, setErr);
      const data = {
        userId: response.data.user_id,
        jwtToken: response.data.access_token,
      };
      dispatch(loginSuccess(data));
    }
  };

  return (
    <form className="login-form">
      <hr />
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-2-strong">
              <div className="card-body p-5 text-center">
                <h3>SIGN IN</h3>
                <div className="server-error">{err}</div>
                <div className="input-form">
                  {/* Input Email */}
                  <div className="input-username">
                    <Input
                      type="email"
                      id="input-email"
                      className={`form-control form-control-lg ${borderEmailInput}`}
                      placeholder="Email"
                      value={email}
                      onChange={handleEmail}
                      errorText={errorEmail}
                    />
                  </div>

                  {/* Input Password */}
                  <div className="input-password">
                    <Input
                      type="password"
                      id="input-password"
                      className={`form-control form-control-lg ${borderPasswordInput}`}
                      placeholder="Password"
                      value={password}
                      onChange={handlePassword}
                      errorText={errorPassword}
                    />
                  </div>
                </div>
                <div className="login-button">
                  <button className="btn-login" type="button" onClick={onSubmit}>
                    SIGN IN
                  </button>
                </div>
                <div className="forget-link">
                  <Link to="/forgotpassword">Forgot Password?</Link>
                </div>
                <hr className="my-4" />
                <div className="register-link">
                  You don't have account? <Link to="/register">Register</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
