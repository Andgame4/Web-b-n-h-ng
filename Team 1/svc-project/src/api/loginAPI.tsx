/* eslint-disable no-cond-assign */
import axiosLoginAPI from './axiosClient';

function loginAPI(email: any, password: any, errMsg: any) {
  var errors: string;
  axiosLoginAPI
    .post('/login', {
      email: email,
      password: password,
    })
    .then(function (response) {
      console.log(response);
    })

    .catch(function (error) {
      console.log(error);
      if ((errors = 'unauthorized')) {
        errMsg = 'Sign In Fail';
      }
    });
}

export default loginAPI;
