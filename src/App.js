import React, { useReducer, useState } from "react";
import Home from "./components/Home";
import homesDB, { fruitsDB, chocoDB, vegDB, nutsDB } from "./data/data";
import Wishlist from "./components/Wishlist";
import Cart from "./components/Cart";
import "./App.css";
// import "./Layout/RootLayout";
import HomesContext from "./context/homes";
import WishlistContext from "./context/wishlist";
import CartContext from "./context/cart";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import FruitDetail from "./components/FruitDetail";
import AddFruits from "./components/AddFruits";
import WishlistFruitDispatchContext from "./context/WishlistDispatch";
import CartDispatchContext from "./context/CartDispatch";
import HomesDispatchContext from "./context/HomesDispatch";
import Products from "./components/Products";
import FruitsContext from "./context/fruits";
import Fruits from "./components/products/fruits";
import ChocoContext from "./context/choco";
import VegContext from "./context/veg";
import NutsContext from "./context/nuts";
import Nuts from "./components/products/Nuts";
import Veg from "./components/products/Veg";
import Choco from "./components/products/Choco";
import NutsDetail from "./components/products/NutsDetail";
import VegDetail from "./components/products/VegDetail";
import ChocoDetail from "./components/products/ChocoDetail";

import VegWishlistContext from "./context/vegWishlist";
import FruitWishlistDispatchContext from "./context/fruitWishlistDispatch";
import WishlistDispatchContext from "./context/WishlistDispatch";
import ThemeContext from "./components/context/ThemeContext";

function App() {
  const [mode, setMode] = useState("lightmode");
  const handleMode = () => {
    mode === "lightmode" ? setMode("darkmode") : setMode("lightmode");
  };
  const homesReducer = (homes, action) => {
    switch (action.type) {
      case "ADD":
        return [
          ...homes,
          {
            ...action.payload,
            id: homes.length + 1,
          },
        ];
      default:
        return homes;
    }
  };
  const wishlistReducer = (wishlist, action) => {};

  const fruitWishlistReducer = (fruitWishlist, action) => {
    switch (action.type) {
      case "ADD":
        var item = fruits.find((fruit) => fruit.id === action.payload);
        console.log("yahan tak pohoch gye");
        return [...fruitWishlist, { ...item }];

      case "DELETE":
        let newWishlist = fruitWishlist.filter((w) => {
          return w.id !== action.payload;
        });
        return [...newWishlist];
      default:
        return fruitWishlist;
    }
  };
  const vegWishlistReducer = (vegWishlist, action) => {};
  const chocoWishlistReducer = (chocoWishlist, action) => {};
  const nutsWishlistReducer = (nutsWishlist, action) => {};
  const cartReducer = (cart, action) => {
    switch (action.type) {
      case "ADD":
        var item = fruits.find((fruit) => fruit.id === action.payload);
        return [...cart, { ...item }];

      case "DELETE":
        let newCart = cart.filter((c) => {
          return c.id !== action.payload;
        });
        return [...newCart];

      default:
        return cart;
    }
  };
  const nutsReducer = (nuts, action) => {};
  const vegReducer = (veg, action) => {};
  const chocoReducer = (choco, action) => {};
  const fruitsReducer = (fruits, action) => {};

  const [homes, dispatchHomes] = useReducer(homesReducer, homesDB);
  const [fruits, dispatchFruits] = useReducer(fruitsReducer, []);
  const [nuts, dispatchNuts] = useReducer(nutsReducer, nutsDB);
  const [veg, dispatchVeg] = useReducer(vegReducer, vegDB);
  const [choco, dispatchChoco] = useReducer(chocoReducer, chocoDB);

  const [fruitWishlist, dispatchFruitWishlist] = useReducer(
    fruitWishlistReducer,
    []
  );

  const [nutsWishlist, dispatchNutsWishlist] = useReducer(
    nutsWishlistReducer,
    []
  );
  const [vegWishlist, dispatchVegWishlist] = useReducer(vegWishlistReducer, []);

  const [chocoWishlist, dispatchChocoWishlist] = useReducer(
    chocoWishlistReducer,
    []
  );
  // const [wishlist, dispatchWishlist] = useReducer(wishlistReducer, [
  //   ...fruitWishlist,
  //   ...nutsWishlist,
  //   ...vegWishlist,
  //   ...chocoWishlist,
  // ]);
  const [wishlist, setWishlist] = useState([
    ...fruitWishlist,
    ...nutsWishlist,
    ...vegWishlist,
    ...chocoWishlist,
  ]);
  const [cart, dispatchCart] = useReducer(cartReducer, []);

  return (
    <BrowserRouter>
      <header className={mode}>
        <nav>
          <h1>FruitKart</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/wishlist">Wishlist</NavLink>
          <NavLink to="/cart">Cart</NavLink>
          <NavLink to="/add">Add</NavLink>
          <button onClick={handleMode}>Mode</button>
        </nav>
      </header>
      <main>
        <ThemeContext.Provider value={mode}>
          <HomesContext.Provider value={homes}>
            <WishlistContext.Provider value={wishlist}>
              <CartContext.Provider value={cart}>
                <WishlistDispatchContext.Provider value={dispatchFruitWishlist}>
                  <CartDispatchContext.Provider value={dispatchCart}>
                    <HomesDispatchContext.Provider value={dispatchHomes}>
                      <FruitsContext.Provider value={fruits}>
                        <ChocoContext.Provider value={choco}>
                          <VegContext.Provider value={veg}>
                            <NutsContext.Provider value={nuts}>
                              <FruitWishlistDispatchContext.Provider
                                value={dispatchFruitWishlist}
                              >
                                <Routes>
                                  <Route path="/" element={<Home></Home>} />
                                  <Route
                                    path="/fruits/:id"
                                    element={<FruitDetail />}
                                  />
                                  <Route
                                    path="/nuts/:id"
                                    element={<NutsDetail />}
                                  />
                                  <Route
                                    path="/chocolates/:id"
                                    element={<ChocoDetail />}
                                  />
                                  <Route
                                    path="/vegetables/:id"
                                    element={<VegDetail />}
                                  />
                                  <Route
                                    path="/wishlist"
                                    element={<Wishlist></Wishlist>}
                                  />
                                  <Route path="/cart" element={<Cart></Cart>} />
                                  <Route path="/add" element={<AddFruits />} />
                                  <Route path="/fruits" element={<Fruits />} />
                                  <Route path="/nuts" element={<Nuts />} />
                                  <Route path="/vegetables" element={<Veg />} />
                                  <Route
                                    path="/chocolates"
                                    element={<Choco />}
                                  />
                                </Routes>
                              </FruitWishlistDispatchContext.Provider>
                            </NutsContext.Provider>
                          </VegContext.Provider>
                        </ChocoContext.Provider>
                      </FruitsContext.Provider>
                    </HomesDispatchContext.Provider>
                  </CartDispatchContext.Provider>
                </WishlistDispatchContext.Provider>
              </CartContext.Provider>
            </WishlistContext.Provider>
          </HomesContext.Provider>
        </ThemeContext.Provider>
      </main>
    </BrowserRouter>
  );
}

export default App;
