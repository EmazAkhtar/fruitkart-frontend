import React from "react";
import "./ChocoRender.css";
import { NavLink } from "react-router-dom";
function ChocoRender({ name, price, description, img, id }) {
  const handleWishlist = () => {};
  const handleCart = () => {};
  let path = `/chocolates/${id}`;
  return (
    <div className="chocoItem">
      <img src={img} alt={name}></img>
      <NavLink to={path}>
        <h2>{name}</h2>
      </NavLink>
      <p>{description}</p>
      <span>{price}</span>
      <button onClick={handleWishlist}>Add to Wishlist</button>
      <button onClick={handleCart}>Add to Cart</button>
    </div>
  );
}

export default ChocoRender;
