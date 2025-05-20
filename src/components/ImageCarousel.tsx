import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageCarouselProps {
  images: Array<{
    url: string;
    alt: string;
    caption: string;
  }>;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setActiveIndex((current) => (current === 0 ? images.length - 1 : current - 1));
  };

  const handleNext = () => {
    setActiveIndex((current) => (current === images.length - 1 ? 0 : current + 1));
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative h-[40vh] w-full overflow-hidden bg-black">
      <div 
        className="h-full w-full flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        ref={carouselRef}
      >
        {images.map((image, index) => (
          <div key={index} className="h-full min-w-full relative">
            <img 
              src={image.url} 
              alt={image.alt}
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-green-400 font-mono text-lg md:text-xl">
                {image.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      <button 
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-green-400 p-2 rounded-full hover:bg-black/70 hover:text-green-300 transition-all"
        aria-label="Previous image"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button 
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-green-400 p-2 rounded-full hover:bg-black/70 hover:text-green-300 transition-all"
        aria-label="Next image"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              activeIndex === index 
                ? 'bg-green-400 w-6' 
                : 'bg-green-400/30 hover:bg-green-400/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;