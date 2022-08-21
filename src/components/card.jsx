import React from "react";
import star from "../images/star.png";
export default function Card(props) {
  let divText;
  if (props.openSpots === 0) {
    divText = "Sold Out";
  } else if (props.location === "Online") {
    divText = "Online";
  }
  return (
    <div className="card">
      {divText && <div className="special">{divText}</div>}
      <img
        src={require(`../images/${props.coverImg}`)}
        alt=""
        className="thumbnail"
      />
      <div className="stats">
        <img src={star} alt="" className="star" />
        <span className="rating">{props.stats.rating}</span>
        <span className="rated-by gray">({props.stats.reviewCount})</span>
        <span className="location gray">. {props.location}</span>
      </div>
      <h3 className="title">{props.title}</h3>
      <h2 className="price">
        From ${props.price} <span className="pp">/Person</span>
      </h2>
    </div>
  );
}
