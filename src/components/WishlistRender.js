import React, { useContext } from "react";
import "./WishlistRender.css";
import WishlistDispatchContext from "../context/WishlistDispatch";
import { NavLink } from "react-router-dom";

function WishlistRender({ name, id, price, description, img }) {
  const dispatchWishlist = useContext(WishlistDispatchContext);

  const handleDelete = () => {
    dispatchWishlist({ type: "DELETE", payload: id });
  };
  let path = `/${id}`;
  return (
    <div className="wishlist_item">
      <img src={img} alt="home"></img>
      <NavLink to={path}>
        <h1>{name}</h1>
      </NavLink>

      <p>{description}</p>
      <p>{price}</p>
      <button onClick={handleDelete}>Remove from Wishlist</button>
    </div>
  );
}

export default WishlistRender;
