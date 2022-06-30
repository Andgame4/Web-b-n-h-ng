import axios from 'axios';
import {URL} from '../constants/baseURL'

const axiosClient = axios.create({
    
    baseURL: URL,
    auth: {
        username: 'client',
        password: 'client@2022',
    },
    
    headers: {
        'content-type': 'multipart/form-data',
    }
})

export default axiosClient;
