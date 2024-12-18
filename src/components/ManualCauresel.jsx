import React, { useState, useEffect, useRef } from "react";
import im1 from '../Assets/m1.webp'
import im2 from '../Assets/m2.jpg'
import im3 from '../Assets/m3.jpg'


const ManualCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start at the first cloned slide
  const [isTransitioning, setIsTransitioning] = useState(false);
  const transitionDuration = 700; // Duration in milliseconds
  const slides = [
    {
      id: 1,
      image: im1,
      title: "Fresh Meat Delivered To Your Door",
      description: "Choose from our selection of premium quality meats",
    },
    {
      id: 2,
      image: im3,
      title: "Farm Fresh Produce",
      description: "Fresh veggies directly from the farm to your table",
    },
    {
      id: 3,
      image:im2,
      title: "Quality Seafood",
      description: "Sustainably caught, delivered fresh",
    },
  ];

  // Add cloned slides at the beginning and end
  const extendedSlides = [
    slides[slides.length - 1], // Clone of the last slide
    ...slides,
    slides[0], // Clone of the first slide
  ];

  const slideRef = useRef();

  // Automatically switch slides every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNextSlide();
    }, 3000);

    return () => clearInterval(timer); // Cleanup the timer on unmount
  }, []);

  // Handle Next Slide
  const handleNextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  // Handle Previous Slide
  const handlePrevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  // Handle Transition End for Infinite Loop
  const handleTransitionEnd = () => {
    setIsTransitioning(false);

    // Snap to the real first slide if currently on the clone at the end
    if (currentIndex === extendedSlides.length - 1) {
      setCurrentIndex(1);
      slideRef.current.style.transition = "none"; // Disable transition
      slideRef.current.style.transform = `translateX(-100%)`;
    }

    // Snap to the real last slide if currently on the clone at the beginning
    if (currentIndex === 0) {
      setCurrentIndex(slides.length);
      slideRef.current.style.transition = "none"; // Disable transition
      slideRef.current.style.transform = `translateX(-${slides.length * 100}%)`;
    }
  };

  // Apply Transition Transform
  useEffect(() => {
    if (slideRef.current) {
      const offset = currentIndex * 100;
      slideRef.current.style.transition = isTransitioning ? `transform ${transitionDuration}ms ease-in-out` : "none";
      slideRef.current.style.transform = `translateX(-${offset}%)`;
    }
  }, [currentIndex, isTransitioning]);

  return (
    <div className="relative w-full h-[300px] overflow-hidden">
      {/* Slides Wrapper */}
      <div
        className="flex h-full w-[100%]"
        ref={slideRef}
        onTransitionEnd={handleTransitionEnd}
      >
        {extendedSlides.map((slide, index) => (
          <div
            key={index}
            className="w-full h-[300px] bg-cover bg-center flex-shrink-0"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            <div className="text-center text-white bg-black bg-opacity-50 h-full flex flex-col justify-center items-center">
              <h1 className="text-4xl font-bold mb-4">{slide.title}</h1>
              <p className="text-xl">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2"
        onClick={handlePrevSlide}
      >
        &#8249; {/* Left Arrow */}
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2"
        onClick={handleNextSlide}
      >
        &#8250; {/* Right Arrow */}
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index + 1); // Adjust for the cloned slide
            }}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index + 1 ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ManualCarousel;

