
export function validateEmail(email: string) {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email) {
        return {
            message: 'Please enter your email',
            status: false
        }
    } else if (regex.test(email) === false) {
        return {
            message: 'Your email incorrect',
            status: false
        }
    }
    return {
        message: '',
        status: true
    }
}
