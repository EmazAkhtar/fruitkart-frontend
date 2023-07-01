import React, { useContext } from "react";
import "./CartRender.css";
import CartDispatchContext from "../context/CartDispatch";
import { NavLink } from "react-router-dom";
function CartRender({ name, id, description, price, img }) {
  const dispatchCart = useContext(CartDispatchContext);

  const handleDelete = () => {
    dispatchCart({ type: "DELETE", payload: id });
  };
  let path = `/${id}`;
  return (
    <div>
      <div className="cart_item">
        <img src={img} alt="cart"></img>
        <NavLink to={path}>
          <h1>{name}</h1>
        </NavLink>
        <p>{description}</p>
        <p>{price}</p>
        <button onClick={handleDelete}>Remove from Cart</button>
      </div>
    </div>
  );
}

export default CartRender;
