import axios from 'axios';

import { PostAuthRegisterReq } from 'base/types/provider/auth';

const instance = axios.create({
  baseURL: 'http://localhost:4000/api/',
  withCredentials: true,
});

instance.interceptors.request.use((config) => {
  // @ts-ignore
  // eslint-disable-next-line no-param-reassign
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`; // get token from localStorage

  return config;
});

export const productsAPI = {
  registration(payload: any) {
    return instance.post<any>(`auth/registration`, payload);
  },

  login(payload: PostAuthRegisterReq) {
    return instance.post<any>(`auth/login`, payload);
  },

  logout() {
    return instance.post<any>(`auth/logout`);
  },

  checkAuth() {
    console.log('checkAuth api');

    return instance.get<any>(`auth/refresh`);
  },

  getProduct(id: number) {
    return instance.get<any>(`products/${id}`);
  },

  createProduct(payload: any) {
    return instance.post(`products`, payload, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },

  deleteProduct(id: number) {
    return instance.delete<any>(`products/${id}`);
  },

  getProducts() {
    return instance.get<any>('products');
  },
};
