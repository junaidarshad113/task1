import React, { useState, useEffect, getdata } from "react";
const Todos = () => {
  const [name, setName] = useState([""]);
  const [description, setdescription] = useState([""]);
  const getdata = (e) => {
    e.preventDefault();
    console.log(name, description);
  };
  const enterinput = (e) => {
    setName(e.target.value);
  };
  const enterdescription = (e) => {
    setdescription(e.target.value);
  };
  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
  }, [name]);

  return (
    <div className="App">
      <h1>Todos Form </h1>
      <form onSubmit={getdata}>
        <input
          type="text"
          placeholder="enter name"
          value={name}
          onChange={enterinput}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="enter description"
          value={description}
          onChange={enterdescription}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Todos;
