import axiosForgotPasswordAPI from './axiosClient';

function forgotPasswordAPI(email: string, password: string, confirmPassword: string, errMsg: string) {
  var errors: string;
  axiosForgotPasswordAPI
    .post('/forgotpassword', {
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    })
    .then(function (response) {
      console.log(response);
    })

    .catch(function (error) {
      console.log(error);
      if ((errors = 'unauthorized')) {
        errMsg = 'Change password failed';
      }
    });
}

export default forgotPasswordAPI;
