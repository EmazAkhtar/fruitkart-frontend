import React, { useContext } from "react";
import NutsContext from "../../context/nuts";
import { useParams } from "react-router-dom";
import "./NutsDetail.css";
function NutsDetail() {
  const { id } = useParams();
  const nuts = useContext(NutsContext);
  const item = nuts.find((nut) => {
    return nut.id.toString() === id;
  });

  return (
    <div className="nuts">
      <img src={item.img} alt="nuts"></img>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <p>{item.price}</p>
    </div>
  );
}

export default NutsDetail;
