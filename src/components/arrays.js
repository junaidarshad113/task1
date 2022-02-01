import react, { useState } from "react";
const Product=()=>{
  const[product,setproduct]=useState({
    name: "pizza",
    des: "tasty pizza",
    quantity: 5,
    price: 250
  })
  const increment=()=>{
   setproduct({...product, quantity:product.quantity+1});
  }
  return (
    <div>
      <h1>Product name:{product.name}</h1>
      <h1>description:{product.des}</h1>
      <h1>quantity:{product.quantity}</h1>
      <h1>price:{product.price}</h1>
      <button onClick={increment}>+</button>
      <br></br>

    </div>
  );

};
export default Product;
