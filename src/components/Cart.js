import React, { useContext } from "react";
import "./Cart.css";
import CartRender from "./CartRender";
import CartContext from "../context/cart";
function Cart() {
  const cart = useContext(CartContext);
  return (
    <div className="cart">
      {cart.map((c) => {
        return <CartRender {...c}></CartRender>;
      })}
    </div>
  );
}
export default Cart;
