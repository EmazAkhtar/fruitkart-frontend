import React, { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import VegContext from "../../context/veg";
import "./VegDetail.css";

function VegDetail() {
  const veg = useContext(VegContext);
  const { id } = useParams();

  const item = veg.find((v) => {
    return v.id.toString() === id;
  });
  let path = `/vegetables/${id}`;
  return (
    <div className="veg">
      <img src={item.img} alt="veg"></img>
      <NavLink to={path}>
        <h1>{item.name}</h1>
      </NavLink>
      <p>{item.description}</p>
      <p>{item.price}</p>
    </div>
  );
}

export default VegDetail;
