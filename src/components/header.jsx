import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img
              src="/path/to/logo.png"
              alt="Logo"
              className="h-8 w-8"
            />
          </div>

          {/* Center: Navigation Links (Desktop) */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
              Contact
            </a>
          </nav>

          {/* Right: Login Button (Desktop) */}
          <div className="hidden md:block">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition cursor-pointer">
              Log In
            </button>
          </div>

          {/* Hamburger Button (Mobile) */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600"
            aria-label="Toggle menu"
          >
            {/* Hamburger icon */}
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              {isOpen ? (
                // X icon when open
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                // Hamburger icon when closed
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Side Drawer (Mobile Menu) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <img src="/path/to/logo.png" alt="Logo" className="h-8 w-8" />
            <span className="font-bold text-lg">Menu</span>
          </div>
          <button
            onClick={toggleMenu}
            aria-label="Close menu"
            className="text-gray-700 hover:text-gray-900"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-4">
          <a
            href="#"
            onClick={toggleMenu}
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Home
          </a>
          <a
            href="#"
            onClick={toggleMenu}
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            About
          </a>
          <a
            href="#"
            onClick={toggleMenu}
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Contact
          </a>
          <button
            onClick={toggleMenu}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition cursor-pointer mt-4"
          >
            Log In
          </button>
        </nav>
      </div>

      {/* Overlay when menu is open */}
      {isOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black bg-opacity-30 z-30"
          aria-hidden="true"
        />
      )}
    </header>
  );
};

export default Header;
