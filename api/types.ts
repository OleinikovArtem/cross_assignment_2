export interface Product {
  userId: number;
  id: number;
  title: string;
  body: string;
  rating?: number;
  category?: string;
  price?: number;
}