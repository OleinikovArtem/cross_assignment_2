import { useRouter } from "expo-router";
import React from "react";
import { OrdersScreen } from "../screens/OrdersScreen";

export default function Orders() {
  const router = useRouter();

  return (
    <OrdersScreen
      onNavigate={(screen) => router.push(`/${screen}`)}
      onOpen={() => router.push("/order")}
    />
  );
}
