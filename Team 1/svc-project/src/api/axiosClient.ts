import axios from 'axios';
import { Router } from 'react-router-dom';
import { URL } from '../constants/baseURL'

const axiosClient = axios.create({

    baseURL: URL,
    // auth: {
    //     username: 'client',
    //     password: 'client@2022'
    // },
    headers: {
        // 'content-type': 'multipart/form-data',
        'content-type': 'application/json',
    }
})

axios.interceptors.request.use(function(config){
    return config;
}, function(err){
    return Promise.reject(err);
})

axios.interceptors.response.use((response: { status: number; }) => {
    return response;
},
    (err: any) => {
        if (err.response.status === 400) {
            console.log('ERROR: ', err.response.status)
        }
        const errorMessage = err?.response?.data?.message; 
        return Promise.reject(err);
    }
)

export default axiosClient;
