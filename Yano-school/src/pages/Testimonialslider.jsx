// TestimonialsSlider.jsx
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const slides = [
  {
    name: "Jane Doe",
    message: "Yano School helped me build confidence and excel academically.",
    image: "/images/students/jane.jpg",
  },
  {
    name: "John Smith",
    message: "The supportive teachers and modern classrooms made learning fun.",
    image: "/images/students/john.jpg",
  },
  {
    name: "Fatima Abdul",
    message: "From sports to science fairs, I had the best experience!",
    image: "/images/students/fatima.jpg",
  },
];

function Testimonialslider() {
  const [current, setCurrent] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  useEffect(() => {
    // Prevent transition on first load
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
      className="relative w-full overflow-hidden bg-gray-100 py-12"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <h2 className="text-3xl font-bold text-center ">
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
              className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-red-400"
            />
            <p className="text-lg text-gray-700 max-w-xl italic relative">
              “{slide.message}”
              <FontAwesomeIcon
                icon={faQuoteRight}
                className="text-red-400 text-2xl absolute -bottom-6 right-2"
              />
            </p>
            <p className="mt-6 font-semibold text-gray-700">{slide.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonialslider;
