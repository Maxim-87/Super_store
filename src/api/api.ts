import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4000/api/',
  withCredentials: true,
});

export const productsAPI = {
  getProduct(id: number) {
    console.log('productsAPI Id = ', id);

    return instance.get<any>(`products/${id}`);
  },

  createProduct(payload: any) {
    console.log('createProductAPI = ', payload);

    return instance.post(
      `products`,

      // name: payload.name,
      // description: payload.description,
      // price: payload.price,
      // status: payload.status,
      // image: payload.image,
      payload,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
  },

  deleteProduct(id: number) {
    return instance.delete<any>(`products/${id}`);
  },

  getProducts() {
    return instance.get<any>('products');
  },
};
