import React from "react";
import "./Card.css";

export const Card = ({
  title,
  price,
  setPrice,
  users,
  gb,
  support,
  button,
  onClick,
}) => {
  return (
    <div className="card-wrapper">
      <div className="card-header">
        <p className="card-header-title">{title}</p>
      </div>
      <div className="card-body">
        <p className="card-body-title">
          ${price}
          <span className="text-muted">/ mo</span>
        </p>
        <ul className="card-body-list">
          <li>{users} users included</li>
          <li>{gb} GB of storage</li>
          <li>{support} support</li>
          <li>Help center access</li>
        </ul>
        <button className="card-body-button" onClick={onClick}>
          {button}
        </button>
      </div>
    </div>
  );
};
export default Card;
