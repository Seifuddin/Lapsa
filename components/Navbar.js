"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 z-50 backdrop-blur-md bg-blue-950 border-b border-orange-500 shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo & Brand */}
          <div className="text-white font-bold text-xl items-center">
            Lapsa
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button className="text-white" onClick={() => setIsOpen(!isOpen)}>
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

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-6">
            <Link href="/" className="text-white hover:text-orange-600 transition">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-orange-600 transition">
              About
            </Link>
            <Link href="/services" className="text-white hover:text-orange-600 transition">
              Services
            </Link>
            <Link href="/contacts" className="text-white hover:text-orange-600 transition">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden backdrop-blur-lg bg-blue-950/80 text-white space-y-4 px-4 py-4">
          <Link href="/" className="block hover:text-orange-600 transition" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/about" className="block hover:text-orange-600 transition" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href="/services" className="block hover:text-orange-600 transition" onClick={() => setIsOpen(false)}>
            Services
          </Link>
          <Link href="/contacts" className="block hover:text-orange-600 transition" onClick={() => setIsOpen(false)}>
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}