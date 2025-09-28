import { create } from 'zustand';
import { Product } from '../api/types';

interface ProductsState {
  products: Product[];
  setProducts: (products: Product[]) => void;
}

export const useProductsStore = create<ProductsState>((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
}));
