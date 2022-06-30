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
