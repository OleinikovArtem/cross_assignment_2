import { Product } from './types';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${API_URL}/posts`);
  return response.json();
};

export const fetchProductById = async (id: number): Promise<Product> => {
  const response = await fetch(`${API_URL}/posts/${id}`);
  return response.json();
};