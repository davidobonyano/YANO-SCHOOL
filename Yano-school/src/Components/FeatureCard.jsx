import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

function FeatureCard({ icon, title, description, image }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const [showOverlay, setShowOverlay] = useState(false);

  const handleMobileTap = () => {
    if (window.innerWidth < 768) {
      setShowOverlay(!showOverlay);
    }
  };

  return (
    <div
      ref={ref}
      onClick={handleMobileTap}
      className={`group relative cursor-pointer transition-all duration-700 ease-out transform ${
        inView ? "opacity-100 scale-100" : "opacity-0 scale-90"
      } bg-gray-100  text-gray-700 dark:text-gray-300 rounded-2xl shadow-lg overflow-hidden`}
    >
      {/* Background image */}
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      {/* Overlay on hover/tap */}
      <div
        className={`absolute top-0 left-0 w-full h-48 bg-blue-900/60 dark:bg-blue-800/50 
        transition-opacity duration-300 flex items-center justify-center
        ${showOverlay ? "opacity-100" : "opacity-0"} 
        md:opacity-0 md:group-hover:opacity-100`}
      >
        <Link
          to="/programs"
          className="bg-white text-blue-900 px-4 py-2 rounded-full font-semibold text-sm shadow-md hover:bg-blue-100 transition"
          onClick={(e) => e.stopPropagation()}
        >
          Explore Programs
        </Link>
      </div>

      {/* Text content */}
      <div className="p-6 text-center">
        <FontAwesomeIcon icon={icon} className="text-red-400 text-3xl mb-4" />
        <h3 className="text-xl font-semibold mb-2 text-gray-700 dark:text-white">{title}</h3>
        <p className="text-gray-700 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
}

export default FeatureCard;
