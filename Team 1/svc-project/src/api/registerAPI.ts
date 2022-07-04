/* eslint-disable no-cond-assign */
import axiosRegisterAPI from './axiosClient';
import axios from 'axios';

function registerAPI(
  name: string,
  email: string,
  phonenumber: string,
  password: string,
  confirmPassword: string,
  errMsg: string
) {
  var errors: string;
  const body = new FormData();

  body.append('grant-type', 'password');
  body.append('name', name);
  body.append('email', email);
  body.append('phonenumber', phonenumber);
  body.append('password', password);
  body.append('confirmPassword', confirmPassword);

  axiosRegisterAPI.post('/register', body).then(function (response) {
    localStorage.setItem('accessToken', JSON.stringify(response.data))
    console.log(response);
  })
  .catch(function (response) {})

  axios.interceptors.response.use(
    (response) =>{
      if(response.status = 401){
        console.log('Error');
      }else if(response.status = 400){
        console.log('Register Fail')
      }
      return response;
    },
    (err) =>{
      return Promise.reject(err);
    }
  )
}

export default registerAPI;
