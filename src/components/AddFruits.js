import React, { useContext, useState } from "react";
import HomeDispatchContext from "../context/HomesDispatch";

function AddFruits() {
  const dispatchHomes = useContext(HomeDispatchContext);

  const [fruit, setFruit] = useState({
    name: "",
    description: "",
    img: "",
    price: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFruit((fruit) => {
      return {
        ...fruit,
        [name]: value,
      };
    });
  };

  const handleClick = (e) => {
    dispatchHomes({ type: "ADD", payload: fruit });
    setFruit({
      name: "",
      description: "",
      img: "",
      price: "",
    });
    e.preventDefault();
  };
  return (
    <div>
      <form>
        <h1>AddFruits</h1>
        <label>Name</label>
        <input value={fruit.name} onChange={handleChange} name="name"></input>
        <label>Description</label>
        <input
          value={fruit.description}
          onChange={handleChange}
          name="description"
        ></input>
        <label>Price</label>
        <input value={fruit.price} onChange={handleChange} name="price"></input>
        <label>Image Url</label>
        <input value={fruit.img} onChange={handleChange} name="img"></input>
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default AddFruits;
