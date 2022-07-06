export function validateName(name: string) {
  if (!name) {
    return {
      message: 'Please enter your name',
      status: false,
    };
  }
  return {
    message: '',
    status: true,
  };
}

export function validateAddress(address: string) {
  if (!address) {
    return {
      message: 'Please enter your address',
      status: false,
    };
  }
  return {
    message: '',
    status: true,
  };
}

export function validateEmail(email: string) {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email) {
    return {
      message: 'Please enter your email',
      status: false,
    };
  } else if (regex.test(email) === false) {
    return {
      message: 'Your email incorrect',
      status: false,
    };
  }
  return {
    message: '',
    status: true,
  };
}

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

export function validatePassword(password: string) {
  if (!password) {
    return {
      message: 'Please enter your password',
      status: false,
    };
  } else if (password.length < 6) {
    return {
      message: 'Password must at least 6 characters',
      status: false,
    };
  }
  return {
    message: '',
    status: true,
  };
}

export function validateConfirmPassword(confirmPassword: string, password: string) {
  if (!confirmPassword) {
    return {
      message: 'Please enter your confirmPassword',
      status: false,
    };
  } else if (password !== confirmPassword) {
    return {
      message: 'Password and Confirm Password does not match',
      status: false,
    };
  }
  return {
    message: '',
    status: true,
  };
}
