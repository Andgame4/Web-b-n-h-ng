/* eslint-disable no-cond-assign */
import axiosLoginAPI from './axiosClient';

function loginAPI(
  email: string,
  password: string,
  setErr: React.Dispatch<React.SetStateAction<string>>
) {
  var errors: string;
  const body = new FormData();

  body.append('grant_type', 'password');
  body.append('username', email);
  body.append('password', password);

    const results = axiosLoginAPI.post('/token', body)
        .then(function (response) {
            localStorage.setItem('accessToken', JSON.stringify(response.data))
            localStorage.setItem('id', JSON.stringify(response.data.user_id));
            if (response.status === 200) {
                setErr("");
            }
            return response;
        })
        .catch(function (response) {
            if (response.response.status === 400) {
                setErr("Email or password incorrect");
            }
            throw errors;
        })
    return results;
}

export default loginAPI;
