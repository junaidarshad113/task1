import "./App.css";
import React from "react";
import Hero from "./components/Hero";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Fullcard from "./components/Fullcard";

function App() {
  const data = [
    {
      title: "Parrot",
      description: "Parrots, also known as psittacines are birds of the roughly 398 species in 92 genera comprising the order Psittaciformes",
    },
    {
      title: "Cat",
      description: "Cats have flexible bodies and teeth adapted for hunting small animals such as mice and rats. ... A group of cats is called a clowder, a male cat is called a tom, a female cat is called a molly or queen while young cats are called kittens",
    },
    {
      title: "Dog",
      description: " dogs are household pets, some dogs perform real jobs to serve our communities. Support projects that help our pals with paws continue to make the world a better place.",
    },
    {
      title: "camel",
      description: "Camels are mammals with long legs, a big-lipped snout and a humped back. There are two types of camels: dromedary camels, which have one hump, and Bactrian camels, which have two humps. ... Humans have used camels as a means of transport for thousands of years. They can carry about 375 to 600 lbs.",
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Hero data={data} />}></Route>
        <Route
          exact
          path="/cards/:title"
          element={<Fullcard data={data} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
