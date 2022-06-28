import axios from 'axios';
import { useState, useEffect } from 'react';
import '../assets/css/profile.scss';
import Avatar from './avatar';

const FormProfile = () => {
  const [userName, setUserName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [avatar, setAvatar] = useState<string>(
    'https://static2.yan.vn/YanNews/2167221/202003/dan-mang-du-trend-thiet-ke-avatar-du-kieu-day-mau-sac-tu-anh-mac-dinh-b0de2bad.jpg'
  );
  const [isValidPhone, setIsValidPhone] = useState<string>('');
  const [isValidAddress, setIsValidAddress] = useState<string>('');
  const [borderValidatePhone, setBorderValidatePhone] = useState<string>('');
  const [borderValidateAddress, setBorderValidatePhoneAddress] = useState<string>('');
  const [loading, setLoading] = useState(true);

  // call token
  const baseURL = 'http://localhost:8000/user';
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(baseURL);
        setUserName(response.username);
        setAddress(response.address);
        setAvatar(response.avatar);
        setGender(response.gender);
        setEmail(response.email);
        setPhone(response.phone);
      } catch (error: any) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  // validate
  const handleSubmitBtn = (event: any) => {
    event.preventDefault();
    if (!phone) {
      setIsValidPhone('Please enter phone number');
      setBorderValidatePhone('border-red');
      return;
    } else if (phone.length < 10) {
      setIsValidPhone(`PhoneNumber Minimum 10 characters`);
      setBorderValidatePhone('border-red');
    } else if (phone.length > 11) {
      setIsValidPhone(`PhoneNumber maximum 11 characters`);
      setBorderValidatePhone('border-red');
      return;
    } else {
      setIsValidPhone('');
      setBorderValidatePhone('');
    }
    // address
    if (!address) {
      setIsValidAddress('Please enter address');
      setBorderValidatePhoneAddress('border-red');
      return;
    } else {
      setIsValidAddress('');
      setBorderValidatePhoneAddress('');
    }
  };
  return (
    <div>
      {loading && (
        <div className="d-flex justify-content-center loading">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
      {!loading && (
        <div className="container">
          <div className="row container-avatar">
            <h1>Update Profile</h1>
            <p>Profile management information for account security</p>
          </div>
          <div className="row container-form">
            {/* profile */}
            <div className="col-md-3 col-xs-12 border-right">
              <div className="d-flex flex-column align-items-center text-center">
                <Avatar value={avatar} onClick={(value: any) => setAvatar(value)} />
                <p className="validate-avatar">
                  Maximum file size 1 MB <br />
                  Format: .JPEG, .PNG
                </p>
              </div>
            </div>
            <div className="col-md-9 col-xs-12">
              <div>
                <form action="" method="" className="form-horizontal" onSubmit={handleSubmitBtn}>
                  <div className="row input-profile-username">
                    <div className="col-md-12 col-xs-12 profile-name">
                      <label className="labels">UserName:</label>
                      <p>{userName}</p>
                    </div>
                  </div>
                  <div className="row input-profile-email">
                    <div className="col-md-6 col-xs-12 profile-email">
                      <label className="labels">Email:</label>
                      <p>{email}</p>
                    </div>
                  </div>
                  <div className="row input-profile-phone">
                    <div className="col-md-12 col-xs-12">
                      <label className="labels">Phone:</label>
                      <input
                        type="text"
                        className={`form-control ${borderValidatePhone}`}
                        placeholder="enter phone number"
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                      />
                      <p className="alert-file-validation">{isValidPhone}</p>
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
                          className={`form-control ${borderValidateAddress}`}
                          name="address"
                          value={address}
                          onChange={(event) => setAddress(event.target.value)}
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
          </div>
        </div>
      )}
    </div>
  );
};

export default FormProfile;
