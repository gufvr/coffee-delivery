import { useContext } from "react";
import { CartContext } from './../contexts/CartContext';

export function UseCart() {
  const context = useContext(CartContext)
  return context;
}