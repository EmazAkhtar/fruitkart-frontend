import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import CartDispatchContext from "../../context/CartDispatch";
import FruitWishlistDispatchContext from "../../context/fruitWishlistDispatch";

function FruitRender({ name, img, price, description, id }) {
  const dispatchFruitWishlist = useContext(FruitWishlistDispatchContext);
  const dispatchCart = useContext(CartDispatchContext);

  const handleWishlist = () => {
    dispatchFruitWishlist({ type: "ADD", payload: id });
  };
  const handleCart = () => {
    dispatchCart({ type: "ADD", payload: id });
  };

  let path = `/fruits/${id}`;
  return (
    <div>
      <div className="fruitItems">
        <img src={img} alt={name}></img>
        <NavLink to={path}>
          <h2>{name}</h2>
        </NavLink>
        <span>{price}</span>
        <p>{description}</p>
        <button onClick={handleWishlist}>Add to Wishlist</button>
        <button onClick={handleCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default FruitRender;
