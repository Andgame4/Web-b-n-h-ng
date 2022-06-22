import React from "react";
import { useState, useEffect } from "react";
import "../assets/css/profile.scss";

import Avatar from "./avatar";


const Profile = () => {
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [avatar, setAvatar] = useState<string>(
    "https://static2.yan.vn/YanNews/2167221/202003/dan-mang-du-trend-thiet-ke-avatar-du-kieu-day-mau-sac-tu-anh-mac-dinh-b0de2bad.jpg"
  );
  const [isValid, setIsValid] = useState<string>("");

  useEffect(() => {
    //fixme: call api get user detail 
    let userDetail = {
      name: "Ngoc Trinh",
      email: "ngoctrinh@gmail.com",
      phone: "123456879",
      gender: "male",

      // address: {
      //   id: "",
      //   name: "",
      //   huyen: {
      //     id: "",
      //     name: "",
      //     xa: {
      //       id: "",
      //       name: "",
      //     },
      //   },
      // },
      avatar:
        "https://afamilycdn.com/2019/5/28/6106011515735339061107517025533698355232768n-1559011159003638303070.jpg",
    };
    setUserName(userDetail.name);
    setEmail(userDetail.email);
    setPhone(userDetail.phone);
    setAvatar(userDetail.avatar);
    setGender(userDetail.gender);
  }, []);

  // useEffect(() => {}, [avatar]);

  const handleSubmitBtn = (event: any) => {
    event.preventDefault();

    if (!phone) {
      setIsValid("empty");
      return;
    } else if (phone.length < 10 || phone.length > 11) {
      setIsValid("min length");
      return;
    } else {
      setIsValid("");
    }

    
  };

  
  return (
    <div className="container">
      <div className="row container-avatar">
        <h1>Update Profile</h1>
        <p>Profile management information for account security</p>
        <hr />
      </div>

      <div className="row container-form">
        {/* profile */}
        <div className="col-md-3 col-sm-3 col-xs-12 border-right">
          <div className="d-flex flex-column align-items-center text-center">
            <Avatar value={avatar} onClick={(value: any) => setAvatar(value)} />
            <p className="validate-avatar">
              Maximum file size 1 MB <br />
              Format: .JPEG, .PNG
            </p>
          </div>
        </div>

        <div className="col-md-9 col-sm-9 col-xs-12">
          <div>
            <form
              action=""
              method=""
              className="form-horizontal"
              onSubmit={handleSubmitBtn}
            >
              <div className="row input-profile">
                <div className="col-md-6 col-sm-6 col-xs-12 profile-name">
                  <label className="labels">
                    Name:<span>*</span>
                  </label>
                  <p>{userName}</p>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12 profile-email">
                  <label className="labels">
                    Email:<span>*</span>
                  </label>
                  <p>{email}</p>
                </div>
              </div>

              <div className="row input-profile">
                <div className="col-md-6 col-sm-6 col-xs-12">
                  <label className="labels">
                    Phone:<span>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter phone number"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                  />
                  <p className="alert-file-validation">{isValid}</p>
                </div>

                {/* <div className="col-md-6">
                  <label className="labels">Address:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter address line 1"
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                  />
                  <span className="form-message"></span>
                </div> */}
                <div className="col-md-6 col-sm-6 col-xs-12">
                  <div className="form-group">
                    <label className="labels">
                      Gender:<span>*</span>
                    </label>
                    {/* <select name="customer_sex" className="form-control">
                      <option value="0">{gender}</option>
                      <option value="1"></option>
                    </select> */}
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="male"
                        value="male"
                          onChange={() => setGender('male')}
                        checked={gender==="male"}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineCheckbox1"
                      >
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
                        checked={gender==="female"}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineCheckbox2"
                      >
                        Female
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row input-profile">
                <div className="col-md-6 col-sm-6 col-xs-12">
                  <div className="form-group">
                    <label className="labels">
                      Tỉnh/TP:<span>*</span>
                    </label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      defaultValue={"DEFAULT"}
                    >
                      <option value="DEFAULT" disabled>
                        Chọn Tỉnh/Tp
                      </option>
                      <option value="511">Hà Nội</option>
                      <option value="507">Hồ Chí Minh</option>
                      <option value="512">Hải Phòng</option>
                      <option value="499">Đà Nẵng</option>
                      <option value="485">An Giang</option>
                      <option value="486">Bình Dương</option>
                      <option value="487">Bắc Giang</option>
                      <option value="488">Bình Định</option>
                      <option value="489">Bắc Cạn</option>
                      <option value="490">Bạc Liêu</option>
                      <option value="491">Bắc Ninh</option>
                      <option value="492">Bình Phước</option>
                      <option value="493">Bà Rịa Vũng Tàu</option>
                      <option value="494">Bình Thuận</option>
                      <option value="495">Bến Tre</option>
                      <option value="496">Cao Bằng</option>
                      <option value="497">Cà Mau</option>
                      <option value="498">Cần Thơ</option>
                      <option value="500">Điện Biên</option>
                      <option value="501">Đắc Lắc</option>
                      <option value="502">Đồng Nai</option>
                      <option value="503">Đắc Nông</option>
                      <option value="504">Đồng Tháp</option>
                      <option value="505">Gia Lai</option>
                      <option value="506">Hòa Bình</option>
                      <option value="508">Hải Dương</option>
                      <option value="509">Hà Giang</option>
                      <option value="510">Hà Nam</option>
                      <option value="513">Hà Tĩnh</option>
                      <option value="514">Hậu Giang</option>
                      <option value="515">Hưng Yên</option>
                      <option value="516">Kiên Giang</option>
                      <option value="517">Khánh Hòa</option>
                      <option value="518">Kon Tum</option>
                      <option value="519">Long An</option>
                      <option value="520">Lâm Đồng</option>
                      <option value="521">Lai Châu</option>
                      <option value="522">Lào Cai</option>
                      <option value="523">Lạng Sơn</option>
                      <option value="524">Nghệ An</option>
                      <option value="525">Ninh Bình</option>
                      <option value="526">Nam Định</option>
                      <option value="527">Ninh Thuận</option>
                      <option value="528">Phú Thọ</option>
                      <option value="529">Phú Yên</option>
                      <option value="530">Quảng Bình</option>
                      <option value="531">Quảng Ngãi</option>
                      <option value="532">Quảng Nam</option>
                      <option value="533">Quảng Ninh</option>
                      <option value="534">Quảng Trị</option>
                      <option value="535">Sơn La</option>
                      <option value="536">Sóc Trăng</option>
                      <option value="537">Thái Bình</option>
                      <option value="538">Tiền Giang</option>
                      <option value="539">Thanh Hóa</option>
                      <option value="540">Tây Ninh</option>
                      <option value="541">Tuyên Quang</option>
                      <option value="542">Huế</option>
                      <option value="543">Trà Vinh</option>
                      <option value="544">Thái Nguyên</option>
                      <option value="545">Vĩnh Long</option>
                      <option value="546">Vĩnh Phúc</option>
                      <option value="547">Yên Bái</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-6 col-sm-6 col-xs-12">
                  <div className="form-group">
                    <label className="labels">
                      Quận/Huyện:<span>*</span>
                    </label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option value="-1">Chọn Quận/Huyện</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="row input-profile">
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <div className="form-group">
                    <label className="labels">
                      Phường/Xã:<span>*</span>
                    </label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option value="-1">Chọn Phường/Xã</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="row input-profile">
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <div className="form-group">
                    <label className="labels">
                      Địa chỉ:<span>*</span>
                    </label>
                    <textarea
                      className="form-control"
                      name="address"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="mt-5 text-center">
                <button
                  className="btn btn-primary profile-button"
                  type="submit"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
