"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Auto-close on route change
  useEffect(() => {
    const handleRouteChange = () => {
      setIsOpen(false);
      setMobileDropdownOpen(false);
    };

    router.events?.on?.("routeChangeStart", handleRouteChange);
    return () => {
      router.events?.off?.("routeChangeStart", handleRouteChange);
    };
  }, [router]);

  const isActive = (href) => pathname === href;

  return (
    <nav className="fixed w-full top-0 left-0 z-50 backdrop-blur-sm bg-blue-950 shadow-md">
      <div className="max-w-screen-xl mx-auto px-6 py-0">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="block">
              <Image
                src="/images/lapsalogo-removebg-preview.png"
                alt="Lapsa Logo"
                width={80}
                height={10}
                priority
                className="h-auto w-auto"
              />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden">
            <button className="text-white" onClick={() => setIsOpen(!isOpen)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
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
          <div className="hidden lg:flex space-x-6 font-mono text-lg items-center">
            <NavLink href="/" active={isActive("/")}>Home</NavLink>
            <NavLink href="/about" active={isActive("/about")}>About</NavLink>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-white hover:text-orange-500 transition">
                Services
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white text-gray-800 rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
                <div className="p-4 space-y-2">
                  <DropdownGroup
                    title="Our Services"
                    color="text-blue-700"
                    links={[
                      { href: "/web", label: "Web Development" },
                      { href: "/graphics", label: "Graphic Design" },
                      { href: "/art", label: "Art & Other Services" },
                    ]}
                  />
                </div>
              </div>
            </div>

            <NavLink href="/contacts" active={isActive("/contacts")}>Contact</NavLink>
          </div>
        </div>
      </div>

      {/* Mobile Navigation with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="lg:hidden bg-blue-950/90 text-white px-6 py-4 font-mono text-lg space-y-4 overflow-hidden"
          >
            <MobileLink href="/" isActive={isActive("/")} onClick={() => setIsOpen(false)}>
              Home
            </MobileLink>
            <MobileLink href="/about" isActive={isActive("/about")} onClick={() => setIsOpen(false)}>
              About
            </MobileLink>

            {/* Mobile Dropdown Toggle */}
            <div>
              <button
                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                className="w-full text-left hover:text-orange-500"
              >
                Services
                <span className="float-right">{mobileDropdownOpen ? "−" : "+"}</span>
              </button>

              <AnimatePresence>
                {mobileDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-2 ml-3 space-y-3 text-sm overflow-hidden"
                  >
                    <DropdownGroupMobile
                      title="Our Services"
                      color="text-blue-300"
                      links={[
                        { href: "/web", label: "Web Development" },
                        { href: "/graphics", label: "Graphic Design" },
                        { href: "/art", label: "Art & Other Services" },
                      ]}
                      onLinkClick={() => {
                        setIsOpen(false);
                        setMobileDropdownOpen(false);
                      }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <MobileLink href="/contacts" isActive={isActive("/contacts")} onClick={() => setIsOpen(false)}>
              Contact
            </MobileLink>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// Desktop NavLink
function NavLink({ href, children, active }) {
  return (
    <Link
      href={href}
      className={`hover:text-orange-500 transition ${
        active ? "text-orange-500" : "text-white"
      }`}
    >
      {children}
    </Link>
  );
}

// Mobile NavLink
function MobileLink({ href, children, isActive, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`block hover:text-orange-500 ${isActive ? "text-orange-500" : ""}`}
    >
      {children}
    </Link>
  );
}

// Desktop Dropdown Group
function DropdownGroup({ title, color, links }) {
  return (
    <div>
      <p className={`font-semibold ${color} mb-1`}>{title}</p>
      <ul className="space-y-1 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="hover:text-blue-500">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Mobile Dropdown Group
function DropdownGroupMobile({ title, color, links, onLinkClick }) {
  return (
    <div>
      <p className={`font-semibold ${color}`}>{title}</p>
      <ul className="ml-3 space-y-1">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="block hover:underline"
              onClick={onLinkClick}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
