export function validatePhoneNumber(phonenumber: string) {
  const regexPhone = /^\d{10,11}$/;
  if (!phonenumber) {
    return {
      message: 'Please enter your phone number',
      status: false,
    };
  } else if (regexPhone.test(phonenumber) === false) {
    return {
      message: 'Phone number must have 10 - 11 digits enter',
      status: false,
    };
  }
  return {
    message: '',
    status: true,
  };
}
