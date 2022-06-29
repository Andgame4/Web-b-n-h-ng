import axios from 'axios';
import {URL} from '../constants/baseURL'

const axiosClient = axios.create({
  baseURL: URL,
  headers: {
    'content-type': 'application/json',
  },
});

export default axiosClient;
