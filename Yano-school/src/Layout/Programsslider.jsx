import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faLightbulb,
  faChalkboardTeacher,
} from "@fortawesome/free-solid-svg-icons";

const slides = [
  {
    text: "Moral Excellence",
    icon: <FontAwesomeIcon icon={faCompass} className="text-4xl text-red-400" />,
  },
  {
    text: "Innovative Classrooms",
    icon: <FontAwesomeIcon icon={faLightbulb} className="text-4xl text-red-400" />,
  },
  {
    text: "Caring Teachers",
    icon: <FontAwesomeIcon icon={faChalkboardTeacher} className="text-4xl text-red-400" />,
  },
];

function Programsslider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full h-[200px] md:h-[450px] bg-cover bg-center flex items-center justify-center"
      
    >
      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-50 backdrop-blur-sm z-0" />

      {/* Slide content */}
      <div className="relative z-10 text-center px-4">
        <div className="flex flex-col items-center space-y-4">
          {slides[current].icon}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            {slides[current].text}
          </h2>
        </div>

        {/* Clickable Dots */}
        <div className="flex justify-center mt-6 space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === current ? "bg-red-400" : "bg-gray-400/50 hover:bg-white"
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Programsslider;
