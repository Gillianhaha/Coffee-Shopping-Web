import { useState } from 'react';

import './Carousel.css';

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="carousel">
      <button aria-label="Click this button can make the carousel to show the last pic."
        onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}
      >
        <i className="gg-chevron-left-o"></i>
      </button>

      <img src={images[currentIndex].url} alt={`Coffee making process${images[currentIndex].id}`} />
      
      <button  aria-label="Click this button can make the carousel to show the next pic."
        onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
      >
        <i className="gg-chevron-right-o"></i>
      </button>
    </div>
  );
}

export default Carousel;
