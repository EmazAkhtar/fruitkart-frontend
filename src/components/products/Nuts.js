import React, { useContext } from "react";
import NutsContext from "../../context/nuts";
import NutsRender from "./NutsRender";
import "./Nuts.css";
function Nuts() {
  const nuts = useContext(NutsContext);

  return (
    <div className="nuts">
      <h2>Nuts</h2>
      {nuts.map((nut) => {
        return <NutsRender {...nut} />;
      })}
    </div>
  );
}

export default Nuts;
