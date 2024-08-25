
import React from "react";
import "./Card.css"; // We'll create this CSS file next

function Card({ children }) {
  return <div className="card">{children}</div>;
}

export default Card;
