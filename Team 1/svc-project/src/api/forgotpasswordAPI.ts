import axiosForgotPasswordAPI from './axiosClient';
import axios from 'axios';

function forgotPasswordAPI(email: string, password: string, confirmPassword: string, errMsg: string) {
  var errors: string;
  const body = new FormData();

  body.append('grant_type', 'password')
  body.append('email', email)
  body.append('password', password)
  body.append('confirm_password', confirmPassword)

  axiosForgotPasswordAPI.post('/forgotpassword', body).then(function (response) {
    localStorage.setItem('accessToken', JSON.stringify(response.data))
    console.log(response);
  })
  .catch(function (response) {

  })

  axios.interceptors.response.use(
    (response) =>{
      if(response.status  = 401){
        console.log('Error');
      }else if (response.status = 400){
        console.log('Change Password Fail');
      }
      return response;
    },
    (err) =>{
      return Promise.reject(err);
    }
  )
}

export default forgotPasswordAPI;
