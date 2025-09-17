import { useRouter } from "expo-router";
import React from "react";
import { OrderScreen } from "../screens/OrderScreen";

export default function Order() {
  const router = useRouter();

  return (
    <OrderScreen
      onNavigate={(screen) => router.push(`/${screen}`)}
      onBack={() => router.back()}
    />
  );
}
