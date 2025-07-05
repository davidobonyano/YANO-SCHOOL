import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";

// Importing images from src/assets
import davidImage from "../assets/images/students/dyano.jpg";
import johnImage from "../assets/images/students/peace.avif";
import fatimaImage from "../assets/images/students/fatima.webp";

const slides = [
  {
    name: "David Efe",
    title: "Geologist & Programmer",
    message: "Na Yano School make me sabi book well-well. Now I dey code and crack rock!",
    image: davidImage,
  },
  {
    name: "John Peace",
    title: "Accountant (ACA, ICAN)",
    message: "Yano School gave me a strong foundation to pursue the highest professional qualifications in Nigeria.",
    image: johnImage,
  },
  {
    name: "Fatima Abdul",
    title: "Surgical Intern (Doctor sha.)",
    message: "Yano School prepared me for life... but them no prepare me for how fast phone battery dey finish in medical school!",
    image: fatimaImage,
  },
];

function Testimonialslider() {
  const [current, setCurrent] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => setHasMounted(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const deltaX = touchStartX.current - touchEndX.current;
    const threshold = 50;
    if (deltaX > threshold) {
      setCurrent((prev) => (prev + 1) % slides.length);
    } else if (deltaX < -threshold) {
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  return (
    <section
      className="relative w-full overflow-hidden py-12"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <h2 className="text-3xl font-bold text-center">
        What Our Students Say
      </h2>
      <div className="flex justify-center mb-6">
        <div className="w-16 h-[2px] mt-2 bg-red-400 rounded-full"></div>
      </div>

      <div
        className={`flex ${
          hasMounted ? "transition-transform duration-700 ease-in-out" : ""
        }`}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full flex flex-col items-center justify-center px-6 text-center"
          >
            <img
              src={slide.image}
              alt={slide.name}
              className="w-28 h-28 rounded-full mb-4 object-cover"
            />
            <p className="text-lg text-gray-700 max-w-xl italic relative">
              “{slide.message}”
              <FontAwesomeIcon
                icon={faQuoteRight}
                className="text-red-400 text-2xl absolute -bottom-6 right-2"
              />
            </p>
            <p className="mt-6 font-semibold text-gray-700">{slide.name}</p>
            <p className="text-sm text-gray-500">{slide.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonialslider;
