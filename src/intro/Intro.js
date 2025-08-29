
import React from "react";
import "./Intro.css";
import introImage from "../images/intro_image.jpeg";

function Intro() {
  return (
    <div className="intro_container">
      <img
        src={introImage}
        alt="Happy 1st Birthday"
        className="intro_image"
      />
    </div>
  );
}

export default Intro;
