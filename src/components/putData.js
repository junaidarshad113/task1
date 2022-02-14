import React, { useState } from "react";

const PutData = () => {
  const data = useState({
      id:'123',
    name: "junaid",
    email: "junaidarshad@gmail.com",
    designation: "Developer",
    pin: "456789",
  });
  fetch("https://jsonplaceholder.typicode.com/users"+data.id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": " *",
    },
    body: JSON.stringify(data),
  }).then((response) => {
    console.log("response", response);
  });
  return <div>putData</div>;
};
export default PutData;
