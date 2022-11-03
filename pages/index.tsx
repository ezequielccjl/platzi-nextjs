import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";

function Home() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    window
      .fetch("/api/avo")
      .then((response) => response.json())
      .then(({ data, length }) => {
        setProductList(data);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Home Page!</h1>

      <h2>Lista de Avocados:</h2>
      {productList.map((product) => (
        <div>{product.name}</div>
      ))}
    </div>
  );
}

export default Home;
