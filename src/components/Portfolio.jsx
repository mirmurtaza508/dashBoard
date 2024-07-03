import React, { useContext, useEffect, useState } from "react";
import { themeContext } from "../contexts/themeContext";

const Portfolio = () => {
  const [isDark] = useContext(themeContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const nextSlide = () => {
    setIsSliding(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
      );
      setIsSliding(false);
    }, 500); // Same duration as CSS transition
  };

  const prevSlide = () => {
    setIsSliding(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1
      );
      setIsSliding(false);
    }, 500); // Same duration as CSS transition
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);
  const imageUrls = [
    "https://demo.bootstrapdash.com/corona-new/themes/assets/images/dashboard/Img_5.jpg",
    "https://demo.bootstrapdash.com/corona-new/themes/assets/images/dashboard/img_6.jpg",
    "https://demo.bootstrapdash.com/corona-new/themes/assets/images/dashboard/Rectangle.jpg",
  ];
  return (
    <div
      className={`w-full flex flex-col gap-4 flex-grow p-4 border ${
        isDark ? "bg-gray" : "bg-whi"
      }  border-gray-200`}
    >
      <div className="flex items-center justify-between">
        <h1>Portfolio Slide</h1>
        <div className="flex gap-4">
          <button
            className=" rounded-full hover:bg-opacity-75 focus:outline-none"
            onClick={prevSlide}
          >
            &#10094;
          </button>
          <button
            className=" p-2 rounded-full hover:bg-opacity-75 focus:outline-none"
            onClick={nextSlide}
          >
            &#10095;
          </button>
        </div>
      </div>
      <div className="relative w-full  mx-auto overflow-hidden rounded-lg ">
        <div
          className=" w-full flex gap-4 transition-transform duration-1000"
          style={{ transform: `translateX(-${currentIndex * 100 + 5}%)` }}
        >
          {imageUrls.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`slide-${index}`}
              className="w-full aspect-square h-40 flex-shrink-0 rounded-lg"
            />
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <img
          src="https://demo.bootstrapdash.com/corona-new/themes/assets/images/faces/face12.jpg"
          alt=""
          className="w-11 h-11 rounded-full"
        />
        <div>
          <div className="flex justify-between">
            <h1>CeeCee Bass</h1>
            <span>4 Hours Ago</span>
          </div>
          <p>Well, it seems to be working now</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p>Well, it seems to be working now.</p>
        <div className="w-full flex h-2 bg-gray-600 relative">
          <div className="w-1/2 bg-green-400"></div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
