import React, { useContext } from "react";
import "./HomeRender.css";

import { NavLink } from "react-router-dom";
function HomeRender({ category, i, id }) {
  let path = `/${category}`;
  return (
    <div className="home_item">
      <img src={i} alt="home"></img>
      <NavLink to={path}>
        <h1>{category}</h1>
      </NavLink>
    </div>
  );
}

export default HomeRender;
