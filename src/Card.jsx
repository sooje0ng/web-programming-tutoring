import React from "react";
import "./Card.css";

export const Card = ({ title, price, users, gb, support, button, onClick }) => {
  const dataList = [
    `${users} users included`,
    `${gb} GB of storage`,
    `${support} support`,
    `Help center access`,
  ];
  return (
    <div className="card_wrapper">
      <div className="card_header">
        <p className="card_header_title">{title}</p>
      </div>
      <div className="card_body">
        <p className="card_body_title">
          ${price}
          <span className="text_muted">/ mo</span>
        </p>
        <ul className="card_body_list">
          {dataList.map((e, index) => (
            <li key={`data_list_${index}`}>{e}</li>
          ))}
        </ul>
        <button className="card_body_button" onClick={onClick}>
          {button}
        </button>
      </div>
    </div>
  );
};
export default Card;
