import { createContext, useState } from "react";
import products from "../data/products";

export const Cart = createContext();
function Context({ children }) {
  const local = localStorage.getItem("cart");
  const [cart, setCart] = useState(local !== null ? JSON.parse(local) : []);
  const data = useState(0);
  return (
    <Cart.Provider value={{ cart, setCart, products, data }}>
      {children}
    </Cart.Provider>
  );
}

export default Context;
