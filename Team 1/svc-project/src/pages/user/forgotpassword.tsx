import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import forgotPasswordAPI from '../../api/useAPI/forgotpasswordAPI';
import '../../assets/css/userCss/forgotpassword.scss';
import Input from '../../components/input/input';
import { useAppDispatch } from '../../stores/hook';
import { changePasswordSuccess } from '../../stores/slices/userSlice';
import { validateEmail } from '../../utils/validate';
import { validatePassword } from '../../utils/validate';
import { validateConfirmPassword } from '../../utils/validate';

const ForgotPassword = () => {
  const [err, setErr] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [errorEmail, setErrorEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorPassword, setErrorPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [errorConfirmPassword, setErrorConfirmPassword] = useState<string>('');
  const [borderEmailInput, setBorderEmailInput] = useState<string>('');
  const [borderPasswordInput, setBorderPasswordInput] = useState<string>('');
  const [borderConfirmPasswordInput, setBorderConfirmPasswordInput] = useState<string>('');

  const dispatch = useAppDispatch();

  const handleEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
  }, []);

  const handlePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
  }, []);

  const handleConfirmPassword = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setConfirmPassword(value);
  }, [])

  const checkEmail = validateEmail(email);
  const checkPassword = validatePassword(password);
  const checkConfirmPassword = validateConfirmPassword(confirmPassword, password);
  const status = !!(checkEmail.status && checkPassword.status && checkConfirmPassword.status);

  const validateForm = () => {
    setErrorEmail(checkEmail.message);
    setErrorPassword(checkPassword.message);
    setErrorConfirmPassword(checkPassword.message);
    return true;
  };

  const onSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (validateForm() && status == true) {
      const response = await forgotPasswordAPI(email, password, confirmPassword, setErr);
      const data = {
        userId: response.data.user_id,
        jwtToken: response.data.access_token
      }
      dispatch(changePasswordSuccess(data));
    }
  };

  return (
    <form className="forgotpassword-form">
      <hr/>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-2-strong">
              <div className="card-body p-5 text-center">
                <h3 className="mb-5">Forgot Password</h3>
                {err &&<div className='server-error'>{err}</div>}
                <div className="input-form">
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

                  {/* Input Password */}
                  <div className="password">
                    <Input
                      type="password"
                      id="password"
                      className={`form-control form-control-lg ${borderPasswordInput}`}
                      placeholder="New Password"
                      value={password}
                      onChange={handlePassword}
                      errorText={errorPassword}
                    />
                  </div>

                  {/* Input confirmPassword */}
                  <div className="confirmpassword">
                    <Input
                      type="password"
                      id="confirmpassword"
                      className={`form-control form-control-lg ${borderConfirmPasswordInput}`}
                      placeholder="Confirm New Password"
                      value={confirmPassword}
                      onChange={handleConfirmPassword}
                      errorText={errorConfirmPassword}
                    />
                  </div>
                </div>
                <div className="submit-button">
                  <button className="btn-submit" type="submit" onClick={onSubmit}>
                    Change Password
                  </button>
                </div>
                <hr className="my-4" />
                <div className="login-link">
                  <Link to="/login">Back to Login</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
export default ForgotPassword;
