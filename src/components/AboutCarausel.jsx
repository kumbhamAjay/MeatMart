// import React from "react";
// import Slider from "react-slick"; // Importing react-slick
// import "slick-carousel/slick/slick.css"; // Slick carousel styles
// import "slick-carousel/slick/slick-theme.css";

// const AboutCarausel = () => {
//   // Carousel settings
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: false,
//   };

//   const missionPointsWithImages = [
//     {
//       text: "Become the most trusted online destination for meat products.",
//       image: "https://tse3.mm.bing.net/th?id=OIP.x3UG81b-PsF1PMotIPN3sQHaEK&pid=Api&P=0&h=180",
//     },
//     {
//       text: "Promote healthier lifestyles with high-quality, responsibly sourced meats.",
//       image: "https://tse3.mm.bing.net/th?id=OIP.vqtRrvxONnx6l0XWaQo_hQHaHa&pid=Api&P=0&h=180",
//     },
//     {
//       text: "Lead the industry in supporting sustainable and ethical farming practices.",
//       image: "https://tse4.mm.bing.net/th?id=OIP.TlQC_d53prNCq4iEhEY8MgHaE8&pid=Api&P=0&h=180",
//     },
//     {
//       text: "Foster global trust and preference for our brand.",
//       image: "https://www.thegoatspot.net/attachments/2750b063-3942-424a-9dc9-f48e6857ae9a-jpeg.169533/",
//       imageStyle: { objectFit: "contain", height: "160px" }, // Adjust size for better fit
//     },
//   ];

//   const visionPointsWithImages = [
//     {
//       text: "Provide fresh, premium-quality meat products.",
//       image: "https://tse4.mm.bing.net/th?id=OIP.mM2DEBvID0STGJsKAPNN3QHaEt&pid=Api&P=0&h=180",
//     },
//     {
//       text: "Deliver directly to customers' doors for maximum convenience.",
//       image: "https://img.freepik.com/premium-vector/delivery-service-illustration_132971-383.jpg?semt=ais_hybrid",
//     },
//     {
//       text: "Commit to ethical sourcing and sustainable practices.",
//       image: "https://croesoffice.org/wp-content/uploads/2024/10/Sustainable-Meat.jpg",
//     },
//     {
//       text: "Ensure customer satisfaction through exceptional service.",
//       image: "https://tse3.mm.bing.net/th?id=OIP.BZrr1aUFrb_iQL7spqrgIgAAAA&pid=Api&P=0&h=180",
//     },
//   ];

//   return (
//     <div className="flex flex-wrap items-center bg-lime-700 text-white rounded-lg mx-20 px-4 py-8 lg:px-20 lg:py-12">
//       {/* Mission Carousel */}
//       <div className="w-full lg:w-1/3 px-4 mb-6 lg:mb-0">
//         <h2 className="text-lg font-bold mb-4 text-center">Our Vision</h2>
//         <Slider {...settings}>
//           {missionPointsWithImages.map((item, index) => (
//             <div key={index} className="flex flex-col items-center p-4 text-sm md:text-base">
//               <img
//                 src={item.image}
//                 alt={`Mission Point ${index + 1}`}
//                 className="w-full h-40 object-cover rounded-lg mb-4"
//                 style={item.imageStyle || {}} // Apply specific styles if provided
//               />
//               <p className="text-center">{item.text}</p>
//             </div>
//           ))}
//         </Slider>
//       </div>

//       {/* Circle Section */}
//       <div className="w-full lg:w-1/3 flex justify-center items-center mb-6 lg:mb-0">
//   <div className="relative w-40 h-40 sm:w-56 sm:h-56 flex items-center justify-center bg-blue border-4 border-white rounded-full shadow-lg transform sm:rotate-0 rotate-90">
//     <svg className="absolute w-full h-full" viewBox="0 0 220 220">
//       {/* Outer Circle */}
//       <circle cx="110" cy="110" r="100" fill="none" stroke="#333" strokeWidth="3" />
//       {/* MISSION Half */}
//       <path d="M110,10 A100,100 0 0,1 110,210" fill="#ff5722" />
//       {/* VISION Half */}
//       <path d="M110,10 A100,100 0 0,0 110,210" fill="#2196f3" />
//       {/* Curved Text for MISSION */}
//       <path id="leftSidePath" d="M 110,40 A 70,70 0 0,1 110,180" fill="none" />
//       <text>
//         <textPath href="#leftSidePath" startOffset="50%" textAnchor="middle">
//           <tspan className="mission-text">MISSION</tspan>
//         </textPath>
//       </text>
//       {/* Curved Text for VISION */}
//       <path id="rightSidePath" d="M 110,180 A 70,70 0 0,1 110,40" fill="none" />
//       <text>
//         <textPath href="#rightSidePath" startOffset="50%" textAnchor="middle">
//           <tspan className="vision-text">VISION</tspan>
//         </textPath>
//       </text>
//     </svg>
//     {/* Inner Circle */}
//     <div className="absolute w-12 h-12 sm:w-20 sm:h-20 bg-white border-4 border-green-500 rounded-full flex items-center justify-center text-xs sm:text-lg font-bold text-gray-800 shadow-lg">
//       OUR
//     </div>
//   </div>
// </div>


