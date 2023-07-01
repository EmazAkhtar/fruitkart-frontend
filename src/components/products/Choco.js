import React, { useContext } from "react";
import ChocoContext from "../../context/choco";
import ChocoRender from "./ChocoRender";
import "./Choco.css";
function Choco() {
  const choco = useContext(ChocoContext);
  return (
    <div className="choco">
      <h2>Chocolates</h2>
      {choco.map((c) => {
        return <ChocoRender {...c}></ChocoRender>;
      })}
    </div>
  );
}

export default Choco;
