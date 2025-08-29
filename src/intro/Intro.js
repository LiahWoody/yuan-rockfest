import "./Intro.css";
import introImage from "../images/intro_image.jpeg";

function Intro() {
  return (
    <div className="intro_container">
      <img className="intro_image" src={introImage} alt="Happy 1st Birthday" />
      <div className="image_left">
        <p>Lee Yuan</p>
      </div>
    </div>
  );
}

export default Intro;
