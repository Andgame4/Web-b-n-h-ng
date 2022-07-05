import axios from 'axios';
import { useState, useEffect, SyntheticEvent, useCallback } from 'react';
import '../../assets/css/profile.scss';
import Avatar from './avatar';
import Input from '../input/input';
import OrderSideMenu from './orderSideMenu';
import { validateAddress, validatePhoneNumber } from 'utils/validate';

const FormProfile = () => {
  const [userName, setUserName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [gender, setGender] = useState<string>('male');
  const [address, setAddress] = useState<string>('');
  const [avatar, setAvatar] = useState<string>(
    'https://static2.yan.vn/YanNews/2167221/202003/dan-mang-du-trend-thiet-ke-avatar-du-kieu-day-mau-sac-tu-anh-mac-dinh-b0de2bad.jpg'
  );
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState<string>('');
  const [isValidAddress, setIsValidAddress] = useState<string>('');
  const [borderValidatePhone, setBorderValidatePhone] = useState<string>('');
  const [borderValidateAddress, setBorderValidatePhoneAddress] = useState<string>('');

  const handlePhone = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhoneNumber(value);
  }, []);

  const handleAddress = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setAddress(value);
  }, []);

  // call token
  const baseURL = 'http://localhost:8000/user';
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(baseURL);
        setUserName(response.username);
        setAddress(response.address);
        setAvatar(response.avatar);
        setGender(response.gender);
        setEmail(response.email);
        setPhoneNumber(response.phone);
      } catch (error: any) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);
  // validate
  const checkPhoneNumber = validatePhoneNumber(phoneNumber);
  const checkAddress = validateAddress(address);
  const status = !!(checkAddress.status && checkPhoneNumber.status);
  const validateForm = () => {
    setIsValidAddress(checkAddress.message);
    setIsValidPhoneNumber(checkPhoneNumber.message);
    return true;
  };
  //
  const handleSubmitBtn = (event: SyntheticEvent) => {
    event.preventDefault();
    validateForm();
  };
  return (
    <div>
      <div className="container_profile">
        <div className="row container-form">
          {/* profile */}
          <div className="col-md-3 col-xs-12">
            <OrderSideMenu />
          </div>
          <div className="col-md-6 col-xs-12">
            <div className="order-block__title">
              <h2>MY ACCOUNT</h2>
            </div>
            <div>
              <form action="" method="" className="form-horizontal" onSubmit={handleSubmitBtn}>
                <div className="row input-profile-username">
                  <div className="col-md-12 col-xs-12 profile-name">
                    <label className="labels">UserName:</label>
                    <div className="username_info">{userName}</div>
                  </div>
                </div>
                <div className="row input-profile-email">
                  <div className="col-md-6 col-xs-12 profile-email">
                    <label className="labels">Email:</label>
                    <div className="email_info">{email}</div>
                  </div>
                </div>
                <div className="row input-profile-phone">
                  <div className="col-md-12 col-xs-12">
                    <label className="labels">Phone:</label>
                    <Input
                      type="text"
                      id="input-phone"
                      className={`form-control form-control-lg ${borderValidatePhone}`}
                      placeholder=""
                      value={phoneNumber}
                      onChange={handlePhone}
                    />
                    <p className="alert-file-validation">{isValidPhoneNumber}</p>
                  </div>
                </div>
                <div className="row input-profile-gender">
                  <div className="col-md-12 col-xs-12">
                    <label className="labels">Gender:</label>
                    <div className="form-group">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          id="male"
                          value="male"
                          onChange={() => setGender('male')}
                          checked={gender === 'male'}
                        />
                        <label className="form-check-label" htmlFor="inlineCheckbox1">
                          Male
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          id="female"
                          value="female"
                          onChange={() => setGender('female')}
                          checked={gender === 'female'}
                        />
                        <label className="form-check-label" htmlFor="inlineCheckbox2">
                          Female
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row input-profile-address">
                  <div className="col-md-12 col-xs-12">
                    <div className="form-group">
                      <label className="labels">Address:</label>
                      <textarea
                        className={`form-control form-control-lg ${borderValidateAddress}`}
                        name="address"
                        value={address}
                        onChange={handleAddress}
                      ></textarea>
                      <p className="alert-file-validation">{isValidAddress}</p>
                    </div>
                  </div>
                </div>
                <div className="row input-profile-button">
                  <div className="mt5">
                    <button className="btn-primary profile-button" type="submit">
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-xs-12 border-right">
            <div className="d-flex flex-column align-items-center text-center">
              <Avatar value={avatar} onClick={(value: string) => setAvatar(value)} />
              <p className="validate-avatar">
                Maximum file size 1 MB <br />
                Format: .JPEG, .PNG
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormProfile;
