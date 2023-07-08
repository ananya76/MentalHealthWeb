import React, { useState } from 'react';
import doc1 from "../assets/images/doctor-img01.png"
import doc2 from "../assets/images/doctor-img02.png"
import doc3 from "../assets/images/doctor-img03.png"

const DotImageScroller = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="dot-image-scroller">
      <div className="image-container">
        <img src={doc1} alt="Image 1" className={activeIndex === 0 ? 'active' : ''} />
        <img src={doc2} alt="Image 2" className={activeIndex === 1 ? 'active' : ''} />
        <img src={doc3} alt="Image 3" className={activeIndex === 2 ? 'active' : ''} />
        {/* Add more images here */}
      </div>
      <div className="dot-container">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className={`dot ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default DotImageScroller;
