import React, { useContext } from "react";
import VegContext from "../../context/veg";
import VegRender from "./VegRender";
import "./Veg.css";
function Veg() {
  const veg = useContext(VegContext);

  return (
    <div className="veg">
      <h2>Vegetables</h2>
      {veg.map((v) => {
        return <VegRender {...v} />;
      })}
    </div>
  );
}

export default Veg;
