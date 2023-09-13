// lib/axios.ts
import axios from 'axios';
import { API_URL } from '@constants/api';

const axiosInstance = axios.create({
  baseURL: API_URL,
});

export default axiosInstance;
