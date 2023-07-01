import React, { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import ChocoRender from "./ChocoRender";
import ChocoContext from "../../context/choco";

function ChocoDetail() {
  const { id } = useParams();
  const choco = useContext(ChocoContext);

  const item = choco.find((c) => {
    return c.id.toString() === id;
  });
  let path = `/chocolates/{id}`;

  return (
    <div className="choco">
      <img src={item.img} alt="choco"></img>
      <NavLink to={path}>
        <h1>{item.name}</h1>
      </NavLink>

      <p>{item.description}</p>
      <p>{item.price}</p>
    </div>
  );
}

export default ChocoDetail;
