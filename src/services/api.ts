import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { NODE_ENV, uri } from '@/constants/environment-variables';

const apiInstance = axios.create({
  baseURL: uri[NODE_ENV],
  withCredentials: true,
});

const api = (axios: AxiosInstance) => {
  return {
    get: function <T>(url: string, config: AxiosRequestConfig = {}) {
      return axios.get<T>(url, { ...config });
    },
    privateget: function <T>(url: string, config: AxiosRequestConfig = {}) {
      return axios.get<T>(url, { ...config, withCredentials: true });
    },
    put: function <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) {
      return axios.put<T>(url, body, { ...config });
    },
    privateput: function <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) {
      return axios.put<T>(url, body, { ...config, withCredentials: true });
    },
    post: function <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) {
      return axios.post<T>(url, body, { ...config });
    },
    privatepost: function <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) {
      return axios.post<T>(url, body, { ...config, withCredentials: true });
    },
    delete: function <T>(url: string, config: AxiosRequestConfig = {}) {
      return axios.delete<T>(url, { ...config, withCredentials: true });
    },
  };
};

export default api(apiInstance);
