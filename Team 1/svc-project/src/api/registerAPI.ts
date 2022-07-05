/* eslint-disable no-cond-assign */
import axiosRegisterAPI from './axiosClient';

function registerAPI(
  name: string,
  email: string,
  phonenumber: string,
  password: string,
  confirmPassword: string,
  errMsg: string
) {
  var errors: string;
  axiosRegisterAPI
    .post('/register', {
      name: name,
      email: email,
      phonenumber: phonenumber,
      password: password,
      confirmPassword: confirmPassword,
    })
    .then(function (response) {
      console.log(response);
    })

    .catch(function (error) {
      console.log(error);
      if ((errors = 'unauthorized')) {
        errMsg = 'Register False';
      }
    });
}

export default registerAPI;
