import React from "react";
import "./VegRender.css";
import { NavLink } from "react-router-dom";
function VegRender({ name, img, price, description, id }) {
  const handleWishlist = () => {};
  const handleCart = () => {};
  let path = `/vegetables/${id}`;
  return (
    <div className="vegItem">
      <img src={img} alt={name}></img>
      <NavLink to={path}>
        <h2>{name}</h2>
      </NavLink>

      <span>{price}</span>
      <p>{description}</p>
      <button onClick={handleWishlist}>Add to Wishlist</button>
      <button onClick={handleCart}>Add to Cart</button>
    </div>
  );
}

export default VegRender;
