import { useEffect, useState } from 'react';
import { useProductsStore } from '../store/productsStore';
import { fetchProductById, fetchProducts } from './api';
import { Product } from './types';

export const useFetch = <T>(fetcher: () => Promise<T>, deps: any[] = []) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    const load = async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await fetcher();
        if (active) setData(result);
      } catch (err) {
        if (active) setError('Failed to fetch data');
      } finally {
        if (active) setLoading(false);
      }
    };

    load();

    return () => {
      active = false;
    };
  }, deps);

  return { data, loading, error };
};


export const useProducts = () => {
  const { products, setProducts } = useProductsStore();
  const { data, loading, error } = useFetch<Product[]>(fetchProducts, []);
  
  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data, setProducts]);
  
  return { products, loading, error };
};

export const useProductById = (id: number) => {
  const { data, loading, error } = useFetch<Product>(() => fetchProductById(id), [id]);
  return { product: data, loading, error };
};