
import { useFonts } from "expo-font";
import { Stack, usePathname, useRouter } from "expo-router";
import React from "react";
import { SafeAreaView, StatusBar, View } from "react-native";
import "react-native-reanimated";
import { Provider } from 'react-redux';
import { TabBar, TabKey } from "../components/TabBar";
import { CartProvider } from "../context/CartContext";
import { store } from '../redux/store';

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  const router = useRouter();
  const pathname = usePathname();

  if (!loaded) return null;


  const current: TabKey = (pathname.split("/")[1] || "index") as TabKey;

  return (
    <Provider store={store}>
      <CartProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
          <StatusBar barStyle="dark-content" />


          <View style={{ flex: 1 }}>
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name="index" />
              <Stack.Screen name="cart" />
              <Stack.Screen name="orders" />
              <Stack.Screen name="order" options={{ title: "Your Order" }} />
              <Stack.Screen name="product/[id]" options={{ title: "Product details" }} />
              <Stack.Screen name="profile" options={{ title: "Profile" }} />
              <Stack.Screen name="productsFromRedux" />
            </Stack>
          </View>


          <TabBar
            current={current}
            onNavigate={(k) => {
              router.push(k === "index" ? "/" : `/${k}`);
            }}
          />
        </SafeAreaView>
      </CartProvider>
    </Provider >
  );
}
