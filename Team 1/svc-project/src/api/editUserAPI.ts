import axiosEditUserAPI from './axiosClient';

function EditUserAPI(
  id: number,
  name: string,
  email: string,
  phoneNumber: string,
  address: string,
  errMsg?: string
) {
  var errors: string;
  axiosEditUserAPI
    .put('http://localhost:8000/user/' + id, {
      username: name,
      email: email,
      phone: phoneNumber,
      address: address,
    })
    .then(function (response) {
      console.log(response);
    })

    .catch(function (error) {
      console.log(error);
      if ((errors = 'unauthorized')) {
        errMsg = 'Edit False';
      }
    });
}

export default EditUserAPI;
