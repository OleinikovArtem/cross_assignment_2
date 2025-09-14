import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { useCart } from "../../context/CartContext";
import { products } from "../../data/mock";
import { ProductDetailScreen } from "../../screens/ProductDetailScreen";

export default function ProductDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { qty, setProductQty } = useCart();
  const router = useRouter();

  const product = products.find((p) => p.id === id);    

  if (!product) {
    return null;
  }

  return (
    <ProductDetailScreen
      product={product}
      cartQuantities={qty}
      onChangeQty={setProductQty}
      onNavigate={(screen) => router.push(`/${screen}`)}
      onBack={() => router.back()}
    />
  );
}
