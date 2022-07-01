import axiosRegisterAPI from './axiosClient';

function profileAPI(phoneNumber: string, address: string, avatar: string, errMsg: string) {
  var errors: string;
  axiosRegisterAPI
    .post('/profile', {
      phoneNumber: phoneNumber,
      address: address,
      avatar: avatar,
    })
    .then(function (response) {
      console.log(response);
    })

    .catch(function (error) {
      console.log(error);
      if ((errors = 'unauthorized')) {
        errMsg = 'Profile False';
      }
    });
}

export default profileAPI;
