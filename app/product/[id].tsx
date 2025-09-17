import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { useProductById } from "../../api/hooks";
import { useCart } from "../../context/CartContext";
import { ProductDetailScreen } from "../../screens/ProductDetailScreen";

export default function ProductDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { qty, setProductQty } = useCart();
  const router = useRouter();

  const { product } = useProductById(Number(id));

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
