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

// TODO: Use this function to get the image from the db and return it as a image, test it
function base64ToFile(base64String: string, fileName: string): File {
  const byteString = atob(base64String.split(',')[1]);
  const arrayBuffer = new ArrayBuffer(byteString.length);
  const uint8Array = new Uint8Array(arrayBuffer);

  for (let i = 0; i < byteString.length; i++) {
    uint8Array[i] = byteString.charCodeAt(i);
  }

  const blob = new Blob([arrayBuffer], { type: 'image/png' });
  return new File([blob], fileName, { type: 'image/png' });
}
