import axios from 'axios';

function DeleteUserAPI(id: number) {
  const jwtToken = JSON.parse(localStorage.getItem('accessToken')!);
  const baseURL = 'http://10.22.4.62:8762/user/' + id;
  const config = {
    headers: {
      Authorization: 'Bearer ' + jwtToken,
    },
  };
  axios
    .delete(baseURL, config)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export default DeleteUserAPI;
