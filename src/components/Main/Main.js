import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <div className="Main">
      <img
        src="https://codewithsadee.github.io/filmlane/assets/images/hero-bg.jpg"
        alt="main"
      />
      <div className="main-word">
        <div className="main-container">
          <span className="main-title">Movie</span>
          <h1>
            Unlimited <span>Movie</span>, TVs Shows, & More.
          </h1>
          <div className="main-detalis">
            <h6>PG18</h6>
            <h6>HD</h6>
            <h6>Romance, Drama</h6>
            <h6>2022</h6>
            <h6>180 min</h6>
          </div>
          <button className="btn">WATCH NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
