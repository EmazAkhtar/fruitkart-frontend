import React, { useContext, useEffect } from "react";
import FruitsContext from "../../context/fruits";
import "./Fruits.css";
import FruitRender from "./fruitRender";
import ThemeContext from "../context/ThemeContext";
const axios = require("axios");

function Fruits() {
  // const fruits = useContext(FruitsContext);
  let fruits = [];
  const loadFruits = async (req, res) => {
    fruits = await axios.get("http://localhost:8082/fruits");
  };
  useEffect(() => {
    loadFruits();
  }, [loadFruits]);
  const themeContext = useContext(ThemeContext);

  return (
    <div className={`fruit ${themeContext}`}>
      <h1>Fruits</h1>

      {fruits.map((fruit) => {
        return <FruitRender {...fruit} />;
      })}
    </div>
  );
}

export default Fruits;
