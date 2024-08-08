//import axios from 'axios';
import { NODE_ENV, uri } from '@/constants/environment-variables';
import { AddProduct } from '@/hooks/products/useAddProduct';
import api from './api';

const baseURL = uri[NODE_ENV];
const apiURL = `${baseURL}/products`;
export async function getProducts(): Promise<AddProduct[]> {
  try {
    const response = await api.get<AddProduct[]>(apiURL);
    // const transformedProducts = response.data.map((product: AddProduct) => ({
    //   ...product,
    //   price: String(product.price),
    //   stock: String(product.stock),
    // }));
    return response.data;
  } catch (error) {
    throw new Error(`Error ao buscar produtos: ${error}`);
  }
}

export async function getProductById(id: number): Promise<AddProduct | undefined> {
  try {
    const res = await api.get<AddProduct>(`${apiURL}/${id}`);
    return res.data;
  } catch (error) {
    throw new Error(`Erro ao buscar o digimon ${id}: ${error}`);
  }
}
