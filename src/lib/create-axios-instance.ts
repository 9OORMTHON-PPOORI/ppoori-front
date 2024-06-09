import axios, { AxiosError, AxiosRequestConfig } from "axios";

export const createAxiosInstance = () => {
  const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_KEY,
    timeout: 8000,
  });

  axiosInstance.interceptors.request.use(onRequest, undefined);
  axiosInstance.interceptors.response.use(undefined, onResponseError);

  return axiosInstance;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const onRequest = (config: AxiosRequestConfig): any => {
  return config;
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};
