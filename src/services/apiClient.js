import axios from 'axios';
import apiConfig from '../config/api';

const baseURL = apiConfig?.baseURL || process.env.REACT_APP_API_URL || 'http://localhost:8000/api';
const timeout = apiConfig?.timeout || 10000;

const axiosInstance = axios.create({
  baseURL,
  timeout,
});

export default axiosInstance;
