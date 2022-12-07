import { createContext, useState } from "react";
import products from "../data/products";

export const Cart = createContext();

function Context({ children }) {
  const local = localStorage.getItem("cart");
  console.log(local);
  const [cart, setCart] = useState(local !== null ? JSON.parse(local) : []);
  return (
    <Cart.Provider value={{ cart, setCart, products }}>
      {children}
    </Cart.Provider>
  );
}

export default Context;
