import { createContext, useState } from "react";
import products from "../data/products";

export const Cart = createContext();

function Context({ children }) {
  const [cart, setCart] = useState([]);
  return (
    <Cart.Provider value={{ cart, setCart, products }}>
      {children}
    </Cart.Provider>
  );
}

export default Context;
