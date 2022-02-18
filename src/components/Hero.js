import React from "react";
import Cards from "./cards";

const Hero = ({ data }) => {
  return (
    <section>
      <Cards data={data} />
    </section>
  );
};

export default Hero;
