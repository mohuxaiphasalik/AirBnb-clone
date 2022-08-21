import React from "react";
import NavBar from "./components/navbar";
import Hero from "./components/hero";
import Card from "./components/card";
import data from "./data";
export default function App() {
  const cards = data.map((item) => {
    return <Card {...item} />;
  });
  return (
    <>
      <NavBar />
      <Hero />
      <div className="cards-container">{cards}</div>
    </>
  );
}
