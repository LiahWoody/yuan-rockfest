
import React from "react";
import "./Intro.css";
import introImage from "../images/intro_image.jpeg";

function Intro() {
  return (
    <div className="intro_fullscreen">
      <img
        src={introImage}
        alt="Happy 1st Birthday"
        className="intro_fullscreen_img"
      />
    </div>
  );
}

export default Intro;
