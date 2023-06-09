import "./App.css";
import React, { useState } from "react";
import Card from "./Card.jsx";

const App = () => {
  const [price, setPrice] = useState([0, 15, 29]);
  const increasePrice = (index) => {
    const newPrice = [...price];
    newPrice[index] += 1;
    setPrice(newPrice);
  };
  const cardListProps = [
    {
      title: "Free",
      price: price[0],
      users: 10,
      gb: 2,
      support: "Email",
      button: "Sign up for free",
      increasePrice: () => increasePrice(0),
    },
    {
      title: "Pro",
      price: price[1],
      users: 20,
      gb: 10,
      support: "Priority email",
      button: "Get started",
      increasePrice: () => increasePrice(1),
    },
    {
      title: "Enterprise",
      price: price[2],
      users: 30,
      gb: 15,
      support: "Phone and email",
      button: "Contact us",
      increasePrice: () => increasePrice(2),
    },
  ];

  return (
    <div>
      <div className="header">
        <h5 className="title">Company name</h5>
        <nav className="nav">
          <span className="nav_text">Features</span>
          <span className="nav_text">Enterprise</span>
          <span className="nav_text">Support</span>
          <span className="nav_text">Pricing</span>
        </nav>
        <a className="nav_button">Sign up</a>
      </div>
      <div className="main">
        <div className="main_pricing">
          <p className="main_pricing_large">Pricing</p>
          <p className="main_pricing_small">
            Quickly build an effective pricing table for your potential
            customers with this Bootstrap example. It's built with default
            Bootstrap components and utilities with little customization.
          </p>
        </div>
        <div className="card_container">
          {cardListProps.map((cardItemProps, index) => (
            <Card {...cardItemProps} key={`card_item_${index}`} />
          ))}
        </div>
      </div>
      <div className="footer">
        <div className="footer_row">
          <div className="footer_row_box">
            <img
              className="mb_2"
              src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
              width={24}
              height={24}
            />
            <span className="text_muted small">&copy; 2017-2018</span>
          </div>
          <div className="footer_row_box">
            <p className="list_title">Features</p>
            <ul className="list text_gray">
              <li>
                <a>Cool stuff</a>
              </li>
              <li>
                <a>Random feature</a>
              </li>
              <li>
                <a>Team feature</a>
              </li>
              <li>
                <a>Stuff for developers</a>
              </li>
              <li>
                <a>Another one</a>
              </li>
              <li>
                <a>Last time</a>
              </li>
            </ul>
          </div>
          <div className="footer_row_box">
            <p className="list_title">Resources</p>
            <ul className="list text_gray">
              <li>
                <a>Resource</a>
              </li>
              <li>
                <a>Resource name</a>
              </li>
              <li>
                <a>Another resource</a>
              </li>
              <li>
                <a>Final recource</a>
              </li>
            </ul>
          </div>
          <div className="footer_row_box">
            <p className="list_title">About</p>
            <ul className="list text_gray">
              <li>
                <a>Team</a>
              </li>
              <li>
                <a>Locations</a>
              </li>
              <li>
                <a>Privacy</a>
              </li>
              <li>
                <a>Terms</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
