/* eslint-disable no-cond-assign */
import axiosLoginAPI from "./axiosClient";

function loginAPI(email: string, password: string, errMsg: string) {
    var errors: string;
    const body = new FormData();

    body.append('grant_type', 'password')
    body.append('username', email)
    body.append('password', password)

    axiosLoginAPI.post('/token', body)
        .then(function (response) {
            console.log(response);
        })
        
        .catch(function (error) {
            console.log(error)
            if(errors = 'unauthorized'){
                errMsg = 'Sign In Fail'
            }
        })
}

export default loginAPI;