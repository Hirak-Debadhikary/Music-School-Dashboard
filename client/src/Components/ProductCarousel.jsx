import React, { useEffect, useState } from "react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { RxDotFilled } from "react-icons/rx";

const ProductCarousel = () => {
  const slides = [
    {
      url: "https://img.freepik.com/free-vector/promotion-banner-package-milk-chocolate-with-hazelnuts-isolated-brown-background_1441-2198.jpg",
    },
    {
      url: "https://img.pikbest.com/origin/05/84/45/103pIkbEsTaI4.jpg!w700wp",
    },
    {
      url: "https://img.freepik.com/free-psd/flat-design-world-chocolate-day-template_23-2150426213.jpg?w=2000",
    },

    {
      url: "https://img.freepik.com/free-psd/world-chocolate-day-landing-page-template_23-2150430300.jpg?w=2000",
    },
    {
      url: "https://img.freepik.com/premium-psd/slim-chocolate-boxes-mockup_1332-22827.jpg?w=2000",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  return (
    <div className="max-w-[1200px] h-[650px] w-full m-auto py-16 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <GrFormPrevious onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <GrFormNext onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
