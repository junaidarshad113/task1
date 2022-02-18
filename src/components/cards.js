import React from "react";
import { Link } from "react-router-dom";
const cards = ({ data }) => {
  return (
    <>
      {data.map((cards, index) => (
        <div key={index}>
          <h1>{cards.title}</h1>
          <p>{cards.description}</p>
          <Link to={`/cards/${cards.title}`} >View more</Link>
        </div>
      ))}
    </>
  );
};

export default cards;
