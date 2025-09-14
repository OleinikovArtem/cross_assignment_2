import { useRouter } from "expo-router";
import React from "react";
import { useCart } from "../context/CartContext";
import { CartScreen } from "../screens/CartScreen";

export default function Cart() {
  const { qty, setProductQty } = useCart();
  const router = useRouter();

  return (
    <CartScreen
      cartQuantities={qty}
      onChangeQty={setProductQty}
      onNavigate={(screen) => router.push(`/${screen}`)}
      onBack={() => router.back()}
    />
  );
}
