import React from "react";
import { useState, useEffect } from "react";

const ObjectState = () => {
  const [username, setUsername] = useState({
    fullname: "junaid",
    lastname: "Arshad",
    age: 25,
  });
  const [adminname, setpersonname] = useState({
    fullname: "ali khan",
    lastname: "khan",
    age: 29,
  });
  const [updatename, setupdatename] = useState({});
  return (
    <React.Fragment>
      <button>Store Object</button>
      <br></br>
      {username.fullname}
      <br></br>
      {username.lastname}
      <br></br>
      {username.age}
      <br></br>
      {adminname.fullname}
      <br></br>
      {adminname.lastname}
      <br></br>
      {adminname.age}
    </React.Fragment>
  );
};

export default ObjectState;
