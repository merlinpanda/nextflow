import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { notifications } from "@mantine/notifications";

const http = axios.create({
  baseURL: process.env.BASE_API_URL,
  timeout: 1000 * 10,
});

/**
 * 请求拦截
 *
 * @param config
 * @returns
 */
const beforeRequest = (
  config: InternalAxiosRequestConfig,
): InternalAxiosRequestConfig => {
  return config;
};

const hasError = (error: any) => {
  notifications.show({
    title: "加载失败",
    message: "服务器异常",
    autoClose: 5000,
    color: "red",
  });
  return Promise.reject(error);
};

http.interceptors.request.use(beforeRequest, hasError);

/**
 * 响应拦截
 * @param res AxiosResponse
 * @returns Promise<AxiosResponse<any, any>>
 */
const beforeResponse = (
  res: AxiosResponse,
): Promise<AxiosResponse<any, any>> => {
  if (res.status >= 200 && res.status < 300) {
    const resp = res.data;

    if (resp.code === 0) {
      return Promise.resolve(resp);
    } else {
      notifications.show({
        title: "加载失败",
        message: resp.message,
        autoClose: 5000,
        color: "red",
      });
      return Promise.reject(resp);
    }
  } else {
    notifications.show({
      title: "加载失败",
      message: "服务器异常",
      autoClose: 5000,
      color: "red",
    });
    return Promise.reject(res);
  }
};

http.interceptors.response.use(beforeResponse, hasError);

export const fetcher = (url: string) => http.get(url).then((res) => res);

export default http;
