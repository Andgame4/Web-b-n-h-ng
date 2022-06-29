/* eslint-disable no-cond-assign */
import axiosRegisterAPI from './axiosClient';

function registerAPI(
  name: any,
  email: any,
  phonenumber: any,
  password: any,
  confirmPassword: any,
  errMsg: any
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
