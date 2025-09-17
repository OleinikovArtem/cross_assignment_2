import React, { createContext, ReactNode, useContext, useState } from "react";

type CartContextType = {
  qty: Record<string, number>;
  setProductQty: (id: number, n: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [qty, setQty] = useState<Record<string, number>>({});

  const setProductQty = (id: number, n: number) =>
    setQty((s) => ({ ...s, [id]: n }));

  return (
    <CartContext.Provider value={{ qty, setProductQty }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used inside <CartProvider>");
  }
  return ctx;
}
