import React, { useState } from 'react'
const Delete = () => {
    const data = useState({
        id:'123',
      name: "junaid",
      email: "junaidarshad@gmail.com",
      designation: "Developer",
      pin: "456789",
    });
    fetch("https://jsonplaceholder.typicode.com/users"+data.id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": " *",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      console.log("response", response);
    });
   
  return (
    <div>delete</div>
  )
}

export default Delete