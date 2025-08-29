
import "./Gallery.css";

import introImage from "../images/intro_image.jpeg";

// 예시 이미지 배열 (실제 이미지 경로로 교체 가능)
const images = [
  introImage,
  introImage,
  introImage,
  introImage,
  introImage,
  introImage,
  introImage,
  introImage,
  introImage,
  introImage,
];

import { useState } from "react";

function Gallery() {
  const [selectedIdx, setSelectedIdx] = useState(0);

  return (
    <div className="gallery_container">
      <div className="gallery_main_image_wrapper">
        <img
          src={images[selectedIdx]}
          alt={`gallery-main-${selectedIdx}`}
          className="gallery_main_image"
        />
      </div>
      <div className="gallery_thumbnails">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`gallery-thumb-${idx}`}
            className={`gallery_thumbnail${selectedIdx === idx ? " selected" : ""}`}
            onClick={() => setSelectedIdx(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
