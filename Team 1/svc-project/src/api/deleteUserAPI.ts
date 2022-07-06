import axiosDeleteUserAPI from './axiosClient';

function DeleteUserAPI(id: number) {
  var errors: string;
  axiosDeleteUserAPI
    .delete('http://localhost:8000/user/' + id)
    .then(function (response) {
      console.log(response);
    })

    .catch(function (error) {
      console.log(error);
    });
}

export default DeleteUserAPI;
