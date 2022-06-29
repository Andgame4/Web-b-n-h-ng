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
