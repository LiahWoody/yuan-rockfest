
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

import { useState, useRef, useEffect } from "react";

function Gallery() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const thumbnailsRef = useRef(null);

  const handlePrev = () => {
    setSelectedIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setSelectedIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    // 선택된 썸네일이 항상 썸네일 영역 중앙에 오도록 스크롤 조정
    if (thumbnailsRef.current) {
      const thumbnails = thumbnailsRef.current;
      const selectedThumb = thumbnails.children[selectedIdx];
      if (selectedThumb) {
        const parent = thumbnails.parentElement;
        const parentWidth = parent.offsetWidth;
        const thumbLeft = selectedThumb.offsetLeft;
        const thumbWidth = selectedThumb.offsetWidth;
        // 썸네일의 중앙 좌표 계산 (썸네일 영역 기준)
        const thumbCenter = thumbLeft + thumbWidth / 2;
        // 썸네일 영역의 좌측 좌표
        const parentLeft = parent.offsetLeft;
        // 스크롤 위치 계산: 썸네일 중앙 - 썸네일 영역 좌측 - 썸네일 영역의 절반
        const targetScroll = thumbCenter - parentLeft - parentWidth / 2;
        parent.scrollTo({ left: targetScroll, behavior: "smooth" });
      }
    }
  }, [selectedIdx]);

  return (
    <div className="gallery_container">
      <div className="gallery_main_image_wrapper">
        <button className="gallery_handle gallery_handle_left" onClick={handlePrev} aria-label="이전 이미지">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="16,4 8,12 16,20" fill="#888" />
          </svg>
        </button>
        <img
          src={images[selectedIdx]}
          alt={`gallery-main-${selectedIdx}`}
          className="gallery_main_image"
        />
        <button className="gallery_handle gallery_handle_right" onClick={handleNext} aria-label="다음 이미지">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="8,4 16,12 8,20" fill="#888" />
          </svg>
        </button>
      </div>
      <div className="gallery_thumbnails_scroll">
        <div className="gallery_thumbnails" ref={thumbnailsRef}>
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
    </div>
  );
}

export default Gallery;
