import axios from 'axios';

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
    console.log('registration = ', payload);

    return instance.post<any>(`registration`, payload);
  },

  login(payload: any) {
    console.log('loginModal = ', payload);

    return instance.post<any>(`login`, payload);
  },

  getProduct(id: number) {
    console.log('productsAPI Id = ', id);

    return instance.get<any>(`products/${id}`);
  },

  createProduct(payload: any) {
    console.log('createProductAPI = ', payload);

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
