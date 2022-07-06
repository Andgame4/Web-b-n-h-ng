/* eslint-disable no-cond-assign */
import axiosRegisterAPI from '../axiosClient';

function registerAPI(
  name: string,
  email: string,
  phonenumber: string,
  password: string,
  confirmPassword: string,
  setErr: React.Dispatch<React.SetStateAction<string>>
) {
  var errors: string;
  const body = {name: name, username: email,phone:phonenumber ,password: password};

  const result = axiosRegisterAPI.post('/user', body)
    .then(function (response) {
      localStorage.setItem('accessToken', JSON.stringify(response.data))
      localStorage.setItem('id', JSON.stringify(response.data.user_id));
      if(response.status === 200) {
        setErr("");
      }
      return response;
    })
    .catch(function (response) {
      if(response.response.status === 400){
        setErr("Email already exists");
      }
      throw errors;
    })
  return result;
}

export default registerAPI;
