import "./App.css";
import React, { useState } from "react";
import Card from "./Card.jsx";

function App() {
  const [price, setPrice] = useState(0);
  return (
    <div>
      <div className="header">
        <h5 className="title">Company name</h5>
        <nav className="nav">
          <span className="nav-text">Features</span>
          <span className="nav-text">Enterprise</span>
          <span className="nav-text">Support</span>
          <span className="nav-text">Pricing</span>
        </nav>
        <a className="nav-button">Sign up</a>
      </div>
      <div className="main">
        <div className="main-pricing">
          <p className="main-pricing-lg">Pricing</p>
          <p className="main-pricing-sm">
            Quickly build an effective pricing table for your potential
            customers with this Bootstrap example. It's built with default
            Bootstrap components and utilities with little customization.
          </p>
        </div>
        <div className="card-container">
          <Card
            title="Free"
            price={price}
            setPrice={setPrice}
            users={10}
            gb={2}
            support="Email"
            button="Sign up for free"
          />
          <Card
            title="Pro"
            price={15}
            users={20}
            gb={10}
            support="Priority email"
            button="Get started"
          />
          <Card
            title="Enterprise"
            price={29}
            users={30}
            gb={15}
            support="Phone and email"
            button="Contact us"
          />
        </div>
      </div>
      <div className="footer">
        <div className="footer-row">
          <div className="footer-row-box">
            <img
              className="mb-2"
              src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
              width={24}
              height={24}
            />
            <span className="text-muted sm">&copy; 2017-2018</span>
          </div>
          <div className="footer-row-box">
            <p className="list-title">Features</p>
            <ul className="list text-gray">
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
          <div className="footer-row-box">
            <p className="list-title">Resources</p>
            <ul className="list text-gray">
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
          <div className="footer-row-box">
            <p className="list-title">About</p>
            <ul className="list text-gray">
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
}

export default App;
