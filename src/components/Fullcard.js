import React from "react";
import { useParams } from "react-router-dom";

const Fullcard = ({ data }) => {
  const { title } = useParams();
  return (
    <div>
      {data
        .filter((cards) => cards.title === title)
        .map((cards, index) => (
          <div key={index} className="fullCard">
            <h1>{cards.title}</h1>
            <p>{cards.description}</p>
          </div>
        ))}
    </div>
  );
};

export default Fullcard;
