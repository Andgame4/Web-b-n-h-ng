import axios from 'axios';
import { useState, useEffect, SyntheticEvent, useCallback } from 'react';
import '../../assets/css/profile.scss';
import Avatar from './avatar';
import Input from '../input/input';
import OrderSideMenu from './orderSideMenu';
import { validateAddress, validatePhoneNumber } from 'utils/validate';
import profileAPI from 'api/profileAPI';
import { useAppSelector, useAppDispatch } from 'stores/hook';
import {
  addProfile,
  changeAddress,
  changeAvatar,
  changeGender,
  changePhone,
} from 'stores/slices/profileSlice';
import { useDispatch } from 'react-redux';

const FormProfile = () => {
  console.log('render profile form');
  const jwtToken = useAppSelector((state) => state.user.jwtToken);
  const profile = useAppSelector((state) => state.profile.profileInfor);
  const dispatch = useDispatch();
  const id = useAppSelector((state) => state.user.userId);
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState<string>('');
  const [isValidAddress, setIsValidAddress] = useState<string>('');
  const [borderValidatePhone, setBorderValidatePhone] = useState<string>('');
  const [borderValidateAddress, setBorderValidatePhoneAddress] = useState<string>('');

  const handlePhone = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(changePhone({ phoneNumber: value }));
  }, []);

  const handleAddress = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    dispatch(changeAddress({ address: value }));
  }, []);

  console.log(id);

  // call token
  const baseURL = 'http://10.22.4.62:8762/user/' + id;
  const fetchData = async () => {
    const config = {
      headers: {
        Authorization: 'Bearer ' + jwtToken,
      },
    };
    try {
      const { data: response } = await axios.get(baseURL, config);
      console.log(response);
      dispatch(
        addProfile({
          userName: response.data.name,
          email: response.data.username,
          phoneNumber: response.data.phone,
          gender: response.data.gender,
          address: response.data.address,
          avatar: response.data.avatar,
          role: response.data.role,
        })
      );
    } catch (error: any) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    console.log('Fetch');
    fetchData();
  }, []);

  const handleSubmitBtn = async (event: SyntheticEvent) => {
    event.preventDefault();
    const checkPhoneNumber = validatePhoneNumber(profile.phoneNumber);
    const checkAddress = validateAddress(profile.address);
    const status = !!(checkAddress.status && checkPhoneNumber.status);
    const validateForm = () => {
      setIsValidAddress(checkAddress.message);
      setIsValidPhoneNumber(checkPhoneNumber.message);
      return true;
    };
    if (validateForm() && status === true) {
      const response = await profileAPI(
        profile.userName,
        profile.gender,
        profile.address,
        profile.phoneNumber,
        profile.avatar
      );
    }
  };

  const handleChangeAvatar = (value: string) => {
    dispatch(changeAvatar({ avatar: value }));
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
                    <div className="username_info">{profile.userName}</div>
                  </div>
                </div>
                <div className="row input-profile-email">
                  <div className="col-md-6 col-xs-12 profile-email">
                    <label className="labels">Email:</label>
                    <div className="email_info">{profile.email}</div>
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
                      value={profile.phoneNumber}
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
                          onChange={() => dispatch(changeGender({ gender: 'male' }))}
                          checked={profile.gender === 'male'}
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
                          onChange={() => dispatch(changeGender({ gender: 'female' }))}
                          checked={profile.gender === 'female'}
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
                        value={profile.address}
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
              <Avatar
                value={profile.avatar}
                onClick={(value: string) => handleChangeAvatar(value)}
              />
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
