import { useRouter } from "expo-router";
import React from "react";
import { useCart } from "../context/CartContext";
import { HomeScreen } from "../screens/HomeScreen";

export default function Home() {
  const { qty, setProductQty } = useCart();
  const router = useRouter();

  return (
    <HomeScreen
      cartQuantities={qty}
      onChangeQty={setProductQty}
      onNavigate={(screen) => router.push(`/${screen}`)}
    />
  );
}
