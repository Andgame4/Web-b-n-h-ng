import axios from 'axios';

function EditUserAPI(
  id: number,
  name: string,
  email: string,
  address: string,
  phoneNumber: string
) {
  const jwtToken = JSON.parse(localStorage.getItem('accessToken')!);
  const baseURL = 'http://10.22.4.62:8762/user/' + id;
  const config = {
    headers: {
      Authorization: 'Bearer ' + jwtToken,
    },
  };
  axios
    .post(
      baseURL,
      {
        name: name,
        email: email,
        address: address,
        phone: phoneNumber,
      },
      config
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export default EditUserAPI;
