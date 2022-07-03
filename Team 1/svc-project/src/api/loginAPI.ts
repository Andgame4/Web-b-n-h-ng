/* eslint-disable no-cond-assign */
import axiosLoginAPI from "./axiosClient";
import axios from 'axios'

function loginAPI(email: string, password: string, errMsg: string) {
    var errors: string;
    const body = new FormData();

    body.append('grant_type', 'password')
    body.append('username', email)
    body.append('password', password)

    axiosLoginAPI.post('/token', body)
        .then(function (response) {
            localStorage.setItem('accessToken', JSON.stringify(response.data))
            console.log(response);
        })

        .catch(function (response) {
            // if (errors = 'unauthorized') {
            //     errMsg = 'Sign In Fail'
            // }
        })

    axios.interceptors.response.use(
        (response) => {
            if(response.status = 401){
                console.log('Errors');
            }else if(response.status = 400){
                console.log('Sign In Fail')
            }
            return response;
        },
        (err) => {
            return Promise.reject(err);
        }
    )     
}

export default loginAPI;