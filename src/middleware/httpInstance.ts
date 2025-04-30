import axios, { AxiosInstance, AxiosResponse, AxiosError, InternalAxiosRequestConfig } from 'axios';

const httpInstance: AxiosInstance = axios.create({
  withCredentials: true,
  headers: {
    // "Content-Type": "application/json",
  },
});

httpInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const requestConfig = { ...config, url: `/api${config.url}` };

    return requestConfig;
  },
  (error: AxiosError) => {
    console.error('HTTP request error:', error);
    return Promise.reject(error);
  }
);

httpInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    console.error('HTTP response error:', error);
    return Promise.reject(error);
  }
);

export default httpInstance;
