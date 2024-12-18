import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GoatCarousel = () => {
  const [showCarousel, setShowCarousel] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCarousel(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const slides = [
    {
      id: 1,
      image:
        "https://cdn.pixabay.com/photo/2024/08/10/04/40/beetle-8958489_640.jpg",
      title: "Fresh Meat Delivered To Your Door",
      description: "Choose from our selection of premium quality meats",
    },
    {
      id: 2,
      image:
        "https://cdn.pixabay.com/photo/2024/08/10/04/40/beetle-8958489_640.jpg",
      title: "Farm Fresh Produce",
      description: "Fresh veggies directly from the farm to your table",
    },
    {
      id: 3,
      image:
        "https://cdn.pixabay.com/photo/2024/08/10/04/40/beetle-8958489_640.jpg",
      title: "Quality Seafood",
      description: "Sustainably caught, delivered fresh",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: handleFocusCleanup, // Run function when slide changes
  };

  // Function to update tabindex for focusable elements
  function handleFocusCleanup(currentSlide) {
    const allSlides = document.querySelectorAll(".slick-slide");

    allSlides.forEach((slide, index) => {
      const focusableElements = slide.querySelectorAll(
        "a, button, input, select, textarea, [tabindex]"
      );
      focusableElements.forEach((element) => {
        if (index === currentSlide) {
          element.setAttribute("tabindex", "0"); // Enable focus for active slide
        } else {
          element.setAttribute("tabindex", "-1"); // Disable focus for hidden slides
        }
      });
    });
  }

  return (
    <div className="w-full">
      {/* <div style={{backgroundImage:"url('https://cdn.pixabay.com/photo/2024/08/10/04/40/beetle-8958489_640.jpg')",height:"100px"}}>

        </div> */}

      {!showCarousel ? (
        <p className="text-center">Loading carousel...</p>
      ) : (
        <Slider {...settings}>
          {slides.map((slide) => (
              <div
              key={slide.id}
                  className="h-[200px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
                style={{
                  backgroundImage:
                    "url('https://cdn.pixabay.com/photo/2024/08/10/04/40/beetle-8958489_640.jpg')",
                  height: "200px",
                }}
              >
                <div className="text-center text-white bg-black bg-opacity-50 p-6 rounded">
                  <h1 className="text-4xl font-bold mb-4">{slide.title}</h1>
                  <p className="text-xl">{slide.description}</p>
                  {/* Example Button */}
                  <button className="mt-4 px-4 py-2 bg-red-500 rounded text-white">
                    Learn More
                  </button>
                </div>
              </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default GoatCarousel;
