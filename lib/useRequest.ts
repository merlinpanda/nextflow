import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

const http = axios.create({
  baseURL: process.env.BASE_API_URL,
  timeout: 1000 * 10,
});

const beforeRequest = (
  config: InternalAxiosRequestConfig,
): InternalAxiosRequestConfig => {
  return config;
};

const requestError = (error: any) => {
  return Promise.reject(error);
};

http.interceptors.request.use(beforeRequest, requestError);

const beforeResponse = (
  res: AxiosResponse,
): Promise<AxiosResponse<any, any>> => {
  return Promise.resolve(res);
};

http.interceptors.response.use(beforeResponse, requestError);
