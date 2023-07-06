import axios from 'axios';

export const http = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_REACT_APP_BASE_URL}/api/v1`,
    withCredentials: true,
});
