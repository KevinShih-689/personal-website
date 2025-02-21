import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

export const imageInstance: AxiosInstance = axios.create({
  timeout: 30000,
  responseType: 'arraybuffer',
  headers: {
    Accept: 'image/*',
  },
});

imageInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    console.error('Image loading error:', error);
    return Promise.reject(error);
  }
);

export default imageInstance;
