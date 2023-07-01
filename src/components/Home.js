import React, { useContext } from "react";
import "./Home.css";
import HomeRender from "./HomeRender";
import HomesContext from "../context/homes";
import ThemeContext from "./context/ThemeContext";
function Home() {
  const homes = useContext(HomesContext);
  const themeContext = useContext(ThemeContext);

  return (
    <div className={`home ${themeContext}`}>
      {homes.map((home) => {
        return <HomeRender {...home}></HomeRender>;
      })}
    </div>
  );
}

export default Home;
