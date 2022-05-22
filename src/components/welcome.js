import React from "react";
import { Cover } from "../components/fpHeroImg"

const Welcome = () => {
  return (
    <div className="welcome-section">
       <Cover />
      <div className="wel-div">
        <h1 className="wel-header">
        WELCOME TO ESTIA STÄD
        </h1>
        <p className="wel-paragraph">
        Always at Your Service
        </p>
        <a className="well-button" href="tel:+0046732570047">
        Get In Touch
        </a>
      </div>
    </div>
  );
};

export default Welcome;
