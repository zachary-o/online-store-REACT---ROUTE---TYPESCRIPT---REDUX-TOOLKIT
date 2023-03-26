import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

const FullPizza = () => {
  const [pizza, setPizza] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const { data } = await axios.get(
          "https://63f3f52dde3a0b242b4b9a2b.mockapi.io/items/" + id
        );
        setPizza(data);
      } catch (error) {
        alert("error");
      }
    };
    fetchPizza();
  }, []);

  if (!pizza) {
    return "Loading...";
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="" />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price} $</h4>
    </div>
  );
};

export default FullPizza;
