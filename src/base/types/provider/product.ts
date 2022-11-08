export interface Product {
  _id: string;
  image: Array<string>;
  name: string;
  description: string;
  price: number;
  status: string;
  _v: number;
}

export type GetProductResp = {
  data: Product;
};
