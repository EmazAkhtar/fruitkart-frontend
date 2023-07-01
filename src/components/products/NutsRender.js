import React, { useContext } from "react";
import "./NutsRender.css";
import WishlistDispatchContext from "../../context/WishlistDispatch";
import CartDispatchContext from "../../context/CartDispatch";
import { NavLink } from "react-router-dom";
function NutsRender({ id, name, img, description, price }) {
  const dispatchWishlist = useContext(WishlistDispatchContext);
  const dispatchCart = useContext(CartDispatchContext);

  const handleWishlist = () => {
    dispatchWishlist({ type: "ADD", payload: { category: "nuts", id: id } });
  };
  const handleCart = () => {
    dispatchCart({ type: "ADD", payload: id });
  };
  let path = `/nuts/${id}`;
  return (
    <div className="nutItem">
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

export default NutsRender;
