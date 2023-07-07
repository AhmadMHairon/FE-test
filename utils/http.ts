import axios from 'axios';

export const http = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_REACT_APP_BASE_URL}/api/v1`,
    withCredentials: false,
});

axios.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
});
