// components/Navbar.js
"use client"; // Make sure it's a client-side component

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-950 fixed w-full top-0 left-0 z-50 shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-white font-bold text-xl">Lapsa One</div>
          <div className="lg:hidden">
            <button
              className="text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex space-x-6">
            <a href="#" className="text-white hover:text-gray-400">
              Home
            </a>
            <a href="#about" className="text-white hover:text-gray-400">
              About
            </a>
            <a href="#services" className="text-white hover:text-gray-400">
              Services
            </a>
            <a href="./pages/Contacts" className="text-white hover:text-gray-400">
              Contact
            </a>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden bg-gray-800 text-white space-y-4 px-4 py-4">
          <a href="#" className="block">
            Home
          </a>
          <a href="#about" className="block">
            About
          </a>
          <a href="#services" className="block">
            Services
          </a>
          <a href="#contact" className="block">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}