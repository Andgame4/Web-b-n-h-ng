import axios from 'axios';

function EditUserAPI(
  id: number,
  name: string,
  email: string,
  address: string,
  phoneNumber: string
) {
  const baseURL = 'http://localhost:8000/users/' + id;
  axios
    .put(baseURL, {
      name: name,
      email: email,
      address: address,
      phone: phoneNumber,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export default EditUserAPI;
