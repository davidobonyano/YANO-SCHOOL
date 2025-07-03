import { useEffect, useState, useRef } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfoCircle,
  faGraduationCap,
  faUserPlus,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

function Rootlayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const sidebarRef = useRef();

  const navLinks = [
    { path: "/", label: "Home", icon: faHome },
    { path: "/about", label: "About", icon: faInfoCircle },
    { path: "/Programs", label: "Programs", icon: faGraduationCap },
    { path: "/Admissions", label: "Admissions", icon: faUserPlus },
    { path: "/contact", label: "Contact", icon: faEnvelope },
  ];

  // Disable scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  // Handle touch for drag-to-close
  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEndX(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) setMenuOpen(false); // Swipe left to close
  };

  return (
    <div className="relative font-sans text-gray-700 min-h-screen overflow-x-hidden">
      {/* Background Dimmer with Blur */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/30  z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-[70%] bg-white z-50 p-6 transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Close Button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-4 right-4 text-xl z-50"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>

        {/* Nav Links */}
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
      </div>

      {/* Page content that transforms when sidebar is open */}
      <div
        className={`transition-transform duration-500 ease-in-out ${
          menuOpen ? "-translate-x-[70%] scale-[0.7] rounded-lg overflow-hidden" : ""
        }`}
      >
        {/* Contact Header (visible on all screens) */}
        <header className="bg-gray-100 text-sm text-gray-600 py-2 px-4 flex justify-between items-center flex-wrap">
          <div className="flex flex-wrap gap-4 items-center">
            <span className="flex items-center gap-2">
              <FontAwesomeIcon icon={faPhone} />
              +234 456 078 890
            </span>
            <span className="flex items-center gap-2">
              <FontAwesomeIcon icon={faEnvelope} />
              info@yanoschool.com
            </span>
            <span className="flex items-center gap-2">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              Ikorodu, Lagos
            </span>
          </div>
        </header>

        {/* Top NavBar (Large Screens) */}
        <nav className="bg-white shadow-md py-4 px-6 hidden md:flex justify-between items-center">
          <h1 className="text-blue-900 font-bold text-2xl">Yano School</h1>
          <div className="flex space-x-6 font-medium">
            {navLinks.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `relative group transition-all duration-200 pb-1 ${
                    isActive ? "text-blue-900 font-semibold" : "text-gray-700"
                  } hover:text-blue-700`
                }
              >
                {({ isActive }) => (
                  <span className="relative group">
                    {label}
                    <span
                      className={`absolute left-0 bottom-0 h-[2px] bg-blue-700 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </span>
                )}
              </NavLink>
            ))}
          </div>
        </nav>

        {/* Mobile Header */}
        <div className="md:hidden flex justify-between items-center px-4 py-3 shadow-md bg-white">
          <NavLink to="/"><h1 className="text-blue-900 font-bold text-xl">Yano School</h1></NavLink>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
            className="text-xl"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>

        {/* Main Content */}
        <main className="flex-grow">
          <Outlet />
        </main>

        {/* Footer */}
        <footer className="bg-gray-100 text-center text-sm text-gray-600 py-4">
          © {new Date().getFullYear()} Yano School. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

export default Rootlayout;
