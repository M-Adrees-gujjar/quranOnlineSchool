import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesLeft,faAnglesRight} from '@fortawesome/free-solid-svg-icons'

const images = [
    '/src/assets/images/BannerNo2.jpg',
    '/src/assets/images/BannerNo3.jpg'
]

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-md pt-20">
      <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div className="w-full flex-shrink-0" key={index}>
            <img src={image} alt={`Slide ${index}`} className="w-full h-auto" />
          </div>
        ))}
      </div>

      <button onClick={prevSlide} className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white px-3 py-2 rounded-fulltransition">
        <span>
        <FontAwesomeIcon icon={faAnglesLeft} />
        </span>
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white px-3 py-2 rounded-full transition">
        <span>
        <FontAwesomeIcon icon={faAnglesRight} />
        </span>
      </button>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 p-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Header;
