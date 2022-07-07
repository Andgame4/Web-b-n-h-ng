import axios from 'axios';

function DeleteUserAPI(id: number) {
  const baseURL = 'http://localhost:8000/users/' + id;
  axios
    .delete(baseURL)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export default DeleteUserAPI;
