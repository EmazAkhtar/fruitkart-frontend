import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./RootLayout.css";
function RootLayout() {
  return (
    <div className="rootLayout">
      <header className="navItems">
        <h1 className="navItems__logo">FruitKart</h1>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/wishlist">Wishlist</NavLink>
          <NavLink to="/cart">Cart</NavLink>
          <NavLink to="/add">Add</NavLink>
        </nav>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
}

export default RootLayout;
