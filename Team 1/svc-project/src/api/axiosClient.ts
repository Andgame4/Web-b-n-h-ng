import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://reqres.in/api',
  headers: {
    'content-type': 'application/json',
  },
});

export default axiosClient;
