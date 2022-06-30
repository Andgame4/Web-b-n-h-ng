export function validatePassword(password: string){
    if(!password){
        return{
            message: 'Please enter your password',
            status: false
        }
    }else if(password.length < 6){
        return{
            message: 'Password must at least 6 characters',
            status: false
        }
    }
    return{
        message: '',
        status: true
    }
}