//       {/* Vision Carousel */}
//       <div className="w-full lg:w-1/3 px-4">
//         <h2 className="text-lg font-bold mb-4 text-center">Our Mission</h2>
//         <Slider {...settings}>
//           {visionPointsWithImages.map((item, index) => (
//             <div key={index} className="flex flex-col items-center p-4 text-sm md:text-base">
//               <img
//                 src={item.image}
//                 alt={`Vision Point ${index + 1}`}
//                 className="w-full h-40 object-cover rounded-lg mb-4"
//               />
//               <p className="text-center">{item.text}</p>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default AboutCarausel;
import React from "react";
import Slider from "react-slick"; // Importing react-slick
import "slick-carousel/slick/slick.css"; // Slick carousel styles
import "slick-carousel/slick/slick-theme.css";

const AboutCarausel = () => {
  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500, // Speed of slide transition in milliseconds
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Time each slide is displayed (3 seconds)
    arrows: true, // Add navigation arrows for manual control
  };

  const missionPointsWithImages = [
    {
      text: "Become the most trusted online destination for meat products.",
      image: "https://tse3.mm.bing.net/th?id=OIP.x3UG81b-PsF1PMotIPN3sQHaEK&pid=Api&P=0&h=180",
    },
    {
      text: "Promote healthier lifestyles with high-quality, responsibly sourced meats.",
      image: "https://tse3.mm.bing.net/th?id=OIP.vqtRrvxONnx6l0XWaQo_hQHaHa&pid=Api&P=0&h=180",
    },
    {
      text: "Lead the industry in supporting sustainable and ethical farming practices.",
      image: "https://tse4.mm.bing.net/th?id=OIP.TlQC_d53prNCq4iEhEY8MgHaE8&pid=Api&P=0&h=180",
    },
    {
      text: "Foster global trust and preference for our brand.",
      image: "https://www.thegoatspot.net/attachments/2750b063-3942-424a-9dc9-f48e6857ae9a-jpeg.169533/",
      imageStyle: { objectFit: "contain", height: "160px" },
    },
  ];

  const visionPointsWithImages = [
    {
      text: "Provide fresh, premium-quality meat products.",
      image: "https://tse4.mm.bing.net/th?id=OIP.mM2DEBvID0STGJsKAPNN3QHaEt&pid=Api&P=0&h=180",
    },
    {
      text: "Deliver directly to customers' doors for maximum convenience.",
      image: "https://img.freepik.com/premium-vector/delivery-service-illustration_132971-383.jpg?semt=ais_hybrid",
    },
    {
      text: "Commit to ethical sourcing and sustainable practices.",
      image: "https://croesoffice.org/wp-content/uploads/2024/10/Sustainable-Meat.jpg",
    },
    {
      text: "Ensure customer satisfaction through exceptional service.",
      image: "https://tse3.mm.bing.net/th?id=OIP.BZrr1aUFrb_iQL7spqrgIgAAAA&pid=Api&P=0&h=180",
    },
  ];

  return (
    <div className="flex flex-wrap items-center mb-10 bg-lime-700 text-white rounded-lg px-4 py-8 lg:px-20 mx-4 sm:mx-20 lg:py-12">
    {/* Mission Carousel */}
    <div className="w-full lg:w-1/3 px-4 mb-6 lg:mb-0">
      <h2 className="text-lg font-bold mb-4 text-center">Our Mission</h2>
      <Slider {...settings}>
        {missionPointsWithImages.map((item, index) => (
          <div key={index} className="flex flex-col items-center p-4 text-sm md:text-base">
            <img
              src={item.image}
              alt={`Mission Point ${index + 1}`}
              className="w-full h-40 object-cover rounded-lg mb-4"
              style={item.imageStyle || {}}
            />
            <p className="text-center">{item.text}</p>
          </div>
        ))}
      </Slider>
    </div>
  
    {/* Circle Section */}
    <div className="w-full lg:w-1/3 flex justify-center items-center mb-6 lg:mb-0">
      <div className="relative w-40 h-40 sm:w-56 sm:h-56 flex items-center justify-center bg-blue border-4 border-white rounded-full shadow-lg transform sm:rotate-0 rotate-90">
        <svg className="absolute w-full h-full" viewBox="0 0 220 220">
          <circle cx="110" cy="110" r="100" fill="none" stroke="#333" strokeWidth="3" />
          <path d="M110,10 A100,100 0 0,1 110,210" fill="#ff5722" />
          <path d="M110,10 A100,100 0 0,0 110,210" fill="#2196f3" />
          <path id="leftSidePath" d="M 110,40 A 70,70 0 0,1 110,180" fill="none" />
          <text>
            <textPath href="#leftSidePath" startOffset="50%" textAnchor="middle">
              <tspan className="mission-text">VISION</tspan>
            </textPath>
          </text>
          <path id="rightSidePath" d="M 110,180 A 70,70 0 0,1 110,40" fill="none" />
          <text>
            <textPath href="#rightSidePath" startOffset="50%" textAnchor="middle">
              <tspan className="vision-text">MISSION</tspan>
            </textPath>
          </text>
        </svg>
        <div className="absolute w-12 h-12 sm:w-20 sm:h-20 bg-white border-4 border-green-500 rounded-full flex items-center justify-center text-xs sm:text-lg font-bold text-gray-800 shadow-lg">
          OUR
        </div>
      </div>
    </div>
  
    {/* Vision Carousel */}
    <div className="w-full lg:w-1/3 px-4">
      <h2 className="text-lg font-bold mb-4 text-center">Our Vision</h2>
      <Slider {...settings}>
        {visionPointsWithImages.map((item, index) => (
          <div key={index} className="flex flex-col items-center p-4 text-sm md:text-base">
            <img
              src={item.image}
              alt={`Vision Point ${index + 1}`}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <p className="text-center">{item.text}</p>
          </div>
        ))}
      </Slider>
    </div>
  </div>
  
  );
};

export default AboutCarausel;


