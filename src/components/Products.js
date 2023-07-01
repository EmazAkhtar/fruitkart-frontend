import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import FruitsContext from "../context/fruits";

function Products() {
  const { id } = useParams();
  if (id === "fruits") {
  }
  return <div>Products</div>;
}

export default Products;
