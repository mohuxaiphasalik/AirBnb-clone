import React from "react";
import "../styles/style.css";
import gridImg from "../images/grid.png";
export default function Hero() {
  return (
    <section className="hero">
      <img src={gridImg} alt="Not Found" className="grid" />
      <h1 className="hero-heading">Online Experience</h1>
      <p className="hero-desc">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
