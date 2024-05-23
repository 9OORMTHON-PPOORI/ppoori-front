import axios from "axios";

export const createAxiosInstance = () => {
  const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_KEY,
    timeout: 8000,
  });

  axiosInstance.interceptors.request.use(onRequest, undefined);
  axiosInstance.interceptors.response.use(undefined, onResponseError);

  return axiosInstance;
};

const onRequest = (config: any): any => {
  return config;
};

const onResponseError = (error: any): Promise<any> => {
  return Promise.reject(error);
};
