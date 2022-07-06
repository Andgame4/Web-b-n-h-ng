import axios from 'axios';

function profileAPI(
  userName: string,
  gender: string,
  address: string,
  phoneNumber: string,
  avatar: string
) {
  const jwtToken = JSON.parse(localStorage.getItem('accessToken')!);
  const id = Number.parseInt(JSON.parse(localStorage.getItem('id')!));
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
        name: userName,
        gender: gender,
        address: address,
        phone: phoneNumber,
        avatar: avatar,
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

export default profileAPI;
