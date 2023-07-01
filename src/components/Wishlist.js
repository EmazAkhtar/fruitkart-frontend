import React, { useContext } from "react";
import "./Wishlist.css";
import WishlistRender from "./WishlistRender";
import WishlistContext from "../context/wishlist";

function Wishlist() {
  const wishlist = useContext(WishlistContext);
  return (
    <div className="wishlist">
      {wishlist.map((w) => {
        return <WishlistRender {...w}></WishlistRender>;
      })}
    </div>
  );
}

export default Wishlist;

// id={w.id}
//             name={w.name}
//             price={w.price}
//             img={w.img}
//             description={w.description}
