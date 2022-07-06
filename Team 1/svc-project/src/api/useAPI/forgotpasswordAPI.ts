import axiosForgotPasswordAPI from '../axiosClient';

function forgotPasswordAPI(email: string, password: string, confirmPassword: string, setErr: React.Dispatch<React.SetStateAction<string>>) {
  var errors: string;
  const body = {username: email, newPassword: password};

  const result = axiosForgotPasswordAPI.post('/user/setPassword', body)
        .then(function (response) {
          localStorage.setItem('accessToken', JSON.stringify(response.data))
          localStorage.setItem('id', JSON.stringify(response.data.user_id));
          if(response.status === 200){
            setErr("");
          }
          return response;
        })
        .catch(function (response) {
          if(response.response.status === 400){
            setErr("Change password failed");
          }
          throw errors;
        })
      return result;
}

export default forgotPasswordAPI;
