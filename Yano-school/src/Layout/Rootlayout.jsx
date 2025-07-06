import { useEffect, useState, useRef } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome, faInfoCircle, faGraduationCap, faUserPlus, faEnvelope,
  faPhone, faMapMarkerAlt, faBars, faTimes, faSun, faMoon, faArrowUp
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../Components/Footer";
import YanoLogo from "../assets/yano logo.png";

function Rootlayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const sidebarRef = useRef();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const navLinks = [
    { path: "/", label: "Home", icon: faHome },
    { path: "/about", label: "About", icon: faInfoCircle },
    { path: "/programs", label: "Programs", icon: faGraduationCap },
    { path: "/admissions", label: "Admissions", icon: faUserPlus },
    { path: "/contact", label: "Contact", icon: faEnvelope },
  ];

  useEffect(() => {
    const storedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(storedMode);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative font-sans text-gray-700 min-h-screen overflow-x-hidden">
      {/* Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-4 left-4 z-50 p-3 rounded-full shadow-md transition-colors duration-300 ${
            darkMode ? "bg-white text-black" : "bg-blue-700 text-white"
          } hover:scale-110`}
          aria-label="Back to top"
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      )}

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Sidebar - Mobile and Tablet */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-[70%] bg-white dark-sidebar z-50 p-6 transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto max-h-screen ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-4 right-4 text-xl z-50"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>

        <nav className="flex flex-col space-y-6 mt-12">
          {navLinks.map(({ path, label, icon }) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-md transition-colors duration-200 ${
                  isActive
                    ? "bg-blue-100 text-blue-900 font-semibold"
                    : "hover:bg-blue-50"
                }`
              }
            >
              <FontAwesomeIcon icon={icon} />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => {
            setDarkMode(!darkMode);
            setMenuOpen(false);
          }}
          className={`mt-8 self-start transition-colors duration-300 w-10 h-10 flex items-center justify-center 
            ${darkMode 
              ? "bg-white text-black border border-gray-400 rounded-full" 
              : "bg-gray-200 text-blue-900 rounded-full border border-transparent"
            }`}
          aria-label="Toggle Dark Mode"
        >
          <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
        </button>
      </div>

      {/* Main Page Content */}
      <div className={`transition-transform duration-500 ease-in-out ${
        menuOpen ? "-translate-x-[70%] scale-[0.7] rounded-lg overflow-hidden" : ""
      }`}>

        {/* Contact Header */}
        <header className={`text-sm py-2 px-4 flex justify-between items-center flex-wrap z-20 transition-all duration-300 ${
          isHomePage
            ? "absolute top-0 left-0 w-full text-gray-700 bg-transparent"
            : "bg-gray-100 text-gray-600"
        }`}>
          <div className="flex flex-wrap gap-4 items-center">
            <span className="flex items-center gap-2">
              <FontAwesomeIcon icon={faPhone} />
              +234 90 355 26 146
            </span>
            <span className="flex items-center gap-2">
              <FontAwesomeIcon icon={faEnvelope} />
              info@yanoschool.com
            </span>
            <span className="flex items-center gap-2">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              Ikorodu, Lagos.
            </span>
          </div>
        </header>

        {/* Desktop Nav */}
        <nav className={`z-30 hidden lg:flex items-center px-6 ${
          isHomePage
            ? "absolute lg:top-13 left-1/2 transform -translate-x-1/2 w-[80%] bg-white text-blue-900 rounded-xl shadow-md  justify-between"
            : "bg-lightmode-header dark:bg-darkmode-header shadow-md py-4 justify-between"
        }`}>
          <NavLink to="/">
            <img
              src={YanoLogo}
              alt="Yano School Logo"
              className="h-16 w-auto object-contain"
            />
          </NavLink>
          <div className="flex space-x-6 font-medium items-center">
            {navLinks.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `relative group transition-all duration-200 pb-1 ${
                    isActive
                      ? "text-blue-900 font-semibold"
                      : `${isHomePage ? "text-blue-900" : "text-gray-700 dark:text-gray-300"}`
                  } hover:text-blue-700 dark:hover:text-white`
                }
              >
                {label}
                <span
                  className={`absolute left-0 -bottom-3 h-[2px] bg-blue-700 transition-all duration-300 ${
                    location.pathname === path ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </NavLink>
            ))}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`ml-4 transition-colors duration-300 w-10 h-10 flex items-center justify-center 
                ${darkMode 
                  ? "bg-white text-black border border-gray-400 rounded-full" 
                  : "bg-gray-200 text-blue-900 rounded-full border border-transparent"
                }`}
              aria-label="Toggle Dark Mode"
            >
              <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
            </button>
          </div>
        </nav>

        {/* Mobile & Tablet Header */}
        <div className={`flex lg:hidden justify-between items-center px-4  shadow-md transition-all duration-300 ${
          isHomePage
            ? "absolute top-[80px] w-[80%]  left-1/2 transform -translate-x-1/2 bg-white z-30 rounded-xl shadow-md"
            : "bg-lightmode-header dark:bg-darkmode-header"
        }`}>
          <NavLink to="/">
            <img
              src={YanoLogo}
              alt="Yano School Logo"
              className="h-15 w-auto object-contain"
            />
          </NavLink>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
            className={`text-xl ${
              isHomePage ? "text-blue-900" : darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>

        {/* Main Content */}
        <main className="flex-grow">
          <Outlet />
        </main>

        {/* Footer */}
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default Rootlayout;
