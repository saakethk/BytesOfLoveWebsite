import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <nav className="header-container flex flex-row w-full border-b-2 items-center justify-between border-custom-purple bg-[#fccbff] relative z-50">
      <div className="logo-container flex flex-row items-center">
        <img
          src="https://docs.ufosc.org/img/logo.png"
          className="logo cursor-pointer"
          onClick={() => window.open("https://ufosc.org/", "_blank")}
          alt="UF OSC Logo"
        />
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden sm:flex flex-row justify-evenly items-center sm:gap-8 md:gap-16 px-6 md:px-10 ml-auto">
        <div
          className="header-option-container"
          onClick={() => handleNavigate(`/`)}
        >
          <div className="header-option-text">Home</div>
        </div>

        <div
          className="header-option-container"
          onClick={() => handleNavigate(`/download`)}
        >
          <div className="header-option-text">Download</div>
        </div>

        <div
          className="header-option-container"
          onClick={() => handleNavigate(`/about`)}
        >
          <div className="header-option-text">About</div>
        </div>
      </div>

      {/* Mobile Hamburger Button */}
      <button
        type="button"
        className="sm:hidden flex items-center justify-center p-2 mr-3 text-custom-purple hover:opacity-80 focus:outline-none"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="sm:hidden absolute top-full left-0 w-full bg-[#fccbff] border-b-2 border-custom-purple shadow-md flex flex-col items-center py-4 gap-3 z-50">
          <div
            className="header-option-container py-1"
            onClick={() => handleNavigate(`/`)}
          >
            <div className="header-option-text">Home</div>
          </div>

          <div
            className="header-option-container py-1"
            onClick={() => handleNavigate(`/download`)}
          >
            <div className="header-option-text">Download</div>
          </div>

          <div
            className="header-option-container py-1"
            onClick={() => handleNavigate(`/about`)}
          >
            <div className="header-option-text">About</div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
