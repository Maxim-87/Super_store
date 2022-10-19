import axios, { AxiosResponse } from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:4000/api/',
    withCredentials: true,
    // headers: {
    //     'API-KEY': '8f2534e2-22a4-4052-894e-a66c04807482'
    // }
})

export const productsAPI = {

    getProduct(id: number) {
        console.log('productsAPI Id = ', id)
        return instance.get<any>(`products/${id}`);
    },
    createProduct(payload: any) {
        return instance.post(`products`, {name: payload.name,
            description: payload.description, price: payload.price,
              status: payload.status},
          {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    },
    deleteProduct(id: number) {
        return instance.delete<any>(`products/${id}`);
    },
    getProducts() {
        return instance.get<any>('products');
    },

}

