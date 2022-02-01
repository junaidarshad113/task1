import react, { useState } from "react";
const SpreadOperator = () => {
  const name = {
    firstName: "Junaid",
    lastname: "Arshad",
    Age: 24,
  };
  const data = {
    id: 3,
    ...name,
  }; 
  const array1 = ["call of duty", "pubg", "tekken3"];
  const array2 = ["moveies", "songs", "music"];
  const mainarray = [...array1, ...array2];
  console.log(mainarray);
  console.log(data);

  return <></>;
};
export default SpreadOperator;
