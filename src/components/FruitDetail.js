import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import "./FruitDetail.css";
import FruitsContext from "../context/fruits";
function FruitDetail() {
  const fruits = useContext(FruitsContext);
  const { id } = useParams();
  var item = fruits.find((fruit) => fruit.id.toString() === id);
  console.log(item);
  return (
    <div className="fruits">
      <img src={item.img} alt="home"></img>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <p>{item.price}</p>
    </div>
  );
}

export default FruitDetail;
