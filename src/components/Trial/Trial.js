import React from "react";
import "./Trial.css";

const Trial = () => {
  return (
    <div className="Trial">
      <div className="main-Trial">
        <div className="Trial-word">
          <h1>TRIAL START FIRST 30 DAYS.</h1>
          <span>Enter your email to create or restart your membership.</span>
        </div>
        <div className="Trial-subscribe">
          <input type="text" placeholder="Enter your email" />
          <button>GET STARTED</button>
        </div>
      </div>
    </div>
  );
};

export default Trial;
