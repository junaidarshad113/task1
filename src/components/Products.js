import React from "react";
import { useState } from "react/cjs/react.development";
const Products = () => {
  const [product, setproduct] = useState({
    name: "Junaid",
    title: "Hello Junaid",
    description: "great",
    quantity: 0,
    price: 250,
  });
  const increment = () => {
    setproduct({ ...product, quantity: product.quantity + 1 });
  };
  const decrement = () => {
    product.quantity === 0
      ? setproduct({...product,quantity: (product.quantity = 0) })
      : setproduct({ ...product, quantity: product.quantity - 1 });
  };
  return (
    <div>
      <p>title name:{product.title}</p>
      <p>description name:{product.description}</p>
      <p>quantity:{product.quantity}</p>
      <p>price:{product.price}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Products;
