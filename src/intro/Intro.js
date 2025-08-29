
import React from "react";
import "./Intro.css";
import birthdayImage from "./intro_birthday.jpg";

function Intro() {
  return (
    <div className="intro_fullscreen">
      <img
        src={birthdayImage}
        alt="Happy 1st Birthday"
        className="intro_fullscreen_img"
      />
    </div>
  );
}

export default Intro;
