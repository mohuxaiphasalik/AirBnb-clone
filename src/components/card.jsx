import React from "react";
import t1 from "../images/card1.png";
import star from "../images/star.png";
export default function Card() {
  return (
    <div className="card">
      <img src={t1} alt="" className="thumbnail" />
      <div className="stats">
        <img src={star} alt="" className="star" />
        <span className="rating">5</span>
        <span className="rated-by gray">(10)</span>
        <span className="location gray">. USA</span>
      </div>
      <h3 className="title">Life lessons with Katie Zaferes </h3>
      <h2 className="price">
        From $122 <span className="pp">/Person</span>
      </h2>
    </div>
  );
}
